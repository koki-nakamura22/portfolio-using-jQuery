import Utils from "../utils";
import headerData from "../../../public/json/header.json";

export default class Header {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $header = $(`
    <section class="hero is-link is-fullheight is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          ${Utils.escapeHtml(headerData.greeting)}
          <h1 class="title is-1">${Utils.escapeHtml(headerData.title)}</h1>
          <h2 class="subtitle is-3">${Utils.escapeHtml(headerData.subTitle)}</h2>
        </div>
      </div>
    </section>   
    `);

    $(this.targetId).append($header);
  }
}