import "../styles/style.pcss";

//Model
import NewPoll from "./model/NewPoll";
import PollList from "./model/PollList";

//View
import {
  addPollBtn,
  pollListWrapper,
  getInput,
  pollContainer,
  input,
  resetInput,
} from "./view/newPoll";

const newPollList = new PollList();
const addPoll = () => {
  newPollList.add(pollListWrapper, new NewPoll(getInput()));
  resetInput();
};

addPollBtn.addEventListener("click", addPoll);
input.addEventListener("keydown", (event) => {
  if (event.key === "Enter") addPoll();
});

pollContainer.addEventListener("click", (event) => {
  if (event.target.nodeName === "path") {
    newPollList.remove(pollListWrapper, event.target.parentNode.parentNode.id);
  } else if (event.target.nodeName === "svg") {
    newPollList.remove(pollListWrapper, event.target.parentNode.id);
  }
});

if (module.hot) {
  module.hot.accept();
}
