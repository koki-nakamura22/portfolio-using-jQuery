import profileData from "../../../public/json/profile.json";

export default class Profile {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $profile = $(`
    <div class="card-content">
      <h3 class="title is-4">Profile</h3>
      <div class="content">
        <table class="table-profile">
          <tr>
            <th colspan="1"></th>
            <th colspan="2"></th>
          </tr>
        </table>
      </div>
      <br />
      <div class="buttons has-addons is-centered">
      </div>
    </div>
    `);
    let $profileItems = $profile.find(".table-profile");
    let $links = $profile.find(".buttons");
    for (let itemLabel in profileData) {
      if (itemLabel == "links") {
        let links = profileData[itemLabel];
        for (let link of links) {
          $links.append($(`
          <a href="${link.url}" class="button is-link" target="_blank">${link.caption}</a>
          `));
        }
      } else {
        let caption = itemLabel.charAt(0).toUpperCase() + itemLabel.slice(1) + ":";
        let content = profileData[itemLabel];
        $profileItems.append($(`
        <tr>
          <td>${caption}</td>
          <td>${content}</td>
        </tr>
        `));
      }
    }
    $(this.targetId).append($profile);
  }
}