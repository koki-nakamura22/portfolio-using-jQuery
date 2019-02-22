import Utils from "../utils";
import aboutTitleData from "../../json/about-title.json";

export default class AboutTitle {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $aboutTitle = $(`
    <div class="section-heading">
      <h3 class="title is-2">${Utils.escapeHtml(aboutTitleData.title)}</h3>
      <h4 class="subtitle is-5">${Utils.escapeHtml(aboutTitleData.subTitle)}</h4>
      <div class="container">
        ${Utils.arrayToHtml(aboutTitleData.selfIntroduction)}
      </div>
    </div>
    `);
    $(this.targetId).append($aboutTitle);
  }
}
