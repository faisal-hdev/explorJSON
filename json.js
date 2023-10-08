const person = {
  name: {
    common: "John",
    fullName: ["John", "deo"],
  },
  age: 20,
  isMale: false,
  address: {
    street: "13/A Dhaka",
    house: 10,
  },
};

const stringifiedJson = JSON.stringify(person);
// console.log(stringifiedJson);

/* 
{"name":{"common":"John","fullName":["John","deo"]},"age":20,"isMale":false,"address":{"street":"13/A Dhaka","house":10}}
*/

const parseJson = JSON.parse(stringifiedJson);
console.log(parseJson);

const { name, age, isMale, address } = parseJson;
const { common, fullName } = name;

const personContainer = document.getElementById("person-container");
personContainer.innerHTML = `
    <h2>Common Name : ${common}</h2>
    <h3>Full Name : ${fullName[0]} ${fullName[1]}</h3>
    <h3>Full Name : ${fullName.join(" ")} </h3>
    <p>Age : ${age}</p>
    <p>Gender : ${isMale === true ? "Male" : "Female"}</p>
`;
