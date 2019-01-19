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
          ${headerData.greeting}
          <h1 class="title is-1">${headerData.title}</h1>
          <h2 class="subtitle is-3">${headerData.subTitle}</h2>
        </div>
      </div>
    </section>   
    `);

    $(this.targetId).append($header);
  }
}