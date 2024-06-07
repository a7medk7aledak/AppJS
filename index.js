function getPosts() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            for (post of posts) {
                document.getElementById("content").innerHTML += `<h1>${post.title}</h1>`
            }
        } else {
                alert("error")
        }
    }
}
getPosts();