/*eslint no-console: 0, no-unused-vars: 0, dot-notation: 0*/
/*eslint-env node, es6 */
"use strict";

var conn = $.hdb.getConnection();
var query = "SELECT FROM LIFNR{" + "LIFNR as \"varLIFNR\","+ "BUKRS as \"varBUKRS\" " +"}";

var rs = conn.executeQuery(query);

var body ="";
for(var row of rs){
 	body += row.varLIFNR + "\t" + row.varBUKRS +"\n";
}

$.response.setBody(body);
$.response.contentType = "application/vnd.ms-excel; charset=utf-16le";
$.response.headers.set("Content-Disposition",
		"attachment; filename=Excel.xls");
$.response.status = $.net.http.OK;
