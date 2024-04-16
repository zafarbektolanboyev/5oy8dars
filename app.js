const formInp = document.getElementById("fromInput");
const card = document.getElementById("card");


    card.innerHTML =`<img id="imgSrc" src="https://www.topgear.com/sites/default/files/2022/03/TopGear%20-%20Tesla%20Model%20Y%20-%20003.jpg" alt="" width="310" height="200">
            <h3 id="title">Text</h3>
            <h6 class="text">speed:250km/s</h6>
            <h6 class="text">100,000$</h6>
            <h6 class="text">Color: #ab34cd</h6>`
// localStorage.setItem("card", JSON.stringify(card));

    formInput.innerHTML = `
            <label class="label" for="text">
            <h5>Car name</h5>
            <input id="Input" type="text" placeholder="Car name..">
            </label><br>
            <label class="label" for="number">
            <h5>Speed</h5>
            <input id="Input" type="number" placeholder="Speed..">
            </label>
            <label class="label" for="number">
            <h5>Pirce$</h5>
            <input id="Input" type="text" placeholder="Price$..">
            </label><br>
            <label class="label" for="text">
            <h5>Url</h5>
            <input id="Input" type="url" placeholder="car image url.."><br>
            </label><br>
            <label class="color" for="text">
            <h5>Color:</h5>
            <input class="inputColor" type="color">
            </label>
            <button id="submitBtn" type="submit">Submit</button>`

console.log(card);
console.log(formInput)


// const searchInput = document.getElementById("searchInput");
// const submitBtn = document.getElementById("submitBtn");
// const productsList1 = document.getElementById("productsList1");
// const todoForm = document.getElementById("todoform");
// // modal
// const modal = document.getElementById("modal");
// const overlay = document.getElementById("overlay");
// const editForm = document.querySelector("#editForm")

// function openModal(){
//     modal.classList.remove("hidden");
//     overlay.classList.remove("hidden");
// }

// function closeModal(){
//     modal.classList.add("hidden");
//     overlay.classList.add("hidden");
// }

// overlay.addEventListener("click", () => {
//    closeModal(editInput.value);
// });
// // modal close
// let todoArr = [];

// todoForm.addEventListener("submit", (e) =>{
//     e.preventDefault();
//     let date = new Date();


//     let todo = {
//         id: Math.floor(Math.random() * 1000000),
//         text: searchInput.value,
//         time: date.toLocaleString("uz-UZ", {
//             hour:"2-digit",
//             minute:"2-digit",
//             second:"2-digit"
//         })
//     };
//     todoArr.push(todo);

//     searchInput.value = "";

//     createTodos(todoArr);
// });

// function createTodos(data = todoArr){
//     productsList1.innerHTML = "";


//     data.forEach(({ id, text, time}) => {
//         const li = document.createElement("li");
        

//         li.classList.add("list-item");



//         li.innerHTML = `<p>${text}</p>
//         <p style="color:grey;">${time}</p>
//             <div>
//                 <i class="fa-regular fa-pen-to-square" style="color: rgb(223, 90, 19);" onclick="updateTodo(${id})"></i>
//                 <i class="fa-regular fa-trash-can" style="color: red;" onclick="deleteTodo(${id})">
//             </div>`;


//         productsList1.appendChild(li);
//     });
// };


// function deleteTodo(itemid){
//     todoArr = todoArr.filter(({ id }) => id !== itemid);

//     createTodos(todoArr);
// }

// function updateTodo(itemid){
//     openModal();

//     function onSubmit(e){
//             e.preventDefault();

//             todoArr = todoArr.map((item) => {
//                 if(item.id === itemid){
//                     return{
//                         ...item,
//                         text: editInput.value,
//                     };
//                 };
//                 return item;
//             });
//             createTodos();
//             e.target.reset()
//             closeModal();

//             return editForm.removeEventListener("submit", onSubmit);
//     }
//     editForm.addEventListener("submit", onSubmit);;
// }

// // local storage ga ulash]
// // session storage nomida farq bor
// let arr = ["lorem", "text", 5];
// console.log(JSON.stringify(arr));
// console.log(JSON.parse(JSON.stringify(arr)))

// localStorage.setItem("products", JSON.stringify(arr));

// console.log(JSON.parse(localStorage.getItem("products")));