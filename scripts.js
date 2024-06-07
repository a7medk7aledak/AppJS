document.addEventListener("DOMContentLoaded", function () {
  fetchUsers();
});

function fetchUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      populateUsers(users);
    }
  };
  xhr.send(); 
}

function populateUsers(users) {
  const contactList = document.getElementById("contact-list");
  users.forEach((user) => {
    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.setAttribute("data-user-id", user.id);
    contact.innerHTML = `<p class="name">${user.name}</p><p class="email">${user.email}</p>`;
    contact.addEventListener("click", () => showUserPosts(user.id));
    contactList.appendChild(contact);
  });
}

function showUserPosts(userId) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    true
  );
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var posts = JSON.parse(xhr.responseText);
      displayPosts(posts);
    }
  };
  xhr.send();
}

function displayPosts(posts) {
  const messageList = document.getElementById("message-list");
  messageList.innerHTML = ""; // Clear previous messages
  posts.forEach((post) => {
    const message = document.createElement("div");
    message.classList.add("message", "active");
    message.innerHTML = `<h3>${post.title}</h3><p>${post.body}</p>`;
    messageList.appendChild(message);
  });
}
