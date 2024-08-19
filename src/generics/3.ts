function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ user: "Andrey" }, { age: 18 }));
