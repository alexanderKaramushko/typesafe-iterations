## The small lib to make typesafe iterable objects.

### Problem

```ts
// iterable object with Symbol.iterator
const object = {
  a: 1
}

for (const key of object) {
  // key: string
  // object[key] ts throws index error 
}
```

### Solution

```ts
import { init } from 'typesafe-iterations';

init();

// iterable object with Symbol.iterator
const object = {
  a: 1
}

for (const [key, value] of object.getIterator()) {
  // key: 'a'
  // object[key] doesn't throw error
}
```
