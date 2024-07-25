/**
 * @param {SubmitEvent} event
 */
productForm.addEventListener("submit",(event)=>{
    event.preventDefault();
    const formdata = new FormData(productForm,submitter);
    const keys = ["name","quantity","description"];
    let newProduct = {};
    for(let key of keys){
        newProduct[key] = formdata.get(key);
    }
    
    fetch("http://localhost:3500/api/product",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(newProduct)
    })
    .then(response=>response.json())
    .then(data=>{
        console.log(data);
        window.location = "./index.html";
    })
    .catch(error=>{
        console.error("error",error);
    })
})

setInterval(()=>{
    if(quantity.value.toString().trim() == ""){
        quantity.value = 0;
    }
},100)