$(function () {
  getUsers();
  const addUserBtn = $("#add-user-btn");
  addUserBtn.on({
    click: createNewUser,
  });
});

const BASE_URL = "https://reqres.in/api";
const END_POINTS = {
  getUsers: "/users",
  registerUSer: "/register",
};

function getUsers() {
  $.get(`${BASE_URL + END_POINTS.getUsers}`, function (data, status) {
    console.log(data, status);
    creaList(data, status);
  }).fail((e) => {
    console.log(e);
  });
}

function createCardTemplate(userDetails, index) {
  const { avatar, email, first_name, id, last_name } = userDetails;

  return `
    <div class="card" data-id=${id}>
  <div class="card-img">
    <img src=${avatar} />
  </div>

  <p><span>${first_name}</span><span>${last_name}</span></p>
  <div class="card-footer">
    <span>${email}</span>
    <span
      ><a href="mailto:${email}"><i class="fa-solid fa-envelope"></i></a
    ></span>
  </div>
</div>
    `;
}

function createUserCard(userDetails) {
  const cardTemplate = createCardTemplate(userDetails);

  return $(cardTemplate);
}

function creaList(data, status) {
  if (status === "success" && data.data) {
    const userList = data.data;
    const container = $("#user-list");
    userList.forEach((item, index) => {
      const card = createUserCard(item, index);

      container.append(card);
    });
  }
}

const userDetails = {
  username: "utkarsh_gupta_316",
  email: "utkarsh@gmail.com",
  password: "12313121",
};

function createNewUser(event) {
  console.log(userDetails);
  $.post(
    `${BASE_URL + END_POINTS.registerUSer}`,
    userDetails,
    function (data, status) {
      console.log(data, status);
      console.log("User created succesfully");
    }
  ).fail((e) => {
    console.log(e.responseJSON.error);
  });
}

// apiCall('GET',url)
// apiCall('POST',url,data)
// apiCall('PUT',url,data)
// apiCall('DELETE',url,data)

function apiCall(type, url, data) {
  $.ajax({
    type: type,
    url: url,

    data: data,
    success: function (response) {
      console.log(response);
    },
    error: function (request, status, errorThrown) {
      console.log(request, status, errorThrown);
    },
  });
}
