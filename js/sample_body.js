//�J�����_�[�`��p
document.write("<table class='cl1'>");

document.write("<tr class='cl2'><td colspan='7'>" + year + "�N" + (month + 1) + "��</td></tr>");

document.write("<tr class='cl5'>"); //�j���s�̏���
for(i=0; i<7; i++) {
    if(i == 0){ //���j���̂Ƃ�
    document.write("<td class='cl3w'"); //���j���p�̔w�i�F����
    } else if(i == 6) {
    document.write("<td class='cl4w'"); //�y�j���p�̔w�i�F����
    } else { //����ȊO�i�����j
    document.write("<td");
    }
    document.write(">" + newWeekdayTable[i] +"</td>");  //�j����������
}
document.write("</tr>");

for(i=0; i<cldLines; i++) { //�s���ɉ�����
    document.write("<tr>");
    for(j=0; j<7; j++) { //��=7
        newDate = cldTable[j + (i * 7)];
        if(newDate == date) { //�����̂Ƃ�
            document.write("<td class='cl6'>");
        } else if (j == 0) { //���j���̂Ƃ�
            document.write("<td class='cl3'>");
        } else if (j == 6) { //�y�j���̂Ƃ�
            document.write("<td class='cl4'>");
        } else {
            document.write("<td>");
        }
        document.write(newDate); //�����P���i�[
        document.write("</td>");
    }
    document.write("</tr>");
}
document.write("</table>");
