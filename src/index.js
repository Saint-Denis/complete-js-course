const addListener = (eventName, target, fn) => target.addEventListener(eventName, fn)

const removeListener = (eventName, target, fn) => target.removeEventListener(eventName, fn, false)

const skipDefault = (eventName, target) => {
  target.addEventListener('click', eventName => eventName.preventDefault())
}

const emulateClick = (target) => {
  const event = new Event('click');
  target.dispatchEvent(event)
}

const delegate = (target, fn) => {
  target.addEventListener('click', (e) => {
    const elem = e.target;
    if (elem.tagName === 'BUTTON') {
       fn()
    }
  })
}

const once = (target, fn) => {
  target.addEventListener('click', fn, { once: true})
}

export {
    addListener,
    removeListener,
    skipDefault,
    emulateClick,
    delegate,
    once
};
