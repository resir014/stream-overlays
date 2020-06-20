/**
 * @typedef {Object} GoalEvent
 */

const $title = document.getElementById('title')
const $goalCurrent = document.getElementById('goal-current')
const $goalTotal = document.getElementById('goal-total')
const $goalEndDate = document.getElementById('goal-end-date')
const $goalBar = document.getElementById('goal-bar')

/**
 * Events will be sent when someone subscribed.
 * @param {GoalEvent} obj
 */
function goalLoad(obj) {
  // obj.detail will contain information about the current goal
  // this will fire only once when the widget loads
  console.log(obj.detail)
  $title.innerHTML = obj.detail.title
  $goalCurrent.innerText = obj.detail.amount.current
  $goalBar.style.width = `${(obj.detail.amount.current / obj.detail.amount.target) * 100}%`
  $goalTotal.innerText = obj.detail.amount.target
  $goalEndDate.innerText = obj.detail.to_go.ends_at
}

/**
 * @param {GoalEvent} obj
 */
function goalEvent(obj) {
  // obj.detail will contain information about the goal
  console.log(obj.detail)
  $goalCurrent.innerText = obj.detail.amount.current
  $goalBar.style.width = `${(obj.detail.amount.current / obj.detail.amount.target) * 100}%`
}

document.addEventListener('goalLoad', goalLoad)
document.addEventListener('goalEvent', goalEvent)
