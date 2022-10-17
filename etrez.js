const inputaskDOM=document.querySelector("#task") 
const addingbuttonDOM=document.querySelector("#liveToastBtn")
const  taskListDOM=document.querySelector("ul")
// Kapat düğmesi oluşturun ve her liste öğesine ekleyin

for(let i =0;i<taskListDOM.children.length;i++){
    let span =document.createElement("SPAN")
    let closingSign=document.createElement("\u00D7")
    span.className=" close "
    span.appendChild(closingSign)
    taskListDOM.children[i].appendChild(span)
}
// Bir liste öğesine tıklandığında işaretli stil ekle
taskListDOM.addEventListener("click",function(ev){
    if(ev.target.tagName==='LI'){
        ev.target.classList.toggle('checked');
    }

})



const closeButton = document.getElementsByClassName("close")
for(i=0; i<closeButton.length; i++) {
    closeButton[i].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Add new list item
function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("task").value;
    let textNode = document.createTextNode(inputValue);
    li.appendChild(textNode);
    if(inputValue === "" || inputValue === " ") {
        $(".error").toast("show");
    }    
    else { 
        taskListDOM.appendChild(li);
        $(".success").toast("show");
    }    
    document.getElementById("task").value= "";  


    let span = document.createElement("SPAN")
    let closingSign = document.createTextNode("\u00D7")
    span.className = "close"
    span.appendChild(closingSign)
    li.appendChild(span)

    for(i=0; i<closeButton.length; i++) {
        closeButton[i].onclick = function () {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }
}

// Remove all items from list
function removeAll() {
    const li = document.querySelectorAll('li');
    li.forEach((item) => {
        item.remove();
    })
}
