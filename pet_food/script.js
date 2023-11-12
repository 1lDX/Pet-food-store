let catfood = document.getElementById("catfood");
let dogfood = document.getElementById("dogfood");

catfood.addEventListener("click",() => {
    sessionStorage.setItem('key',1);
});

dogfood.addEventListener("click",() => {
    sessionStorage.setItem('key',2);
});