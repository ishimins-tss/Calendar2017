var newDate = new Date();
var newWeekdayTable = new Array("日","月","火","水","木","金","土"); //曜日配列
var newMonth = new Array(31,28,31,30,31,30,31,31,30,31,30,31); //各月の日数(2月のみ例外を入れるため後述)
if ((year % 4) == 0) {
    newMonth[1] = 29; //うるう年処理
}

//本日を特定する
var year = newDate.getFullYear(); //年
var month = newDate.getMonth(); //月(+1して使う)
var date = newDate.getDate(); //日
var weekday = newDate.getDay(); //曜日(数字を曜日に変換)

newDate.setDate(1); //月の最初の日の情報を読み込む
var weekday = newDate.getDay();
var cldLines = Math.ceil((weekday + newMonth[month]) / 7); //カレンダー行数の設定
var cldTable = new Array(7 * cldLines); //1か月分のマスの配列を作成

//配列に日付入れパート
for(i=0; i<7*cldLines; i++) {
    cldTable[i] = "--"; //まず各マスに何かいれておく
}

for(i=0; i<newMonth[month]; i++) {
    cldTable[weekday + i] = i + 1; //1日目の曜日を特定し、順番に日付をいれる
}
