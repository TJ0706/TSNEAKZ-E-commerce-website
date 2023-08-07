const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id: 1,
        title: " BALENCIAGA",
        price: 550,
        colors: [
          {
            code: "black",
            img: "./img/balenciagaTracks.png",
          },
          {
            code: "white",
            img: "./img/whiteTracks.png",
          },
        ],
    },
    {
        id: 2,
        title: " LANVIN",
        price: 600,
        colors: [
          {
            code: "white",
            img: "./img/lanvins.png",
          },
          {
            code: "black",
            img: "./img/blackLanvins.png",
          },
        ],
    },
      {
        id: 3,
        title: "NIKE",
        price: 200,
        colors: [
          {
            code: "black",
            img: "./img/air.png",
          },
          {
            code: "navy",
            img: "./img/air2.png",
          },
        ],
      },
      {
        id: 4,
        title: "PRADA",
        price: 550,
        colors: [
          {
            code: "black",
            img: "./img/pradaCloudbust.png",
          },
          {
            code: "white",
            img: "./img/whiteCloudbust.png",
          },
        ],
      },
      {
        id: 5,
        title: " BALENCIAGA",
        price: 550,
        colors: [
          {
            code: "black",
            img: "./img/balenciagaTracks.png",
          },
          {
            code: "white",
            img: "./img/whiteTracks.png",
          },
        ],
      },
];

let chosenProduct = products[0]

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
     
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      choosenProduct = products[index];

      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "£" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
      currentProductColors.forEach((color, index) => {
        color.style.backgroundColor = choosenProduct.colors[index].code;
      });
    });
  });

  currentProductColors.forEach((color, index) => {
    color.addEventListener("click", () => {
      currentProductImg.src = choosenProduct.colors[index].img;
    });
  });

  currentProductSizes.forEach((size, index) => {
    size.addEventListener("click", () => {
      currentProductSizes.forEach((size) => {
        size.style.backgroundColor = "white";
        size.style.color = "black";
      });
      size.style.backgroundColor = "black";
      size.style.color = "white";
    });
  });

  const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});