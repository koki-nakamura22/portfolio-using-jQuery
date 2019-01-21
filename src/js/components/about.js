import AboutTitle from "./about-title";
import Profile from "./profile";
import ProfilePicture from "./profile-picture";
import Skills from "./skills";

export default class About {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $about = $(`
    <section class="section" id="about"></section>
    `);
    $(this.targetId).append($about);

    // Render title.
    let aboutTitle = new AboutTitle("#about-title");
    aboutTitle.render();

    // Render profile.
    let profile = new Profile("#profile");
    profile.render();

    // Render profile picture.
    let profilePicture = new ProfilePicture("#profile-picture");
    profilePicture.render();

    // Render skills.
    let skills = new Skills("#skills");
    skills.render();
  }
}
