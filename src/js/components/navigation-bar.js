import BaseComponent from "./base-component";
import NavigationBarItem from "./navigation-bar-item";
import barItems from "../../json/navigation-bar-items.json";

export default class NavigationBar extends BaseComponent {
  render() {
    // Create navigation bar.
    let $navigationBar = $(`<nav class="navbar is-link is-fixed-top">
    <div class="navbar-brand">
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span> <span></span> <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
        <div class="navbar-end">
        </div>
      </div>
    </nav>`);
    // Add navigation bar.
    $(this.targetId).append($navigationBar);

    // Add navigation bar items.
    for (let jsonData of barItems) {
      let $itemForAdd = new NavigationBarItem(
        ".navbar .navbar-menu .navbar-end",
        jsonData
      );
      $itemForAdd.render();
    }

    // The following code is based off a toggle menu by @Bradcomp
    // source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
    var burger = document.querySelector(".burger");
    var menu = document.querySelector("#" + burger.dataset.target);
    burger.addEventListener("click", function() {
      burger.classList.toggle("is-active");
      menu.classList.toggle("is-active");
    });
  }
}
