let product_cards = [
  {
    img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    tittle: "Heading is very Long to adjust in one line",
    author: "Arman Ahmed",
    date: "05 Jul 2022",
    description: ` If you are a fresh graduate - or new to IT - looking for the next
        job, you need to read this. The last couple of years zekeLabs gave
        me a unique opportunity to`,
  },
  {
    img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    tittle: "Heading is very Long to adjust in one line",
    author: "Arman Ahmed",
    date: "05 Jul 2022",
    description: ` If you are a fresh graduate - or new to IT - looking for the next
        job, you need to read this. The last couple of years zekeLabs gave
        me a unique opportunity to`,
  },
  {
    img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    tittle: "Heading is very Long to adjust in one line",
    author: "Arman Ahmed",
    date: "05 Jul 2022",
    description: ` If you are a fresh graduate - or new to IT - looking for the next
        job, you need to read this. The last couple of years zekeLabs gave
        me a unique opportunity to`,
  },
  {
    img: "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    tittle: "Heading is very Long to adjust in one line",
    author: "Arman Ahmed",
    date: "05 Jul 2022",
    description: ` If you are a fresh graduate - or new to IT - looking for the next
        job, you need to read this. The last couple of years zekeLabs gave
        me a unique opportunity to`,
  },
];

const container = document.querySelector(".container");

for (const each_card of product_cards) {
  const cardDiv = document.createElement("div");

  cardDiv.classList = "card";

  const img = document.createElement("img");

  img.setAttribute("src", each_card.img);

  const h2 = document.createElement("h2");

  h2.innerHTML = each_card.tittle;

  const cardInfoDiv = document.createElement("div");
  cardInfoDiv.classList = "card-info";

  cardDiv.append(img);
  cardDiv.append(h2);
  container.append(cardDiv);
}
