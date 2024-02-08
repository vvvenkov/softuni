function fromJsonToHtmlTable(json) {
    let parsed = JSON.parse(json)

    let headers = Object.keys(parsed[0]);
    let values = parsed.map(obj => Object.values(obj));
    let val;

    let result = "<table>\n";

    appendHeaders(headers);
    appendValues(values);
    escape(val);

    result += `</table>`;

    function appendHeaders() {
        result += "   <tr>";

        for (let header of headers) {
            result += `<th>${header}</th>`;
        }
        result += `</tr>\n`;
    }

    function appendValues(values) {
        for (let value of values) {
            result += "   <tr>";
            for (val of value) {
                result += `<td>${escape(val)}</td>`;
            }
            result += `</tr>\n`;
        }
    }

    function escape(val) {
        return val.toString().replace("<", "&lt;").replace(">", "&gt;");
    }
    console.log(result);
}
fromJsonToHtmlTable`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`