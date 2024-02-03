//day03 1st question solution
//Compare 2 JSON with same properties without order
let obj1 = { name: "person 1", age: 5 };
let obj2 = { age: 5, name: "person 1" };

// Convert JSON objects to strings
const str1 = JSON.stringify(obj1);
const str2 = JSON.stringify(obj2);

// Compare the strings
if (str1 === str2) {
  console.log("Objects are equal");
} else {
  console.log("Objects are not equal");
}
