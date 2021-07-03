export default class PollList {
  constructor() {
    this.polls = [];
  }
  add(wrapper, poll) {
    this.polls.push(poll);
    this.render(wrapper);
  }
  remove(wrapper, id) {
    let posisionOfPoll;
    this.polls.forEach((el) => {
      if (el.id === id) {
        posisionOfPoll = this.polls.indexOf(el);
      }
    });
    this.polls.splice(posisionOfPoll, 1);
    this.render(wrapper);
  }
  render(wrapper) {
    wrapper.innerHTML = "";
    this.polls.forEach((el) => {
      wrapper.insertAdjacentHTML("beforeend", el.HTMLString);
    });
  }
}
