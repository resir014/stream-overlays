/**
 * @param {*} obj
 */
function handleLoad(obj) {
  // obj will be empty for event list
  // this will fire only once when the widget loads
  console.log(obj)
}

/**
 * @param {*} obj
 */
function handleEventReceived(obj) {
  // obj will contain information about the event
  console.log(obj)
}

// Please use event listeners to run functions.
document.addEventListener('onLoad', handleLoad)

document.addEventListener('onEventReceived', handleEventReceived)
