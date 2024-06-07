function getPosts() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            for (post of posts) {
                `<div class = "post">
                    <h3>${post.title}</h3>
                    <h4>bbbbbbbbbbbbbbbbbbbbbbbb</h4>
                </div>`
            }
        } else {
                alert("error")
        }
    }
}
getPosts();