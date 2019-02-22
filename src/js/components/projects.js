import BaseComponent from "./base-component";
import Utils from "../utils";
import ProjectsItem from "./projects-item";
import projectsData from "../../json/projects.json";

export default class Projects extends BaseComponent {
  constructor(targetId) {
    super(targetId);
    this.MAX_INIT_SHOW_ROW = 3;
    this.MAX_COL = 3;
  }

  render() {
    let $projects = $(`
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">${Utils.escapeHtml(projectsData.title)}</h3>
          <h4 class="subtitle is-5">${Utils.escapeHtml(projectsData.subTitle)}</h4>
        </div>
        <br />

        <div class="container projects-container">
        </div>
        <div id="show-more-projects-button" class="button is-medium show-more-projects-button">Show more</div>
        <div id="hide-projects-button" class="button is-medium hide-projects-button">Hide</div>
      </div>
    </section>
    `);
    $(this.targetId).append($projects);
    let row = 0;
    let counter = 0;
    let $projectsContainer = $projects.find(".projects-container");
    for (let project of projectsData.projects) {
      if (counter % this.MAX_COL == 0) {
        row++;
        let $rowForAppend = $(`<div id=row${row} class="columns"></div>`);
        $projectsContainer.append($rowForAppend);
        if (row > this.MAX_INIT_SHOW_ROW) {
          $rowForAppend.hide();
        }
      }
      let projectsItem = new ProjectsItem(`${this.targetId} .projects-container #row${row}`, project);
      projectsItem.render();
      counter++;
    }
    $("#hide-projects-button").hide();

    // Show Button click event
    $("#show-more-projects-button").on("click", () => {
      let rowCount = $projectsContainer.children().length;
      for (let row = 0; row < rowCount; row++) {
        $($projectsContainer.children()[row]).show();
      }
      $("#show-more-projects-button").hide();
      $("#hide-projects-button").show();
    });

    // Hide Button click event
    $("#hide-projects-button").on("click", () => {
      let rowCount = $projectsContainer.children().length;
      for (let row = 0; row < rowCount; row++) {
        if (row >= this.MAX_INIT_SHOW_ROW) {
          $($projectsContainer.children()[row]).hide();
        }
      }
      $("#show-more-projects-button").show();
      $("#hide-projects-button").hide();
    });
  }
}