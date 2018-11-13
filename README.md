```sh
yarn add scroll-percentage
```

```javascript
import { calculateScrollPercentage } from 'scroll-percentage'
```

Like -
```javascript
document.querySelector('.scorllable-elem').addEventListener('scroll',e => {
  let scrollPercentage = calculateScrollPercentage(e.target)
  console.log('scroll percentage', scrollPercentage)
})
```

If the scrollable element is window, then provide a second parameter.\
Which is basically - height of the element, `window` is scrolling by -
```javascript
calculateScrollPercentage(e.target, document.querySelector(someElement).clientHeight)
```
