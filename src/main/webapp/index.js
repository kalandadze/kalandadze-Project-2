async function setup(){
    var url = "http://localhost:8989/candy-shop/store";
    var response = await fetch(url, { method: "GET" });
    var contact1= await response.text();
    console.log(contact1);
    const contact2=contact1.split(", ");
    for(var i=0;i<contact2.length;i++){
        addMessage(contact2[i]);
    }
}

function addMessage(contact){
    var newDiv = document.createElement("div");
    var p= document.createElement("p");
    var div=document.getElementById("tbl");
    var button=document.createElement("button");
    button.className="purchase";
    newDiv.className="productList";
    p.className="candy";
    button.textContent="purchase";
    button.addEventListener('click', function(){
        purchase(contact);
    });
    p.textContent=contact;
    newDiv.appendChild(p);
    newDiv.appendChild(button);
    div.appendChild(newDiv);
}

async function purchase(candy){
    var newWindow = window.open(href="http://localhost:8989/candy-shop/buyMenu.html", windowname="asdfsd", 'width=250,height=200,status=yes,scrollbars=yes');
    console.log(candy);
    newWindow.onload = function(){
        newWindow.postMessage(candy,'*');
    }
}
