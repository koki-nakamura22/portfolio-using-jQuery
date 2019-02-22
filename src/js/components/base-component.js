export default class BaseComponent {
  constructor(targetId) {
    this.targetId = targetId;
  }

  render() {
    throw new Error("It's not implemented.");
  }
}
