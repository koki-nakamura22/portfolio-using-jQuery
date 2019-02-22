import Utils from "../utils";
import profileData from "../../json/profile.json";
import contactData from "../../json/contact.json";

export default class Contact {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    let $contact = $(`
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <h3 class="title is-2">${Utils.escapeHtml(contactData.title)}</h3>
          <h4 class="subtitle is-5">${Utils.escapeHtml(contactData.subTitle)}</h4>
        </div>
        <br />

        <div class="columns">
          <div class="column is-6 is-offset-3">
            <div class="box">
              <div class="field">
                <label class="label">${Utils.escapeHtml(contactData.nameLabel)}</label>
                <div class="control">
                  <input
                    id="name"
                    class="input"
                    type="text"
                    placeholder="Name input"
                    value=""
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">${Utils.escapeHtml(contactData.subjectLabel)}</label>
                <div class="control">
                  <input
                    id="subject"
                    class="input"
                    type="text"
                    placeholder="Subject input"
                    value=""
                  />
                </div>
              </div>

              <div class="field">
                <label class="label">${Utils.escapeHtml(contactData.messageLabel)}</label>
                <div class="control">
                  <textarea
                    id="message"
                    class="textarea"
                    placeholder="Message input"
                    value=""
                  ></textarea>
                </div>
              </div>

              <div class="field is-grouped has-text-centered">
                <div class="control">
                  <button id="submit-button" class="button is-link is-large">
                    <span class="icon"> <i class="fas fa-envelope"></i> </span>
                    <span>${Utils.escapeHtml(contactData.submitLabel)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    `);
    let $submitButton = $contact.find("#submit-button");
    $submitButton.on("click", () => {
      let newLineChars = "%0D%0A";
      let subject = $("#subject").val();
      let message = `Hi! I'm ${$("#name").val()}. I will send you an e-mail from your portfolio page.
      ${newLineChars}${newLineChars}${$("#message").val()}${newLineChars}`;
      window.location.href = `mailto:${profileData.email}?subject=${subject}&body=${message}`;
    });
    $(this.targetId).append($contact);
  }
}