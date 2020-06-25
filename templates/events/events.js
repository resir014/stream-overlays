/* eslint-disable no-restricted-syntax */

const querySelector = document.querySelector.bind(document)

/**
 * @param {*} obj
 */
function handleLoad(obj) {
  // obj will be empty for event list
  // this will fire only once when the widget loads
  console.log(obj.detail)
}

/**
 * @param {*} obj
 */
function handleEventReceived(obj) {
  // obj will contain information about the event
  console.log(obj.detail)

  /** @type {HTMLElement | null} */
  const $list = querySelector('.widget-EventList')

  if ($list) {
    /** @type {NodeListOf<HTMLElement>}  */
    const $items = $list.querySelectorAll('.ck-event-list-wrapper')
    /** @type {HTMLElement | null} */
    const $item = $items[0].querySelector('.ck-event-list-item')

    requestAnimationFrame(() => {
      if ($item) {
        const { width } = $item.getBoundingClientRect()
        $list.style.transform = `translateX(-${width}px)`
        $list.style.transition = '0ms'

        requestAnimationFrame(() => {
          $list.style.transform = 'translateX(0)'
          $list.style.transition = ''
        })

        const { x: xOffset, width: listWidth } = $list.getBoundingClientRect()

        for (const child of $items) {
          const { x } = child.getBoundingClientRect()
          if (x + xOffset + width > listWidth) child.remove()
        }
      }
    })
  }
}

// Please use event listeners to run functions.
document.addEventListener('onLoad', handleLoad)

document.addEventListener('onEventReceived', handleEventReceived)
