function myFunction2_3() {

    var ss = SpreadsheetApp.getActiveSpreadsheet();

    var sss = ss.getSheetByName("工作表2");


    var xxx = [
        [1,2,3,4,5,6,7,8,9,10,11,12],
        [4,5,6,7,8,9,10,11,12,13,14,15],
        [7,8,9,10,11,12,14,15,15,16,17,18],
        [1,2,3,4,5,6,7,8,9,10,11,12],
        [4,5,6,7,8,9,10,11,12,13,14,15],
        [7,8,9,10,11,12,13,14,15,16,17,18],
        [1,2,3,4,5,6,7,8,9,10,11,12],
        [4,5,6,7,8,9,10,11,12,13,14,15],
        [7,8,9,10,11,12,13,14,15,16,17,18],
        [1,2,3,4,5,6,7,8,9,10,11,12],
        [4,5,6,7,8,9,10,11,12,13,14,15],
        [7,8,9,10,11,12,13,14,15,16,17,18],
        [1,2,3,4,5,6,7,8,9,10,11,12],
        [4,5,6,7,8,9,10,11,12,13,14,15],
        [4,5,6,7,8,9,10,11,12,13,14,15],
        [7,8,9,10,11,12,13,14,15,16,17,18]
        ]

//xxx.splice(1,0, "@@@@@@@@@@@@");

//xxx[8][5]="###";

//Logger.log(xxxxxx) ;

Logger.log(xxx.length);

for(var ii = 0 ; ii < xxx.length ; ++ii)
{
    //Logger.log("ii="+ii);
    for(var jj = 0 ; jj < xxx[ii].length ; ++jj)
    {
    Logger.log("jj="+jj);
    sss.getRange(ii + 1, jj + 1).setValue(xxx[ii][jj]);
    }
}
//延遲1秒
Utilities.sleep(1000);

}