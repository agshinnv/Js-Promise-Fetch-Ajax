"use strict";

// const table = document.querySelector("tbody");
// const btn = document.querySelector("button")
// async function getAllComments(){
//     const response = await fetch("https://jsonplaceholder.typicode.com/comments");
//     const comments = await response.json();

//     let str = "";

//     comments.forEach(comment => {

//         str+= `                <tr>
//         <td>${comment.id}</td>
//         <td data-bs-toggle="modal" data-bs-target="#${comment.id}">${comment.name}</td>
//         <td>@${comment.email}</td>
//         <td>${comment.body}</td>
//         <!-- Button trigger modal -->

// <!-- Modal -->
// <div class="modal fade" id="${comment.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//   <div class="modal-dialog">
//     <div class="modal-content">
//       <div class="modal-header">
//         <h1 class="modal-title fs-5" id="exampleModalLabel">${comment.name}</h1>
//         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//       </div>
//       <div class="modal-body">
//         ${comment.body}
//       </div>
//       <div class="modal-footer">
//         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//         <button type="button" class="btn btn-primary">Save changes</button>
//       </div>
//     </div>
//   </div>
// </div>
//       </tr>`

//     });

//     table.innerHTML = str;

// }

// btn.addEventListener("click",function(){
//     getAllComments();
// })

const table = document.querySelector("tbody");

async function getAllPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  let str = "";

  posts.forEach((post) => {
    str += `                <tr>
        <td>${post.userId}</td>
        <td>${post.id}</td>
        <td data-bs-toggle="modal" data-bs-target="#${post.id}" class = "table-title" data-id = "${post.id}">@${post.title}</td>
        <td>${post.body}</td>
        <!-- Button trigger modal -->


      </tr>`;
  });

  table.innerHTML = str;
}


getAllPost();

setTimeout(() => {
  let tableTitle = document.querySelectorAll(".table-title");
  console.log(tableTitle);

  tableTitle.forEach(table => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${table.getAttribute("data-id")}`)
      .then(response => response.json())
      .then(json => {table.parentNode.innerHTML+=`<!-- Modal -->
      <div class="modal fade" id="${json.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">${json.title}</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              ${json.body}
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>`})
  });


}, 3000);



