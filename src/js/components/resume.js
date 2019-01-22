import resumeData from "../../../public/json/resume.json";

export default class Resume {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $resume = $(`
    <section class="section">
      <div class="section-heading">
        <h3 class="title is-2">${resumeData.title}</h3>
        <h4 class="subtitle is-5">${resumeData.subTitle}</h4>
        <a id="downloadResumeButton" href="${resumeData.resumeFile}" class="button is-link is-medium">
          <span class="icon"> <i class="fas fa-file-alt"></i> </span>
          <span>${resumeData.downloadButtonLabel}</span>
        </a>
      </div>
    </section>
    `);
    $(this.targetId).append($resume);
  }
}