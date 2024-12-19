function myFunction() {
  // 取得目前使用中的試算表
  var sheet = SpreadsheetApp.getActiveSpreadsheet();
  // 取得"J1"上的數值
  var cellvalue = sheet.getRange("J1").getValue();
  // 顯示變數 cellvalue內的資料
  Logger.log(cellvalue);

  // 確認 J1 的數值是 Mail 及電話
  // 從目前的試算表，取得 J1 中的值，並存放在變數 str1 中。
  var str1 = sheet.getRange("J1").getValue();
  
  // 使用 indexOf() 函式在字串 str1 中,尋找有沒有「@」字元，將儲存到 s 中。
  // 若 str1 中有找到「@」會顯示 1，若找不到，則回傳 -1。
  var s = str1.indexOf("@");
  //顯示上述 s 的結果
  Logger.log(s);

  // 使用 indexOf() 函式在字串 str1 中,尋找有沒有「09」字元，將儲存到 sss 中。
  // 若 str1 中有找到「09」會顯示 1，若找不到，則回傳 -1。
  var sss = str1.indexOf("09");
  // 顯示上述的 sss 的結果
  Logger.log(sss);

  // 確認 J1 的值沒有 @ 且 開頭不是 09
  // s < 0：在字串中找不到 "@" 字元。
  // sss != 0：字串中 "09" 並非09開頭的文字。
  if (s < 0 && sss != 0) {
    // 使用 SQL 查詢字串，用來在 QUERY 函數中，A欄位 (where A=...) 所有的文字
    var sql = '"select A,B,C,D,E,F,G where A=\'' + cellvalue + '\'"';
    // 將一個字串 "'工作表2'!A1:G21" 指派給 rg 變數
    var rg = "'工作表2' !A1:G21";
    // 組合整體公式
    var qry = '=IFERROR(QUERY(' + rg + ',' + sql + '),"查無目標")';
    // 寫入 I3 儲存格
    sheet.getRange("I3").setFormula(qry);

  var getmsg = sheet.getRange("I3").getValue();

  if ( getmsg == "查無目標" ){
    // 組合 SQL 字串，注意引號使用
    var sql = '"select A,B,C,D,E,F,G where D=\'' + cellvalue + '\'"';
    // 將一個字串 "'工作表2'!A1:G21" 指派給 rg 變數
    var rg = "'工作表2' !A1:G21";
    // 組合整體公式
    var qry = '=IFERROR(QUERY(' + rg + ',' + sql + '),"查無目標")';
    // 寫入 I3 儲存格
    sheet.getRange("I3").setFormula(qry);

  }
  }

  // 若有 @ 且 開頭不是 09
  if (s > 0 && sss != 0) {
    var sql = '"select A,B,C,D,E,F,G where C=\'' + cellvalue + '\'"';
    // 將一個字串 "'工作表2'!A1:G21" 指派給 rg 變數
    var rg = "'工作表2' !A1:G21";
    var qry = '=IFERROR(QUERY(' + rg + ',' + sql + '),"查無目標")';
    sheet.getRange("I3").setFormula(qry);
  }

  // 若開頭為 09
  if (sss == 0) {
    var sql = '"select A,B,C,D,E,F,G where B=\'' + cellvalue + '\'"';
    // 將一個字串 "'工作表2'!A1:G21" 指派給 rg 變數
    var rg = "'工作表2' !A1:G21";
    var qry = '=IFERROR(QUERY(' + rg + ',' + sql + '),"查無目標")';
    sheet.getRange("I3").setFormula(qry);
  }

}
