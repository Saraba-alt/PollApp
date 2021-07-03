export const input = document.getElementById("pollInput");

export const addPollBtn = document.getElementById("addBtn");
export const pollListWrapper = document.getElementById("poll-list");
export const pollContainer = document.getElementById("poll-container");

export function getInput() {
  return input.value;
}

export function resetInput() {
  input.value = "";
  input.focus();
}
