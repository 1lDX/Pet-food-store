let getproduct = document.getElementById("getproduct");
let price = document.getElementById("price");
let nameproduct = document.getElementById("nameproduct");
let quantity = document.getElementById("quantity");
let drop = document.getElementById("drop");
let add = document.getElementById("add");
let addtomarket = document.getElementById("add_to_market");
let buy = document.getElementById("buy");
let boxbuy = document.getElementById("boxbuy");
let detailboxbuy = document.getElementById("detailboxbuy");
let boxbuyok = document.getElementById("boxbuyok");
let boxbuycancal = document.getElementById("boxbuycancel");

let getkeywordcat = sessionStorage.getItem('keyproductcat');
let getkeyworddog = sessionStorage.getItem('keyproductdog');
let arrcatimg = ["img/Wiskas.jpg","img/RoyalCanin.jpg","img/Me-O.jpg"];
let arrdogimg = ["img/SmartHeart.jpg","img/pedigree.jpg","img/Alpo.jpg"];

let Quantity1 = 1;
let Quantity2 = 1;
let Quantity3 = 1;
let Quantity4 = 1;
let Quantity5 = 1;
let Quantity6 = 1;

if (getkeywordcat == "product1") {
    getproduct.src = arrcatimg[0];
    price.innerHTML = "250 Barth";
    drop.addEventListener("click",() => {
        Quantity1 -= 1;
        if (Quantity1 < 1) {
            Quantity1 = 1;
        }
        quantity.innerHTML = Quantity1;
    });
    add.addEventListener("click",() => {
        Quantity1 += 1;
        quantity.innerHTML = Quantity1;
    });
    addtomarket.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct1',Quantity1);
    });
    buy.addEventListener("click",() => {
        boxbuy.style.display = "flex";
        detailboxbuy.innerHTML = `Quantity is ${Quantity1} Price ${Quantity1 * 250}`;
        boxbuyok.addEventListener("click",() => {
            Quantity1 = 1;
            quantity.innerHTML = Quantity1;
            boxbuy.style.display = "none";
        });
        boxbuycancal.addEventListener("click",() => {
            boxbuy.style.display = "none";
        });
    });
    quantity.innerHTML = Quantity1;
}

else if (getkeywordcat == "product2") {
    getproduct.src = arrcatimg[1];
    price.innerHTML = "220 Barth";
    drop.addEventListener("click",() => {
        Quantity2 -= 1;
        if (Quantity2 < 1) {
            Quantity2 = 1;
        }
        quantity.innerHTML = Quantity2;
    });
    add.addEventListener("click",() => {
        Quantity2 += 1;
        quantity.innerHTML = Quantity2;

    });
    addtomarket.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct2',Quantity2);
        console.log("fuck");
    });
    buy.addEventListener("click",() => {
        boxbuy.style.display = "flex";
        detailboxbuy.innerHTML = `Quantity is ${Quantity2} Price ${Quantity2 * 250}`;
        boxbuyok.addEventListener("click",() => {
            Quantity2 = 1;
            quantity.innerHTML = Quantity2;
            boxbuy.style.display = "none";
        });
        boxbuycancal.addEventListener("click",() => {
            boxbuy.style.display = "none";
        });
    });
    quantity.innerHTML = Quantity2;
}

else if (getkeywordcat == "product3") {
    getproduct.src = arrcatimg[2];
    price.innerHTML = "200 Barth";
    drop.addEventListener("click",() => {
        Quantity3 -= 1;
        if (Quantity3 < 1) {
            Quantity3 = 1;
        }
        quantity.innerHTML = Quantity3;
    });
    add.addEventListener("click",() => {
        Quantity3 += 1;
        quantity.innerHTML = Quantity3;
    });
    addtomarket.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct3',Quantity3);
    });
    buy.addEventListener("click",() => {
        boxbuy.style.display = "flex";
        detailboxbuy.innerHTML = `Quantity is ${Quantity3} Price ${Quantity3 * 250}`;
        boxbuyok.addEventListener("click",() => {
            Quantity3 = 1;
            quantity.innerHTML = Quantity3;
            boxbuy.style.display = "none";
        });
        boxbuycancal.addEventListener("click",() => {
            boxbuy.style.display = "none";
        });
    });
    quantity.innerHTML = Quantity3;
}

else if (getkeyworddog == "product4") {
    getproduct.src = arrdogimg[0];
    price.innerHTML = "250 Barth";
    drop.addEventListener("click",() => {
        Quantity4 -= 1;
        if (Quantity4 < 1) {
            Quantity4 = 1;
        }
        quantity.innerHTML = Quantity4;
    });
    add.addEventListener("click",() => {
        Quantity4 += 1;
        quantity.innerHTML = Quantity4;
    });
    addtomarket.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct4',Quantity4);
    });
    buy.addEventListener("click",() => {
        boxbuy.style.display = "flex";
        detailboxbuy.innerHTML = `Quantity is ${Quantity4} Price ${Quantity4 * 250}`;
        boxbuyok.addEventListener("click",() => {
            Quantity4 = 1;
            quantity.innerHTML = Quantity4;
            boxbuy.style.display = "none";
        });
        boxbuycancal.addEventListener("click",() => {
            boxbuy.style.display = "none";
        });
    });
    quantity.innerHTML = Quantity4;
}

else if (getkeyworddog == "product5") {
    getproduct.src = arrdogimg[1];
    price.innerHTML = "220 Barth";
    drop.addEventListener("click",() => {
        Quantity5 -= 1;
        if (Quantity5 < 1) {
            Quantity5 = 1;
        }
        quantity.innerHTML = Quantity5;
    });
    add.addEventListener("click",() => {
        Quantity5 += 1;
        quantity.innerHTML = Quantity5;
    });
    addtomarket.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct5',Quantity5);
    });
    buy.addEventListener("click",() => {
        boxbuy.style.display = "flex";
        detailboxbuy.innerHTML = `Quantity is ${Quantity5} Price ${Quantity5 * 250}`;
        boxbuyok.addEventListener("click",() => {
            Quantity5 = 1;
            quantity.innerHTML = Quantity5;
            boxbuy.style.display = "none";
        });
        boxbuycancal.addEventListener("click",() => {
            boxbuy.style.display = "none";
        });
    });
    quantity.innerHTML = Quantity5;
}

else if (getkeyworddog == "product6") {
    getproduct.src = arrdogimg[2];
    price.innerHTML = "200 Barth";
    drop.addEventListener("click",() => {
        Quantity6 -= 1;
        if (Quantity6 < 1) {
            Quantity6 = 1;
        }
        quantity.innerHTML = Quantity6;
    });
    add.addEventListener("click",() => {
        Quantity6 += 1;
        quantity.innerHTML = Quantity6;
    });
    addtomarket.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct6',Quantity6);
    });
    buy.addEventListener("click",() => {
        boxbuy.style.display = "flex";
        detailboxbuy.innerHTML = `Quantity is ${Quantity6} Price ${Quantity6 * 250}`;
        boxbuyok.addEventListener("click",() => {
            Quantity6 = 1;
            quantity.innerHTML = Quantity6;
            boxbuy.style.display = "none";
        });
        boxbuycancal.addEventListener("click",() => {
            boxbuy.style.display = "none";
        });
    });
    quantity.innerHTML = Quantity6;
}