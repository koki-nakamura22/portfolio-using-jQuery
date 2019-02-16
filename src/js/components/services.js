import Utils from "../utils";
import servicesData from "../../../public/json/services.json";

export default class Services {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $services = $(`
    <div class="section-heading">
      <h3 class="title is-2">${Utils.escapeHtml(servicesData.title)}</h3>
      <h4 class="subtitle is-5">${Utils.escapeHtml(servicesData.description)}</h4>
    </div>
    `);
    let $container = $('<div class="container"></div>');
    let $columns = null;
    for (let service of servicesData.services) {
      if($columns == null) {
        $columns = $('<div class="columns"></div>');
        $columns.append(generateColumn$DOM(service));
      } else {
        $columns.append(generateColumn$DOM(service));
        $container.append($columns);
        $columns = null;
      }
    }
    if ($columns != null) {
      $container.append($columns);
    }
    $services.append($container);
    $(this.targetId).append($services);

    function generateColumn$DOM(data) {
      let detail;
      if (data.detail instanceof Array) {
        let newLineWord = "<br>";
        detail = "";
        for (let line of data.detail) {
          detail += `${Utils.escapeHtml(line)}${newLineWord}`;
        }
        let lastIndex = detail.lastIndexOf(newLineWord);
        detail = detail.substring(0, lastIndex);
      } else {
        detail = Utils.escapeHtml(data.detail);
      }
      return $(`
      <div class="column">
        <div class="box">
          <div class="content">
            <h4 class="title is-5">${Utils.escapeHtml(data.title)}</h4>
            ${detail}
          </div>
        </div>
      </div>
      `);
    }
  }
}