function getPosts(id) {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+id);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            for (post of posts) {
                let cont =`<div>
                    <h3>${post.title}</h3>
                    <h4>${post.body}b</h4>
                </div>`;
                document.getElementById("post").innerHTML += cont;
            }
        } else {
                alert("error")
        }
    }
}

function getUsers() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            for (user of users) {
                let data = ` 

                <div id="users" class="users" onclick="click()">
                <h2>${user.name}</h2>
                <h3>${user.email}</h3>
            </div>
    
                    
                `;
                document.getElementById("users").innerHTML += data;
            }
        } else {
                alert("error")
        }
    }
}
function click() {
    console.log(`hi`)
}
getPosts(2);
getUsers();