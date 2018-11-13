```sh
yarn add scroll-percentage
```

```javascript
import { calculateScrollPercentage } from 'scroll-percentage'
```

```javascript
document.querySelector('.parent-elem').addEventListener('scroll',e => {
  let scrollPercentage = calculateScrollPercentage(e.target)
  console.log('scroll percentage', scrollPercentage)
})
```

```
// If the parent/scrolling element is `window`, then provide a second parameter.
// Which is basically - height of the child element, `window` is scrolling by -
```

```javascript
let childElemHeight = document.querySelector('.child-elem').clientHeight
let scrollPercentage = calculateScrollPercentage(e.target, childElemHeight)
console.log('scroll percentage', scrollPercentage)
```
