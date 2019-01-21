import skillsTagsData from "../../../public/json/skills-tags.json";

export default class SkillsTags {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $skillsTags = $(`
    <div class="tags custom-tags"></div>
    `);
    for (let skillsTag of skillsTagsData) {
      $skillsTags.append($(`
      <span class="tag is-light">${skillsTag.skill}</span>
      `));
    }
    $(this.targetId).append($skillsTags);
  }
}