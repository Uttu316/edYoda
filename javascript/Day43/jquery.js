$(document).ready(function () {
  console.log("Jquery is ready to use");

  const allH1 = $("h1");

  allH1.css({ color: "red", fontSize: "12px" });

  // const allH1 = document.querySelectorAll("h1");

  // allH1.forEach((i) => {
  //   i.style.color = "red";
  //   i.fontSize = "20px";
  // });

  $("li").even().css("background-color", "red");

  const pText = $("p").html();
  console.log(pText);
  /*
    const p = document.getQuerySelector('p');
    const pText = p.innerHtml;
  */

  $("table tbody tr td").last().text("Holiday");

  $("table tbody tr").last().remove();
  const newRow = `
        <tr>
        <td>7</td>
        <td>Week End</th>
      </tr>
  `;
  const tr = $(newRow);
  $("table tbody").append(tr);

  const btn = $("<button>Click Me</button>");

  $(".btn-wrapper").append(btn);

  $("table + .btn-wrapper").css({ marginTop: "10px" });

  $(".btn-wrapper > button").click(function (event) {
    const btn = $(this);

    btn.css({ background: "salmon" });
  });
  $(".btn-wrapper > button").dblclick(function (event) {
    const btn = $(this);

    btn.css({ background: "orange" });
  });

  $(".btn").on({
    blur: function (e) {},
    click: function (e) {},
    dblclick: function (e) {},
  });
});
