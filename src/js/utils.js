export default class Utils {
  static arrayToHtml(arr) {
    if (arr instanceof Array) {
      let newLineWord = "<br>";
      let html = "";
      for (let line of arr) {
        html += `${line}${newLineWord}`;
      }
      let lastIndex = html.lastIndexOf(newLineWord);
      html = html.substring(0, lastIndex);
      return html;
    } else {
      return arr;
    }
  }
}