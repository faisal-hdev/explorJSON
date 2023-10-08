const person = {
  found: 2,
  message: "Found 2 persons",
  result: [
    {
      name: {
        common: "John",
        fullName: ["John", "deo"],
      },
      age: 20,
      isMale: false,
      address: {
        street: "135/l Dhaka",
        house: 10,
      },
    },
    {
      name: {
        common: "Barlin",
        fullName: ["Barlin", "Chus"],
      },
      age: 19,
      isMale: false,
      address: {
        street: "199/xx spain",
        house: 10,
      },
    },
    {
      name: {
        common: "Harly",
        fullName: ["Harly", "jackson"],
      },
      age: 23,
      isMale: false,
      address: {
        street: "83/A Mexico",
        house: 140,
      },
    },
    {
      name: {
        common: "Peter",
        fullName: ["Peter", "Alvart"],
      },
      age: 40,
      isMale: false,
      address: {
        street: "03/A london",
        house: 110,
      },
    },
  ],
};

const { found, message, result } = person;
console.log(result);

result.forEach((singlePerson, index) => {
  const cardContainer = document.getElementById("card-container");
  const personCard = document.createElement("div");
  personCard.classList.add("col");
  personCard.innerHTML = `
  <div class="card shadow">
  <div class="card-body">
      <h5 class="card-title">Full name : ${singlePerson.name.fullName.join(
        " "
      )} </h5>
      <p class="card-text">Age : ${singlePerson.age}</p>
      <p class="card-text">Street : ${
        singlePerson.address.street
      }, House no : ${singlePerson.address.house}</p>
      <button class="btn btn-outline-dark">See more</button>
  </div>
  </div>
  `;
  cardContainer.appendChild(personCard);
});
