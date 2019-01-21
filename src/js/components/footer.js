export default class Footer {
  constructor(targetId) {
    this.targetId = targetId;
  }
  
  render() {
    let $footer = $(`
    <footer class="footer">
      <div class="section-heading">
        <p>
          <strong>Koki Nakamura's portfolio page</strong> by Koki Nakamura.
        </p>
        <p>
          &copy; 2019 Koki Nakamura
        </p>
        <p>
          The source code is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
        <p>
          This web page is created based on 
          <a href="https://github.com/dansup/bulma-templates/blob/master/templates/personal.html">Portfolio</a>
           in 
          <a href="https://github.com/dansup/bulma-templates">Bulma Templates.</a>
        </p>
      </div>
    </footer>
    `);

    $(this.targetId).append($footer);
  }
}