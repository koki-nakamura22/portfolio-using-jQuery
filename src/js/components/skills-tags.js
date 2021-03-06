import BaseComponent from "./base-component";
import Utils from "../utils";
import skillsTagsData from "../../json/skills-tags.json";

export default class SkillsTags extends BaseComponent {
  render() {
    let $skillsTags = $(`
    <div class="tags custom-tags"></div>
    `);
    for (let skillsTag of skillsTagsData) {
      $skillsTags.append($(`
      <span class="tag is-light">${Utils.escapeHtml(skillsTag.skill)}</span>
      `));
    }
    $(this.targetId).append($skillsTags);
  }
}