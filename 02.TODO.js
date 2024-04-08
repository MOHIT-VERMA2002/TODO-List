let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
})

//this below code not work for the additional items when we add

// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns) {
//     delBtn.addEventListener("click", function (){
//         let par = delBtn.parentElement;
//         console.log(par)
//         par.remove();
//     });
// };



// Event Delegation => to remove also adding item when we delete trigger
// work for all additional items we add's
ul.addEventListener("click",function(event){
    if (event.target.nodeName== "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted!")
    }
});