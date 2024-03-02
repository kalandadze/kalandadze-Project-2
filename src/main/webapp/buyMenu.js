window.addEventListener('message',function(candy){
    console.log(candy.data);
    setup(candy.data);
})

async function setup(candy){
    var url = "http://localhost:8989/candy-shop/store/product?name="+candy;
    console.log(url);
    var response = await fetch(url, { method: "GET" });
    var product= await response.json();
    console.log(product.name);
    var h2=document.getElementById("product").textContent=product.name;
    var p=document.getElementById("price").textContent=product.price;
    var p1=document.getElementById("amount").textContent=product.amount;
}
async function buyNow(){
    var name=document.getElementById("product").textContent;
    var amount=document.getElementById("amountInp").value;
    var url = "http://localhost:8989/candy-shop/store/product?name="+name+"&amount="+amount;
    var response = await fetch(url, { method: "POST" });
    if(response.ok){
        alert("product successfully bought");
    }else {
        alert("not enough products in the storage");
    }
    setup(name);
}