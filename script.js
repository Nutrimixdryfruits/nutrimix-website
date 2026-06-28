// NutriMix Premium Website

console.log("Welcome to NutriMix");

document.addEventListener("DOMContentLoaded", function(){

const cards=document.querySelectorAll(".product-card");

cards.forEach((card)=>{
card.addEventListener("mouseenter",()=>{
card.style.transform="translateY(-10px)";
});

card.addEventListener("mouseleave",()=>{
card.style.transform="translateY(0px)";
});
});

});
