import NavigationBar from "./components/navigation-bar";
import Header from "./components/header";
import About from "./components/about";
import SkillsTags from "./components/skills-tags";
import Services from "./components/services";
import Contact from "./components/contact";
import Footer from "./components/footer";

$(() => {
  // Render navigation bar.
  let navigationBar = new NavigationBar("#navigation-bar");
  navigationBar.render();

  // Render header.
  let header = new Header("#header");
  header.render();

  // Render about.
  let about = new About("#about-area");
  about.render();

  // Render skills tags.
  let skillsTags = new SkillsTags("#skills-tags");
  skillsTags.render();

  // Render services.
  let services = new Services("#services");
  services.render();

  // Render contact.
  let contact = new Contact("#contact");
  contact.render();

  // Render footer.
  let footer = new Footer("#footer");
  footer.render();
});
