const data = [
  {
    id: "23456fe4321",
    name: "Honda sedan",
    price: "$440",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae reprehenderit atque.",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg/1200px-Honda_Accord_%28CV3%29_EX_eHEV%2C_2021%2C_front.jpg",
  },
  {
    id: "2dd3456fe43d21",
    name: "Mito sedan",
    price: "$110",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae reprehenderit atque.",
    imgUrl:
      "https://hips.hearstapps.com/hmg-prod/amv-prod-cad-assets/images/12q3/474593/alfa-romeo-mito-serie-speciale-sbk-photo-474642-s-986x603.jpg",
  },
  {
    id: "2xas3456fe432689m1",
    name: "Isuzu Tacoma",
    price: "$220",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae reprehenderit atque.",
    imgUrl:
      "https://vehicle-images.dealerinspire.com/fa53-110006664/3TMAZ5CN3GM004999/df3407b9631bf4b0f7a5386d5ee8b76b.jpg",
  },
  {
    id: "23459cv9vr6fe4321",
    name: "Chevrolet Crossover",
    price: "$330",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae reprehenderit atque.",
    imgUrl:
      "https://cdn.jdpower.com/JDP_2022%20Chevrolet%20Equinox%20RS%20White%20Front%20Quarter%20Right.jpg",
  },
  {
    id: "23459cv9vr6fe4321",
    name: "Chevrolet Crossover",
    price: "$330",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum recusandae reprehenderit atque.",
    imgUrl: "",
  },
];

/* const blankImg =
  "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg";
 */
data.forEach((car) => {
  const { name, price, description, imgUrl } = car;
  const cardContainer = document.getElementById("card-container");
  const singleCard = document.createElement("div");
  singleCard.classList.add("col");
  singleCard.innerHTML = `
        <div class="card">
        <img src="${
          imgUrl
            ? imgUrl
            : "https://thsti.res.in/public/upload/news/1594898415img.png"
        }" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Car Name : ${name}</h5>
            <p class="card-text">Car details : ${description}</p>
            <button class="btn btn-outline-dark">Price : ${price}</button>
        </div>
        </div>
    `;
  cardContainer.appendChild(singleCard);
});
