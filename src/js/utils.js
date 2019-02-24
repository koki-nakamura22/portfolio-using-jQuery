export default class Utils {
  static arrayToHtml(arr) {
    if (arr instanceof Array) {
      let newLineWord = "<br>";
      let html = "";
      for (let line of arr) {
        html += `${this.escapeHtml(line)}${newLineWord}`;
      }
      let lastIndex = html.lastIndexOf(newLineWord);
      html = html.substring(0, lastIndex);
      return html;
    } else {
      return arr;
    }
  }

  static escapeHtml(str){
    str = str.replace(/&/g, '&amp;');
    str = str.replace(/>/g, '&gt;');
    str = str.replace(/</g, '&lt;');
    str = str.replace(/"/g, '&quot;');
    str = str.replace(/'/g, '&#x27;');
    str = str.replace(/`/g, '&#x60;');
    return str;
  }

  static convEmptyStrToNothing(str) {
    return str == "" ? "Nothing" : str;
  }
}
