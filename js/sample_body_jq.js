$(document).ready(

  $('body').append($("<table>", {
  target: "_blank",
  "class": "tablemain"
  }));

    $('table').append($("<tr class='titles'><td colspan='7'>" + year + "�N" + (month + 1) + "��</td></tr>", {
    "class": "titles"
    }));

    $('table').append($("<tr>", {
    "class": "titleLine"
    }));

      for(i=0; i<7; i++) {
        if(i == 0){
          $('.titleLine').append($("<td>", {
          "class": "calSunTit"
          }));
        } else if (i == 6) {
          $('.titleLine').append($("<td>", {
          "class": "calSatTit"
          }));
        } else {
          $('.titleLine').append($("<td>", {
          "class": "calNonTit"
          }));
        }
        $('.titleLine').append("</td>");
      }
      $('table').append("</tr>");

    for(i=0; i<cldLines; i++) {
      $('table').append($("<tr>", {
      "class" : "calDayIndex"
      }));
      
      for(j=0; j<7; j++) {
        newDate = cldTable[j + (i * 7)];
        if(newDate == date) {
          $('.calDayIndex').append($("<td>", {
          "class" : "calToday"
          }));
        } else if (j == 0) {
          $('.calDayIndex').append($("<td>", {
          "class" : "calSun"
          }));
        } else if (j == 6) {
          $('.calDayIndex').append($("<td>", {
          "class" : "calSat"
          }));
        } else {
          $('.calDayIndex').append($("<td>", {
          "class" : "calNone"
          }));
        }
        $('.calDayIndex').append(newDate);
        
        $('.calDayIndex').append("</td>");
      }
      $('table').append("</tr>");
    }
    $('body').append("</table>");
);