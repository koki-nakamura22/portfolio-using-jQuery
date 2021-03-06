import BaseComponent from "./base-component";
import selfPortrait from "../../images/self-face-photos.jpg";

export default class ProfilePicture extends BaseComponent {
  render() {
    let $profilePicture = $(`
    <div class="card-image">
      <figure class="image is-4by3">
        <img
          src="${selfPortrait}"
          alt=""
        />
      </figure>
    </div>
    `);
    $(this.targetId).append($profilePicture);
  }
}