const array = [
  {
    id: 1,
    title: "Heading 0 is very Long to adjust in one line",
    image:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    creator: "Arman Ahmed",
    date: "05 Jul 2022",
    description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to`,
  },
  {
    id: 2,
    title: "Heading 1 is very Long to adjust in one line",
    image:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    creator: "Arman Ahmed",
    date: "05 Jul 2022",
    description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to`,
  },
  {
    id: 3,
    title: "Heading  2 is very Long to adjust in one line",
    image:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    creator: "Arman Ahmed",
    date: "05 Jul 2022",
    description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to`,
  },
  {
    title: "Heading 3 is very Long to adjust in one line",
    image:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    creator: "Arman Ahmed",
    date: "05 Jul 2022",
    description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to`,
  },
  {
    title: "Heading 4 is very Long to adjust in one line",
    image:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    creator: "Arman Ahmed",
    date: "05 Jul 2022",
    description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to`,
  },
  {
    title: "Heading is very Long to adjust in one line",
    image:
      "https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg",
    creator: "Arman Ahmed",
    date: "05 Jul 2022",
    description: `If you are a fresh graduate - or new to IT - looking for the next job, you need to read this. The last couple of years zekeLabs gave me a unique opportunity to`,
  },
];

$(function () {
  createCard();
});

function createTemplate(item) {
  const { title, creator, image, id, date, description } = item;

  const template = `
        <div class="card" data-id=${id}>
          <img
            alt="card-1"
            src=${image}
          />
          <h2>${title}</h2>
          <div class="card-info">
            <span> ${creator}</span>
            <span> | ${date}</span>
          </div>
          <p>
           ${description}
          </p>
    </div>
    `;

  return template;
}

function createCard() {
  const container = $(".container");

  array.forEach((item, index) => {
    const cardTempate = createTemplate(item);
    const card = $(cardTempate);
    card.click(onCardClick);
    container.append(card);
  });
}

function onCardClick(event) {
  const card = $(this);
  var dataId = $(this).attr("data-id");
  const title = card.find("h2").text();
  //   location.pathname = location.pathname.replace("index", `index/${dataId}`);
  console.group(title);
}
