export default class NavigationBarItem {
  constructor(targetId, jsonData) {
    this.targetId = targetId;
    this.batItemData = jsonData;
  }

  render() {
    let $navigationBarItem = $(`
    <a class="navbar-item" href="#${this.batItemData.link}">
      <span class="icon"> <i class="${this.batItemData.icon}"></i> </span>
      <span>${this.batItemData.caption}</span>
    </a>
    `);

    $(this.targetId).append($navigationBarItem);
  }
}
