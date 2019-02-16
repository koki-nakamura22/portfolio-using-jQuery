import NavigationBar from "./components/navigation-bar";
import Header from "./components/header";
import About from "./components/about";
import SkillsTags from "./components/skills-tags";
import Services from "./components/services";
import Resume from "./components/resume";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

$(() => {
  // Setting project dialog behavior.
  $("#project-modal .modal-background").on("click", () => {
    closeProjectModalDialog();
  });
  $("#project-modal .modal-card .modal-card-foot #close-dialog").on("click", () => {
    closeProjectModalDialog();
  });
  $("#project-modal .modal-card header .delete").on("click", () => {
    closeProjectModalDialog();
  });
  function closeProjectModalDialog() {
    $("#project-modal").removeClass("is-active");
  }

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

  // Render resume.
  let resume = new Resume("#resume");
  resume.render();

  // Render projects.
  let projects = new Projects("#projects");
  projects.render();

  // Render contact.
  let contact = new Contact("#contact");
  contact.render();

  // Render footer.
  let footer = new Footer("#footer");
  footer.render();
});
