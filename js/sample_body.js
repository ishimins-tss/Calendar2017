//カレンダー描画用
document.write("<table class='tablemain'>");

document.write("<tr class='titles'><td colspan='7'>" + year + "年" + (month + 1) + "月</td></tr>");

document.write("<tr class='titleLine'>"); //曜日行の処理
for(i=0; i<7; i++) {
    if(i == 0){ //日曜日のとき
    document.write("<td class='calSunTit'"); //日曜日用の背景色処理
    } else if(i == 6) {
    document.write("<td class='calSatTit'"); //土曜日用の背景色処理
    } else { //それ以外（平日）
    document.write("<td");
    }
    document.write(">" + newWeekdayTable[i] +"</td>");  //曜日書き込み
}
document.write("</tr>");

for(i=0; i<cldLines; i++) { //行数に応じて
    document.write("<tr>");
    for(j=0; j<7; j++) { //列数=7
        newDate = cldTable[j + (i * 7)];
        if(newDate == date) { //今日のとき
            document.write("<td class='calToday'>");
        } else if (j == 0) { //日曜日のとき
            document.write("<td class='calSun'>");
        } else if (j == 6) { //土曜日のとき
            document.write("<td class='calSat'>");
        } else {
            document.write("<td>");
        }
        document.write(newDate); //日を１つずつ格納
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
