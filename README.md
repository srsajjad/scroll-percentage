```sh
yarn add scroll-percentage
```

```javascript
import { calculateScrollPercentage } from 'scroll-percentage'
```

Or attach this `script` in your `html`.

```html
<script src="https://unpkg.com/scroll-percentage@1.0.7/dist/index.js"></script>
```


```javascript
document.querySelector('.parent-elem').addEventListener('scroll',e => {
  let scrollPercentage = calculateScrollPercentage(e.target)
  console.log('scroll percentage', scrollPercentage)
})
```

```
// If the parent/scrolling element is `window`, 
// then provide a second parameter - height of the child element.
// Which is basically - the element `window` is scrolling by -
```

```javascript
let childElemHeight = document.querySelector('.child-elem').clientHeight

window.addEventListener('scroll', e => {
  let scrollPercentage = calculateScrollPercentage(e.target, childElemHeight)
  console.log('scroll percentage', scrollPercentage)
})
```

`N.B: While calculating the height of child elemenet,
adjust the value with margin/padding size.`
