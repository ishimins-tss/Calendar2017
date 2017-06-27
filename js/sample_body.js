//ƒJƒŒƒ“ƒ_[•`‰æ—p
document.write("<table class='tablemain'>");

document.write("<tr class='titles'><td colspan='7'>" + year + "”N" + (month + 1) + "Œ</td></tr>");

document.write("<tr class='titleLine'>"); //—j“ús‚Ìˆ—
for(i=0; i<7; i++) {
    if(i == 0){ //“ú—j“ú‚Ì‚Æ‚«
    document.write("<td class='calSunTit'"); //“ú—j“ú—p‚Ì”wŒiFˆ—
    } else if(i == 6) {
    document.write("<td class='calSatTit'"); //“y—j“ú—p‚Ì”wŒiFˆ—
    } else { //‚»‚êˆÈŠOi•½“új
    document.write("<td");
    }
    document.write(">" + newWeekdayTable[i] +"</td>");  //—j“ú‘‚«‚İ
}
document.write("</tr>");

for(i=0; i<cldLines; i++) { //s”‚É‰‚¶‚Ä
    document.write("<tr>");
    for(j=0; j<7; j++) { //—ñ”=7
        newDate = cldTable[j + (i * 7)];
        if(newDate == date) { //¡“ú‚Ì‚Æ‚«
            document.write("<td class='calToday'>");
        } else if (j == 0) { //“ú—j“ú‚Ì‚Æ‚«
            document.write("<td class='calSun'>");
        } else if (j == 6) { //“y—j“ú‚Ì‚Æ‚«
            document.write("<td class='calSat'>");
        } else {
            document.write("<td>");
        }
        document.write(newDate); //“ú‚ğ‚P‚Â‚¸‚ÂŠi”[
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
