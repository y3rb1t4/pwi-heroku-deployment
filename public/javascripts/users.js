const URL_SERVER = "http://localhost:3000";

const deleteUser = async (id) => {
  // Fetch method DELETE a mi URL_SERVER
  const response = await fetch(`${URL_SERVER}/users/${id}`, {
    method: "DELETE",
  });

  const result = await response.json();

  if (parseInt(result.id) === id) {
    window.location.href = "/users";
  }
};

const updateUser = async (id) => {
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  const role = document.querySelector("#role").value;

  const userUpdated = {
    id_user: id,
    email,
    password,
    role,
  };
  console.log(userUpdated);

  const response = await fetch(`${URL_SERVER}/users/${id}`, {
    headers: { "Content-Type": "application/json" },
    method: "PUT",
    body: JSON.stringify(userUpdated),
  });

  window.location.href = "/users";
};
