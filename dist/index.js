Object.defineProperty(exports, '__esModule', {
  value: true
})
exports.calculateScrollPercentage = calculateScrollPercentage

function calculateScrollPercentage (target, childElemHeight) {
  try {
    if (!target) throw 'scrolling element height not found'

    let bool = target === document

    let scrollHeight = (() => {
      if (bool) return childElemHeight
      return target.scrollHeight
    })()

    if (!scrollHeight) throw 'child element height not found'

    let clientHeight = bool ? window.innerHeight : target.clientHeight
    let scrollTop = bool ? window.scrollY : target.scrollTop

    let gottaScroll = scrollHeight - clientHeight
    let percentage = Math.ceil((scrollTop / gottaScroll) * 100)

    return percentage
  } catch (err) {
    console.error(err)
  }
}
