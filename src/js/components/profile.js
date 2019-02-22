import Utils from "../utils";
import profileData from "../../json/profile.json";

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
          <a href="${Utils.escapeHtml(link.url)}" class="button is-link" target="_blank">${Utils.escapeHtml(link.caption)}</a>
          `));
        }
      } else {
        let caption = itemLabel.charAt(0).toUpperCase() + itemLabel.slice(1) + ":";
        let content = profileData[itemLabel];
        if (itemLabel == "phone") {
          if (navigator.userAgent.match(/(iPhone|iPad|iPod|Android)/)) {
            content = `<a href=tel:${Utils.escapeHtml(content.replace(/-/g, ''))}>${Utils.escapeHtml(content)}</a>`
          }
        } else if (itemLabel == "email") {
          content = `<a href="#contact">${Utils.escapeHtml(content)}</a>`;
        } else {
          content = Utils.escapeHtml(content);
        }
        $profileItems.append($(`
        <tr>
          <td>${Utils.escapeHtml(caption)}</td>
          <td class="word-break-all">${content}</td>
        </tr>
        `));
      }
    }
    $(this.targetId).append($profile);
  }
}