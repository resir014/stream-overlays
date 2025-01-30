/**
 * @typedef {*} GoalEvent
 */

const $title = document.getElementById('title');
const $goalCurrent = document.getElementById('goal-current');
const $goalTotal = document.getElementById('goal-total');
const $goalEndDate = document.getElementById('goal-end-date');
const $goalBar = document.getElementById('goal-bar');

/**
 * @param {HTMLElement | null} [element]
 * @param {*} text
 */
function appendHTML(element, text) {
  if (element) {
    element.innerHTML = text;
  }
}

/**
 * @param {HTMLElement | null} [element]
 * @param {*} text
 */
function appendText(element, text) {
  if (element) {
    element.innerText = text;
  }
}

/**
 * @param {HTMLElement | null} [element]
 * @param {*} width
 */
function manipulateProgressBar(element, width) {
  if (element) {
    element.style.width = width;
  }
}

/**
 * Events will be sent when someone subscribed.
 * @param {GoalEvent} obj
 */
function goalLoad(obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail);
  appendHTML($title, obj.detail.title);
  appendText($goalCurrent, obj.detail.amount.current);
  manipulateProgressBar(
    $goalBar,
    `${(obj.detail.amount.current / obj.detail.amount.target) * 100}%`
  );
  appendText($goalTotal, obj.detail.amount.target);
  appendText($goalEndDate, obj.detail.to_go.ends_at);
}

/**
 * @param {GoalEvent} obj
 */
function goalEvent(obj) {
  // obj.detail will contain information about the goal
  console.log(obj.detail);
  appendText($goalCurrent, obj.detail.amount.current);
  manipulateProgressBar(
    $goalBar,
    `${(obj.detail.amount.current / obj.detail.amount.target) * 100}%`
  );
}

document.addEventListener('goalLoad', goalLoad);
document.addEventListener('goalEvent', goalEvent);
