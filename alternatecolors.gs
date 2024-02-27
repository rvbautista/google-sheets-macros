/** Macros for use in Lido.app tutorial Google Sheets Macros */
/** Adds alternating colors to the first 8 columns of the Google Sheets */

function alternatingcolors() {
  var spreadsheet = SpreadsheetApp.getActive();
  spreadsheet.getRange('A1').activate();
  var currentCell = spreadsheet.getCurrentCell();
  spreadsheet.getActiveRange().getDataRegion().activate();
  currentCell.activateAsCurrentCell();
  spreadsheet.getRange('A:H').applyRowBanding(SpreadsheetApp.BandingTheme.LIGHT_GREY);
  var banding = spreadsheet.getRange('A:H').getBandings()[0];
  banding.setHeaderRowColor('#f46524')
  .setFirstRowColor('#ffffff')
  .setSecondRowColor('#ffe6dd')
  .setFooterRowColor(null);
};
