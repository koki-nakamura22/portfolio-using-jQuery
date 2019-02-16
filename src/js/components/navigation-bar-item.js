import Utils from "../utils";

export default class NavigationBarItem {
  constructor(targetId, jsonData) {
    this.targetId = targetId;
    this.batItemData = jsonData;
  }

  render() {
    let $navigationBarItem = $(`
    <a class="navbar-item" href="#${Utils.escapeHtml(this.batItemData.link)}">
      <span class="icon"> <i class="${Utils.escapeHtml(this.batItemData.icon)}"></i> </span>
      <span>${Utils.escapeHtml(this.batItemData.caption)}</span>
    </a>
    `);

    $(this.targetId).append($navigationBarItem);
  }
}
