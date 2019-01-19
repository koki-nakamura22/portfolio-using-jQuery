import NavigationBar from "./components/navigation-bar";
import Header from "./components/header";
import Footer from "./components/footer";

$(() => {
  // Render navigation bar.
  let navigationBar = new NavigationBar("#navigation-bar");
  navigationBar.render();

  // Render header.
  let header = new Header("#header");
  header.render();

  // Render footer.
  let footer = new Footer("#footer");
  footer.render();
});
