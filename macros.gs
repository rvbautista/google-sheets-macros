/** Macros for use in Lido.app tutorial Google Sheets Macros */

function headerformat() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1:H1').activate();
  spreadsheet.getActiveSheet().setRowHeight(1, 44);
  spreadsheet.getActiveRangeList().setBackground('#fce5cd')
  .setFontWeight('bold')
  .setHorizontalAlignment('center');
};
