import Utils from "../utils";
import profilePictureData from "../../../public/json/profile-picture.json";

export default class ProfilePicture {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $profilePicture = $(`
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="${Utils.escapeHtml(profilePictureData.imageUrl)}"
          alt="${Utils.escapeHtml(profilePictureData.alt)}"
        />
      </figure>
    </div>
    `);
    $(this.targetId).append($profilePicture);
  }
}