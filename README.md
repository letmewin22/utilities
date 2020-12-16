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
