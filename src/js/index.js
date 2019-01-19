import NavigationBar from "./components/navigation-bar";
import Header from "./components/header";

$(() => {
  // Render navigation bar.
  let navigationBar = new NavigationBar("#navigation-bar");
  navigationBar.render();

  // Render header.
  let header = new Header("#header");
  header.render();
});
