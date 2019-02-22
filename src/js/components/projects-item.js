import Utils from "../utils";
import projectsData from "../../json/projects.json";

export default class ProjectsItem {
  constructor(targetId, jsonData) {
    this.targetId = targetId;
    this.projectData = jsonData;
  }

  render() {
    let labels = projectsData.projectsLabel;
    let $projectItem = $(`
    <div class="column is-4">
      <div class="card">
        <header class="card-header">
          <p class="card-header-title">
            ${Utils.escapeHtml(this.projectData.projectName)}
          </p>
        </header>
           
        <div class="card-content">
          <div id="content">
            <div>
              <strong>${Utils.escapeHtml(labels.summary)}</strong>
              <p>${Utils.arrayToHtml(this.projectData.summary)}</p>
              <br>
            </div>
            <div>
              <strong>${Utils.escapeHtml(labels.term)}</strong>
              <p>${Utils.escapeHtml(this.projectData.termFrom)} ~ ${Utils.escapeHtml(this.projectData.termTo)}</p>
              <br>
            </div>
            <div>
              <strong>${Utils.escapeHtml(labels.usedProgrammingLanguageAndLibrary)}</strong>
              <p>${Utils.arrayToHtml(this.projectData.usedProgrammingLanguageAndLibrary)}</p>
            </div>
          </div>
        </div>

        <footer class="card-footer">
          <div class="card-footer-item can-open-content">
            <p>Show Detail</p>
          </div>
        </footer>
      </div>
    </div>
    `);
    $projectItem.find(".card-footer .card-footer-item").on("click", () => {
      let $dialogTitle = $("#project-modal .modal-card .modal-card-head .modal-card-title");
      $dialogTitle.text(Utils.escapeHtml(this.projectData.projectName));
      
      let labels = projectsData.projectsLabel;
      let $dialogBody = $("#project-modal .modal-card .modal-card-body");
      $dialogBody.empty();
      $dialogBody.append($(`
      <div class="content">
        ${generateHTMLCode(labels.summary, this.projectData.summary)}
        ${generateTermHTMLCode(labels.term, this.projectData.termFrom, this.projectData.termTo)}
        ${generateHTMLCode(labels.usedProgrammingLanguageAndLibrary, this.projectData.usedProgrammingLanguageAndLibrary)}
        ${generateHTMLCode(labels.usedDatabase, this.projectData.usedDatabase)}
        ${generateHTMLCode(labels.usedTools, this.projectData.usedTools)}
        ${generateHTMLCode(labels.role, this.projectData.role)}
        ${generateHTMLCode(labels.workInCharge, this.projectData.workInCharge)}      
      </div>
      `));

      $("#project-modal").addClass("is-active");

      function generateHTMLCode(label, detail) {
        return `
        <h1>${Utils.escapeHtml(label)}</h1>
        <p>
          ${Utils.arrayToHtml(detail)}
        </p>
        `;
      }

      function generateTermHTMLCode(label, from, to) {
        let html = `
        <h1>${Utils.escapeHtml(label)}</h1>
        <p>${Utils.escapeHtml(from)} ~ ${Utils.escapeHtml(to)}</p>
        `;
        return html;
      }
    });

    $(this.targetId).append($projectItem);
  }
}