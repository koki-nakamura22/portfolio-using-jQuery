// import barItems from "../../../public/json/navigation-bar-items.json";
import aboutTitleData from "../../../public/json/about-title.json";

export default class AboutTitle {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    $aboutTitle = $(`
    <div class="section-heading">
      <h3 class="title is-2">${aboutTitleData.title}</h3>
      <h4 class="subtitle is-5">${aboutTitleData.subTitle}</h4>
      <div class="container">
        ${aboutTitleData.selfIntroduction}
      </div>
    </div>
    `);
    $(this.targetId).append($aboutTitle);
  }
}