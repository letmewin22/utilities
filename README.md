Useful utilities from the emotion-agency

# Installation

`npm i @emotionagency/utils`

or

`yarn add @emotionagency/utils`

# Usage

## Raf
Custom wrapper around standard API of requestAnimationFrame to optimize performance

```js
import {raf} from '@emotionagency/utils'

// subscribe
raf.on((time, deltaTime) => {
  // time - current timestamp
  // deltaTime - time since last frame
})

// unsubscribe
raf.off(fn)

```

## Resize
Custom wrapper around standard API of resize event with debounce function to optimize performance

```js
import {resize} from '@emotionagency/utils'

// subscribe
resize.on(fn)

// unsubscribe
resize.off(fn)

```

## Lerp
Standard lerp (linear interpolation) function

```js
import {lerp} from '@emotionagency/utils'

lerp(start, end, interpolation)
```

## Clamp
Standard clamp function

```js
import {clamp} from '@emotionagency/utils'

clamp(value, min, max)
```

## Damp
Frame-rate independent damping using exponential decay. Useful for smooth animations that behave consistently regardless of frame rate.

```js
import {damp} from '@emotionagency/utils'

damp(current, target, lambda, deltaTime)
// lambda - damping strength (higher = faster)
// deltaTime - time since last frame
```

## Modulo
Proper modulo function that handles negative numbers correctly. Unlike the `%` operator, always returns a value in the range `[0, divisor)`.

```js
import {modulo} from '@emotionagency/utils'

modulo(5, 3)   // 2
modulo(-1, 3)  // 2  (% would return -1)
```

## CreateNewElement
A function that creates a new DOM-element with the ability to immediately assign the necessary classes to it

```js
import {createNewElement} from '@emotionagency/utils'

createNewElement(tag, classes)
```

## Delay
A function that creates a Promise with delay

```js
import {delayPromise} from '@emotionagency/utils'

const delayFunc = async () => {
  await delayPromise(1000)
  // logic
}
```

## Keys Generator
A function that generates a random string by length
```js
import {keysGenerator} from '@emotionagency/utils'

const randomKey = keysGenerator(10)
```
