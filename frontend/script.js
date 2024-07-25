fetch("http://localhost:3500/api/product")
.then(response=>response.json())
.then(data=>{
    const productsList = data;
    console.log(productsList);
    for(let product of productsList){
        let productDiv = document.createElement("div");
        productDiv.classList.add("product")

        let productName = document.createElement("h2");
        productName.innerText = product.name.toUpperCase();
        productDiv.appendChild(productName);
        
        let productQuantity = document.createElement("h3");
        productQuantity.innerHTML = `Quantité: <h3>${product.quantity}</h3>`;
        productDiv.appendChild(productQuantity);

        let productDesc = document.createElement("p");
        productDesc.innerText = product.description;
        productDiv.appendChild(productDesc);

        products.appendChild(productDiv);
    }
})
.catch(error=>{
    console.error("error",error);
    products.innerHTML = "";
})