```javascript
yarn add scroll-percentage
```

```javascript
import { calculateScrollPercentage } from 'scroll-precentage'
```

provide the scrollable element as parameter -
```javascript
calculateScrollPercentage(scrollabaleElement)
```

like -
```javascript
calculateScrollPercentage(e.target)
```

full example -
```javascript
document.querySelector('.scorllable-elem').addEventListener('scroll',e => {
  calculateScrollPercentage(e.target)
})
```

if the scrollable element is window, then a second parameter is necessary.
the second parameter - height of the element, window is scrolling by -
```javascript
calculateScrollPercentage(e.target, document.querySelector(someElement).clientHeight)
```