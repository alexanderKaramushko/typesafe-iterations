## The small lib to make typesafe iterable data structures.

### Problem

```ts
// iterable object with Symbol.iterator
const object = {
  a: 1
}

for (const key of object) {
  // object[key] throws ts error as key is of a string type
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
  // object[key] does't throw error as key is of a literal 'a' type
}
```
