// ==UserScript==
// @name         EasyPaste
// @namespace    NA
// @version      0.1
// @description  helps you to paste to multiple inputs!
// @author       Mr. Barutcu
// @match        */Gradebook/PopupManager.aspx?uc=GradeAssignment&assignmentId=*
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
            var formattedNumber = ("0" + sayi).slice(-2);
if (columns[i]=='null') {
            $('input[name="ctl00$c$gradeAssignment$rg1$ctl00$ctl'+formattedNumber+'$decimalTbxNumericValue"]').val('');
}
            else {
                  $('input[name="ctl00$c$gradeAssignment$rg1$ctl00$ctl'+formattedNumber+'$decimalTbxNumericValue"]').val(columns[i]);
            }
        }
    }, 0);
});

    });
