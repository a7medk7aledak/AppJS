function getPosts() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            for (post of posts) {
                let cont =`
                    <h3>${post.title}</h3>
                    <h4>${post.body}b</h4>
                `;
                document.getElementById("post").innerHTML += cont;
            }
        } else {
                alert("error")
        }
    }
}
getPosts();

function getusers() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let users = request.response;
            for (user of users) {
                let data =` 

                <div id="users" class="users">
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
getusers();