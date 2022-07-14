(function () {
  const input = document.getElementById("add-item");
  const btn = document.getElementById("add-btn");

  var currentItem = "";
  var list_array = [];

  input.addEventListener("change", (e) => {
    currentItem = e.target.value;
  });

  btn.addEventListener("click", onBtnClick);

  function onBtnClick(e) {
    e.preventDefault();
    if (currentItem.trim() != "") {
      input.value = "";
      list_array.push(currentItem.trim());

      const li = document.createElement("li");
      const span = document.createElement("span");

      li.classList =
        "list-group-item d-flex justify-content-between align-items-center";
      span.classList = "delete badge bg-secondary rounded-pill";

      span.append("╳");
      span.setAttribute("role", "button");

      li.append(currentItem);
      li.append(span);

      const list = document.querySelector("#todo-list");

      list.append(li);
    }
  }
})();

/*
    Step 1: Target Input Box
    Step 2: Add event listner to input box
    Step 3: Add event listner to Add button
    Step 4: Check if Input has value then take value and reset it to empty
    Step 5: Push this value in an list array
    Step 6: Ceate list dom element and add current text to it
    Step 7: Append this list Item in the #todo-list
*/
