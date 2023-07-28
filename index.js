let searchItem = document.querySelector("#searchItem");
let from = document.getElementById("addForm")


from.addEventListener("submit",function(e){

    e.preventDefault();
    let item = document.getElementById("item").value;
    let ul =document.getElementById("list")
    let li = document.createElement("li")
    let btn=document.createElement("button")
    btn.className="square-button"
    li.innerText=item;
    li.className="list-group-item"
    btn.innerHTML="X"
    ul.appendChild(li)
    li.appendChild(btn)



})



function filterItem(e){
    let liElements = document.getElementsByTagName("li");
    Array.from(liElements).forEach((item) => {
        item.style.display="none"
        
    });
}



searchItem.addEventListener("input",filterItem)