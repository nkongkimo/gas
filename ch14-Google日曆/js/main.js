function showCalendar() {
    displayCal();
}

function displayCal() {
    var iframeURL = 'https://calendar.google.com/calendar/embed?showTitle=0&wkst=1&';
    $("#calList .form-check input:checked").each(function () {
        iframeURL += $(this).val();
    });
    iframeURL += '&ctz=Asia%2FTaipei';
    $('#ifCal').attr('src', iframeURL);
}
