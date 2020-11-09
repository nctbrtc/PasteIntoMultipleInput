// ==UserScript==
// @name         EasyPaste v2
// @namespace    NA
// @version      0.1
// @description  helps you to paste to multiple inputs!
// @author       Mr. Barutcu
// @match        */Gradebook/*
// @grant        none


// ==/UserScript==
$(document).ready(function() {

$('input').bind('paste', null, function(e){
    $this = $(this);

    setTimeout(function(){
        var columns = $this.val().split(/\s+/);
        $this.val(' ');
        var i;

        for(i=0; i < columns.length; i++){
            var sayi = ((i*2)+4);
            
            if (sayi>99)
                               
            {

            $('input[name="ctl00$c$gradeAssignment$rg1$ctl00$ctl'+sayi+'$decimalTbxNumericValue"]').val(columns[i]);
            
            }
            else {
             var formattedNumber = ("0" + sayi).slice(-2);

            $('input[name="ctl00$c$gradeAssignment$rg1$ctl00$ctl'+formattedNumber+'$decimalTbxNumericValue"]').val(columns[i]);
            
            }
            
           
        }
    }, 0);
});

    });
