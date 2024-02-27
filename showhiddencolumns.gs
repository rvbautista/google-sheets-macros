/** Macros for use in Lido.app tutorial Google Sheets Macros */
/** https://github.com/rvbautista/google-sheets-macros/ */
/** Shows all hidden columns in the active sheet */

function showColumns() {
  var sheet = SpreadsheetApp.getActiveSheet();
  var range = sheet.getDataRange();
  sheet.unhideColumn(range);
}
