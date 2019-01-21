import NavigationBar from "./components/navigation-bar";
import Header from "./components/header";
import About from "./components/about";
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

  // Render footer.
  let footer = new Footer("#footer");
  footer.render();
});
