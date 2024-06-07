function getPosts() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts");
    request.responseType = "json";
    request.send();
    request.onload = function () {
        if (request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.getElementById("posts").innerHTML = cont
            for (post of posts) {
                let cont =`<div class = "data">
                    <h3>${post.title}</h3>
                    <h4>bbbbbbbbbbbbbbbbbbbbbbbb</h4>
                </div>`;
                document.getElementById("posts").innerHTML = cont;
            }
        } else {
                alert("error")
        }
    }
}
getPosts();