function myFunction2_1() {

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    
    var sss = ss.getSheetByName("持股明細");
    
    var xxx = sss.getRange(1, 1, 10,3).getValues(); //指定資料範圍
    //var xxx1 = sss.getDataRange().getValues(); //自動抓取資料範圍
    Logger.log (xxx) ;

    var vvv = xxx[0][0];
    Logger.log (vvv);

}