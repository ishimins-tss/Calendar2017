var newDate = new Date();
var newWeekdayTable = new Array("��","��","��","��","��","��","�y"); //�j���z��
var newMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //�e���̓���(2���̂ݗ�O�����邽�ߌ�q)
if ((year % 4) == 0) {
    newMonth[1] = 29; //���邤�N����
}

//�{������肷��
var year = newDate.getFullYear(); //�N
var month = newDate.getMonth(); //��(+1���Ďg��)
var date = newDate.getDate(); //��
var weekday = newDate.getDay(); //�j��(������j���ɕϊ�)

newDate.setDate(1); //���̍ŏ��̓��̏���ǂݍ���
var weekday = newDate.getDay();
var cldLines = Math.ceil((weekday + newMonth[month]) / 7); //�J�����_�[�s���̐ݒ�
var cldTable = new Array(7 * cldLines); //1�������̃}�X�̔z����쐬

//�z��ɓ��t����p�[�g
for(i=0; i<7*cldLines; i++) {
    cldTable[i] = "--"; //�܂��e�}�X�ɉ�������Ă���
}

for(i=0; i<newMonth[month]; i++) {
    cldTable[weekday + i] = i + 1; //1���ڂ̗j������肵�A���Ԃɓ��t�������
}
