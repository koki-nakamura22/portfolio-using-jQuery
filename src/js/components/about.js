import BaseComponent from "./base-component";
import AboutTitle from "./about-title";
import Profile from "./profile";
import ProfilePicture from "./profile-picture";
import Skills from "./skills";

export default class About extends BaseComponent {
  render() {
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
