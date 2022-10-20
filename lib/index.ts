/* eslint-disable func-names */
/* eslint-disable no-extend-native */

type IterableObject<T extends object> = {
  [Symbol.iterator](): Generator<[keyof T, T[keyof T]], void, unknown>;
};

declare global {
  interface Object {
    getIterator<T extends object>(this: T): IterableObject<T>;
  }
}

/**
 * @description inject typesafe getIterator function into Object.prototype
 * @example for (const [key, value] of object.getIterator()) {}
 */
function init(): void {
  Object.prototype.getIterator = function<T extends object>(this: T): IterableObject<T> {
    return {
      * [Symbol.iterator]() {
        let keys = Object.entries(this);
        let i = 0;

        while (keys.length) {
          const [[key, value]] = keys;

          yield [key as keyof T, value as T[keyof T]];

          // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
          i += 0;
          keys = keys.slice(1);
        }
      },
    };
  };
}

export { init };
