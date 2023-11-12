let drop = document.querySelectorAll(".drop");
let quantityall = document.querySelectorAll(".quantityall");
let Add = document.querySelectorAll(".add");
let Remove = document.getElementById("remove");
let payment = document.getElementById("payment");
let boxbuy = document.getElementById("boxbuy");
let detailboxbuy = document.getElementById("detailboxbuy");
let boxbuyok = document.getElementById("boxbuyok");
let boxbuycancal = document.getElementById("boxbuycancel");


let Quantity1 = checkfirstallproduct(parseInt(sessionStorage.getItem('setquantityproduct1')));
let Quantity2 = checkfirstallproduct(parseInt(sessionStorage.getItem('setquantityproduct2')));
let Quantity3 = checkfirstallproduct(parseInt(sessionStorage.getItem('setquantityproduct3')));
let Quantity4 = checkfirstallproduct(parseInt(sessionStorage.getItem('setquantityproduct4')));
let Quantity5 = checkfirstallproduct(parseInt(sessionStorage.getItem('setquantityproduct5')));
let Quantity6 = checkfirstallproduct(parseInt(sessionStorage.getItem('setquantityproduct6')));


quantityall[0].innerHTML = Quantity1;
quantityall[1].innerHTML = Quantity2;
quantityall[2].innerHTML = Quantity3;
quantityall[3].innerHTML = Quantity4;
quantityall[4].innerHTML = Quantity5;
quantityall[5].innerHTML = Quantity6;

for (let i = 0 ; i < Add.length ; i++) {
    Add[i].addEventListener("click",() => {
        if (i == 0) {
            Quantity1 += 1;
            sessionStorage.setItem('setquantityproduct1',Quantity1);
            quantityall[i].innerHTML = Quantity1;
        }
        else if (i == 1) {
            Quantity2 += 1;
            sessionStorage.setItem('setquantityproduct2',Quantity2);
            quantityall[i].innerHTML = Quantity2;
        }
        else if (i == 2) {
            Quantity3 += 1;
            sessionStorage.setItem('setquantityproduct3',Quantity3);
            quantityall[i].innerHTML = Quantity3;
        }
        else if (i == 3) {
            Quantity4 += 1;
            sessionStorage.setItem('setquantityproduct4',Quantity4);
            quantityall[i].innerHTML = Quantity4;
        }
        else if (i == 4) {
            Quantity5 += 1;
            sessionStorage.setItem('setquantityproduct5',Quantity5);
            quantityall[i].innerHTML = Quantity5;
        }
        else if (i == 5) {
            Quantity6 += 1;
            sessionStorage.setItem('setquantityproduct6',Quantity6);
            quantityall[i].innerHTML = Quantity6;
        }
    });

    drop[i].addEventListener("click",() => {
        if (i == 0) {
            Quantity1 -= 1;
            if (Quantity1 < 0) {
                Quantity1 = 0;
            }
            sessionStorage.setItem('setquantityproduct1',Quantity1);
            quantityall[i].innerHTML = Quantity1;
        }
        else if (i == 1) {
            Quantity2 -= 1;
            if (Quantity2 < 0) {
                Quantity2 = 0;
            }
            sessionStorage.setItem('setquantityproduct2',Quantity2);
            quantityall[i].innerHTML = Quantity2;
        }
        else if (i == 2) {
            Quantity3 -= 1;
            if (Quantity3 < 0) {
                Quantity3 = 0;
            }
            sessionStorage.setItem('setquantityproduct3',Quantity3);
            quantityall[i].innerHTML = Quantity3;
        }
        else if (i == 3) {
            Quantity4 -= 1;
            if (Quantity4 < 0) {
                Quantity4 = 0;
            }
            sessionStorage.setItem('setquantityproduct4',Quantity4);
            quantityall[i].innerHTML = Quantity4;
        }
        else if (i == 4) {
            Quantity5 -= 1;
            if (Quantity5 < 0) {
                Quantity5 = 0;
            }
            sessionStorage.setItem('setquantityproduct5',Quantity5);
            quantityall[i].innerHTML = Quantity5;
        }
        else if (i == 5) {
            Quantity6 -= 1;
            if (Quantity6 < 0) {
                Quantity6 = 0;
            }
            sessionStorage.setItem('setquantityproduct6',Quantity6);
            quantityall[i].innerHTML = Quantity6;
        }
    });
}

Remove.addEventListener("click",() => {
    Quantity1 = 0;
    Quantity2 = 0;
    Quantity3 = 0;
    Quantity4 = 0;
    Quantity5 = 0;
    Quantity6 = 0;
    quantityall[0].innerHTML = Quantity1;
    quantityall[1].innerHTML = Quantity2;
    quantityall[2].innerHTML = Quantity3;
    quantityall[3].innerHTML = Quantity4;
    quantityall[4].innerHTML = Quantity5;
    quantityall[5].innerHTML = Quantity6;
});

payment.addEventListener("click",() => {
    detailboxbuy.innerHTML = `All Price is ${checkpayment()}`;
    boxbuy.style.display = "flex";
    boxbuyok.addEventListener("click",() => {
        sessionStorage.setItem('setquantityproduct1',0);
        sessionStorage.setItem('setquantityproduct2',0);
        sessionStorage.setItem('setquantityproduct3',0);
        sessionStorage.setItem('setquantityproduct4',0);
        sessionStorage.setItem('setquantityproduct5',0);
        sessionStorage.setItem('setquantityproduct6',0);
        Quantity1 = parseInt(sessionStorage.getItem('setquantityproduct1'));
        Quantity2 = parseInt(sessionStorage.getItem('setquantityproduct2'));
        Quantity3 = parseInt(sessionStorage.getItem('setquantityproduct3'));
        Quantity4 = parseInt(sessionStorage.getItem('setquantityproduct4'));
        Quantity5 = parseInt(sessionStorage.getItem('setquantityproduct5'));
        Quantity6 = parseInt(sessionStorage.getItem('setquantityproduct6'));
        quantityall[0].innerHTML = Quantity1;
        quantityall[1].innerHTML = Quantity2;
        quantityall[2].innerHTML = Quantity3;
        quantityall[3].innerHTML = Quantity4;
        quantityall[4].innerHTML = Quantity5;
        quantityall[5].innerHTML = Quantity6;
        boxbuy.style.display = "none";
    });
});

function checkpayment() {
    let total = 0;
    if (Quantity1 > 0) {
        total += Quantity1 * 250;
    }
    if (Quantity2 > 0) {
        total += Quantity2 * 220;
    }
    if (Quantity3 > 0) {
        total += Quantity3 * 200
    }
    if (Quantity4 > 0) {
        total += Quantity4 * 250;
    }
    if (Quantity5 > 0) {
        total += Quantity5 * 220;
    }
    if (Quantity6 > 0) {
        total += Quantity6 * 200
    }
    return(total);
}

function checkfirstallproduct(num) {
    if (isNaN(num)) {
        return(0);
    }
    else{
        return(num);
    }
}