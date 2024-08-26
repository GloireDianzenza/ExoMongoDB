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

        fetch("http://localhost:3500/api/avis")
        .then(response=>response.json())
        .then(data=>{
            if(product.avis){
                for(let pdt of product.avis){
                    let filtered = data.filter((value,index)=>value._id === pdt);
                    productDesc.innerHTML += "<br>Avis : \n"
                    for(let av of filtered){
                        productDesc.innerHTML += av.description + "\n<br>";
                    }
                }
            }
        })
        .catch(error=>{
            console.error('error',error);
        })

        productDiv.appendChild(productDesc);
        let newLink = document.createElement("a");
        newLink.href = "./product.html?id="+product._id.toString();
        newLink.appendChild(productDiv);

        products.appendChild(newLink);
    }
})
.catch(error=>{
    console.error("error",error);
    products.innerHTML = "";
})