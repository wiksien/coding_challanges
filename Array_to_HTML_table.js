//10.05.2022

function toTable(data, headers = false, index = false) {
  let result = [];

  result.push("<table>");

  if (headers === true) {
    index ? result.push("<thead><tr><th></th>") : result.push("<thead><tr>");

    data[0].forEach((tableHeadValue) =>
      result.push("<th>", tableHeadValue.toString(), "</th>")
    );

    result.push("</tr></thead>");

    data.shift();
  }

  if (index === true) {
    result.push("<tbody>");

    data.forEach(function (tableRow, index) {
      result.push("<tr><td>", index + 1, "</td>");

      tableRow.forEach((value) => result.push("<td>", value, "</td>"));

      result.push("</tr>");
    });

    result.push("</tbody></table>");

    return result.join("");
  }

  result.push("<tbody>");

  data.forEach(function (tableRow, index) {
    result.push("<tr>");

    tableRow.forEach((value) => result.push("<td>", value, "</td>"));

    result.push("</tr>");
  });

  result.push("</tbody></table>");

  return result.join("");
}
