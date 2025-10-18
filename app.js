let menucont =document.getElementById("menucont");
let menu =document.getElementById("menu");
let about =document.getElementById("about");
let contact =document.getElementById("contact");
let aboutbtn =document.getElementById("aboutbtn");
let contactbtn =document.getElementById("contactbtn");

aboutbtn.addEventListener("click" ,(event)=>{
    event.preventDefault(); // <-- prevents page reload
    about.scrollIntoView({ behavior: "smooth" });
})
contactbtn.addEventListener("click" ,(event)=>{
    event.preventDefault(); // <-- prevents page reload
    contact.scrollIntoView({ behavior: "smooth" });
})


menu.addEventListener("click", () => {
    if (menucont.style.display === "flex") {
        menucont.style.display = "none";
        menu.src = "./assets/bars.svg"; // original icon
    } else {
        menucont.style.display = "flex";
        menu.src = "./assets/x.svg"; // new icon
    }
});

