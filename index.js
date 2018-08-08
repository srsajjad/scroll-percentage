function calculateScrollPercentage (
  target,
  _scrollHeight,
  _clientHeight,
  gottaScroll,
  _scrollTop,
  percentage
) {
  if (target) {
    let bool = target === document
    _scrollHeight = bool
      ? _scrollHeight || alert('provide second parameter')
      : target.scrollHeight
    _clientHeight = bool ? window.innerHeight : target.clientHeight
    _scrollTop = bool ? window.scrollY : target.scrollTop

    gottaScroll = _scrollHeight - _clientHeight
    percentage = Math.ceil(_scrollTop / gottaScroll * 100)
  } else {
    alert('No Target Was Provided')
  }

  return percentage
}

export { calculateScrollPercentage }
