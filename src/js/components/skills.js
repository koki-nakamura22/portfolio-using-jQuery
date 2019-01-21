import skillsData from "../../../public/json/skills.json";

export default class Skills {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $skills = $(`
    <div class="card">
      <div class="card-content skills-content">
        <h3 class="title is-4">Skills</h3>
        <div class="content">
        </div>
      </div>
    </div>
    `);

    let $skillsContents = $skills.find(".content");
    for (let skill of skillsData) {
      $skillsContents.append($(`
      <article class="media">
        <div class="media-content">
          <div class="content">
            <p>
              <strong>${skill.technology}:</strong> <br />
              <progress
                class="progress is-primary"
                value="${skill.degreeOfSkill}"
                max="100"
              ></progress>
            </p>
          </div>
        </div>
      </article>
      `));
    }

    $(this.targetId).append($skills);
  }
}