//ƒJƒŒƒ“ƒ_[•`‰æ—p
document.write("<table class='cl1'>");

document.write("<tr class='cl2'><td colspan='7'>" + year + "”N" + (month + 1) + "Œ</td></tr>");

document.write("<tr class='cl5'>"); //—j“ús‚Ìˆ—
for(i=0; i<7; i++) {
    if(i == 0){ //“ú—j“ú‚Ì‚Æ‚«
    document.write("<td class='cl3w'"); //“ú—j“ú—p‚Ì”wŒiFˆ—
    } else if(i == 6) {
    document.write("<td class='cl4w'"); //“y—j“ú—p‚Ì”wŒiFˆ—
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
            document.write("<td class='cl6'>");
        } else if (j == 0) { //“ú—j“ú‚Ì‚Æ‚«
            document.write("<td class='cl3'>");
        } else if (j == 6) { //“y—j“ú‚Ì‚Æ‚«
            document.write("<td class='cl4'>");
        } else {
            document.write("<td>");
        }
        document.write(newDate); //“ú‚ğ‚P‚Â‚¸‚ÂŠi”[
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
