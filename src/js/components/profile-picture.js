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
          src="${profilePictureData.imageUrl}"
          alt="${profilePictureData.alt}"
        />
      </figure>
    </div>
    `);
    $(this.targetId).append($profilePicture);
  }
}