/** Macros for use in Lido.app tutorial Google Sheets Macros */
/** Colors the first 8 cells of the first row in the sheet that serves as the header row of the table */

function headerformat() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1:H1').activate();
  spreadsheet.getActiveSheet().setRowHeight(1, 44);
  spreadsheet.getActiveRangeList().setBackground('#fce5cd')
  .setFontWeight('bold')
  .setHorizontalAlignment('center');
};
