function getPosts(id) {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId="+id);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
             document.getElementById("post").innerHTML = "";
            for (post of posts) {
                let cont =`
                
                <div id="post" class="data">

                    <h2>${post.title}</h2>
                    <hr>
                    <h3>${post.body}</h3>
                    <div/>
                `;
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
            document.getElementById("users").innerHTML = "";
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
