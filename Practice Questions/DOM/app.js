
const button = document.getElementById("btn")
const image = document.getElementById("image")
function toggle(){

if(button.innerText == "Bulb is on"){
    button.innerText = "Bulb is off"
image.setAttribute("src","https://media.istockphoto.com/id/502789173/photo/light-bulb-concept.jpg?s=612x612&w=0&k=20&c=vJfSDuFJf_4UsQcUsdMNUfDkkNU6Bf9cTHF-n4-Zwvs=")

image.style.width = "200px"
image.style.transition = "all 0.5s ease"

}

else if(button.innerText == "Bulb is off"){
    button.innerHTML = "Bulb is on"

    image.setAttribute("src","https://www.shutterstock.com/image-photo/warm-colored-active-bulb-on-260nw-782351350.jpg")
}



}


// to do items

const addBtn = document.getElementById("addbtn")
const MainDiv = document.getElementById("items")
const input = document.getElementById("input-1")
addBtn.addEventListener("click",()=>{


MainDiv.innerHTML = `<div>
<ul class="list-group">
  <li class="list-group-item d-flex justify-content-between ">
<h3>${input.value}</h3>
<button class="ms-auto" >Edit</button>
<button>Remove</button>
  </li>
  
</ul>

</div>`



})



