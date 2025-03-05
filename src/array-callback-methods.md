```
const values = ["open", "closed", "open", "open"]

const result = values.filter((word) => word == "open");

console.log(result);

const values = ["shut-down", "open", "closed", "shut-down"]

const result = values.filter((word) => word == "shut-down")

console.log(result)
```
The filter method will run through each item in the array and only return results that meet the condition and are returned as "true". The map method however will return a value for each and every value in the original array.