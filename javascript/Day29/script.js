(function () {
  let table = document.querySelector("#main-table");
  let element = document.querySelector("#main-table tr");

  element.style.backgroundColor = "salmon";

  let allColumns = document.querySelectorAll("#main-table td");

  for (const elm of allColumns) {
    elm.style.color = "green";
  }

  let allHeadings = table.querySelectorAll("#main-table tr > .col-head");
  for (const elm of allHeadings) {
    elm.style.fontSize = "22px";
  }
})();
