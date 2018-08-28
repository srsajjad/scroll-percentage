```sh
yarn add scroll-percentage
```

```javascript
import { calculateScrollPercentage } from 'scroll-percentage'
```

Provide the scrollable element as parameter -
```javascript
calculateScrollPercentage(scrollabaleElement)
```

Like -
```javascript
document.querySelector('.scorllable-elem').addEventListener('scroll',e => {
  let scrollPercentage = calculateScrollPercentage(e.target)
  console.log('scroll percentage', scrollPercentage)
})
```

If the scrollable element is window, then a second parameter is necessary.\
The second parameter - height of the element, `window` is scrolling by -
```javascript
calculateScrollPercentage(e.target, document.querySelector(someElement).clientHeight)
```