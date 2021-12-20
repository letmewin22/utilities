Useful utilities from the emotion-agency

# Instalation

`npm i @emotionagency/utils`

or

`yarn add @emotionagency/utils`

# Usage

## Raf
Custom wrapper around standard API of requestAnimationFrame to optimize performance

```
import {raf} from '@emotionagency/utils'

\\ subscribe
raf.on(fn)

unsubscribe
raf.off(fn)

```

## Resize
Custom wrapper around standard API of resize event with debounce function to optimize performance

```
import {resize} from '@emotionagency/utils'

\\ subscribe
resize.on(fn)

unsubscribe
resize.off(fn)

```

## Lerp
Standart lerp function

```
import {lerp} from '@emotionagency/utils'

lerp(first number, second number, interpolation value)

```

## Clamp
Standart clamp function

```
import {clamp} from '@emotionagency/utils'

clamp(clamping value, min value, max value)

```

## CreateNewElement
A function that creates a new DOM-element with the ability to immediately assign the necessary classes to it

```
import {createNewElement} from '@emotionagency/utils'

createNewElement(tag, classes)

```

## Delay
A function that creates a Promise with delay

```
import {delayPromise} from '@emotionagency/utils'

async delayFunc = () => {
  await delayPromise(1000)
  //logic
}

```

## Keys Generator
A function that generate random string by length
```
import {keysGenerator} from '@emotionagency/utils'

const randomKey = keysGenerator(10)

```