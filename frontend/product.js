const queryString = new URL(window.location.origin+"/product.html"+window.location.search);
//Récupérer l'id dans le LocalStorage, sinon revenir à index
const paremeters = queryString.searchParams;
const id = paremeters.get("id");
if(id == null || id == undefined)window.location = "./index.html";

fetch("http://localhost:3500/api/product/"+id)
.then(response=>response.json())
.then(data=>{
    document.getElementById("name").innerText = data.name;
    quantity.innerText = data.quantity;
    description.innerText = data.description;
    for(let av of data.avis){
        fetch("http://localhost:3500/api/avis/"+av)
        .then(response2=>response2.json())
        .then(data2=>{
            document.querySelector(".avis-list").innerHTML += `<li>${data2.description}</li>`;
            console.log(data2.description);
        })
        .catch(error=>{
            console.error("error",error);
            document.querySelector(".avis-list").innerHTML = "";
        })
    }
})
.catch(error=>{
    console.error("error",error);
    document.querySelector(".avis-list").innerHTML = "";
})

fetch("http://localhost:3500/api/avis")
.then(response=>response.json())
.then(data=>{
    let index = 0;
    for(let avis of data){
        let newOpt = document.createElement("option");
        newOpt.value = avis._id;
        newOpt.innerText = avis.description;
        if(index == 0){
            newOpt.selected = true;
            index++;
        }
        document.querySelector("select").appendChild(newOpt);
    }
})
.catch(error=>{
    console.error("error",error);
    window.location = "./index.html";
})

document.querySelector("form").addEventListener("submit",(event)=>{
    event.preventDefault();
    let formdata = new FormData(document.querySelector("form"),document.querySelector("input[type=submit]"));
    let desc = formdata.get("description");
    if(desc && desc.trim() !== ""){
        fetch("http://localhost:3500/api/product/comment/"+id,{
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({avis_id:desc})
        })
        .then(response=>response.json())
        .then(data=>{
            window.location = "./index.html"
        })
        .catch(error=>{
            console.error("error",error);
        })
    }
})