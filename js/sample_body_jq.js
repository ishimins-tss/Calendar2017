$('body').append("<table class='tablemain'></table>");

$('table').append("<tr class='titles'><td colspan='7'>" + year + "”N" + (month + 1) + "ŒŽ</td></tr>");

$('table').append("<tr id='trindex' class='titleLine'></tr>");
for(i=0; i<7; i++) {
    if(i == 0){
    $('#trindex').append("<td class='calSunTit'>" + newWeekdayTable[i] +"</td>");
    } else if(i == 6) {
    $('#trindex').append("<td class='calSatTit'>" + newWeekdayTable[i] +"</td>");
    } else {
    $('#trindex').append("<td>" + newWeekdayTable[i] +"</td>");
    }
}

for(i=0; i<cldLines; i++) {
    $('table').append("<tr></tr>");
    for(j=0; j<7; j++) {
        newDate = cldTable[j + (i * 7)];
        if(newDate == date) {
            $('tr').last().append("<td class='calToday'>" + newDate + "</td>");
        } else if (j == 0) {
            $('tr').last().append("<td class='calSun'>" + newDate + "</td>");
        } else if (j == 6) {
            $('tr').last().append("<td class='calSat'>" + newDate + "</td>");
        } else {
            $('tr').last().append("<td>" + newDate + "</td>");
        }
    }
}
