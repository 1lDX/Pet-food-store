let productimg = document.querySelectorAll(".product > img");
let productname = document.querySelectorAll(".product > a");
let productcatclick = document.querySelectorAll(".product > a");
let productdogclick = document.querySelectorAll(".product > a");

let Get = sessionStorage.getItem('key');
sessionStorage.setItem('keyproductcat',null);
sessionStorage.setItem('keyproductdog',null);

let arrcatimg = ["img/Wiskas.jpg","img/RoyalCanin.jpg","img/Me-O.jpg"];
let arrdogimg = ["img/SmartHeart.jpg","img/pedigree.jpg","img/Alpo.jpg"];
let arrcatname = ["Wiskas","RoyalCanin","Me-O"];
let arrdogname = ["SmartHeart","Pedigree","Alpo"];

if (Get == 1) {
    for (let i = 0 ; i < productimg.length ; i++) {
        productimg[i].src = arrcatimg[i];
        productname[i].innerHTML = arrcatname[i];
    }
    productcatclick[0].addEventListener("click",() => {
        sessionStorage.setItem('keyproductcat','product1');
    })
    productcatclick[1].addEventListener("click",() => {
        sessionStorage.setItem('keyproductcat','product2');
    })
    productcatclick[2].addEventListener("click",() => {
        sessionStorage.setItem('keyproductcat','product3');
    })
}

else if (Get == 2) {
    for (let i = 0 ; i < productimg.length ; i++) {
        productimg[i].src = arrdogimg[i];
        productname[i].innerHTML = arrdogname[i];
    }
    productdogclick[0].addEventListener("click",() => {
        sessionStorage.setItem('keyproductdog','product4');
    })
    productdogclick[1].addEventListener("click",() => {
        sessionStorage.setItem('keyproductdog','product5');
    })
    productdogclick[2].addEventListener("click",() => {
        sessionStorage.setItem('keyproductdog','product6');
    })
}
