//all menu link
var allMenuLink = document.querySelectorAll(".nav ul li a");
//all page id
var allPageId = document.querySelectorAll(".page > div");

//current active page
var currentPage = document.URL;

// show default page & hide all page
for(let i = 0; i < allPageId.length - 1; i++) {
    if(i != 0)
    allPageId[i].classList.add("page-out");
}

// click to change menu
for(let i = 0; i < allMenuLink.length; i++) {
    allMenuLink[i].addEventListener("click", (event) => {
        // event.preventDefault();
        //show menu
        for(let a = 0; a < allMenuLink.length; a++) {
            if(i === a) {
                allPageId[a].classList.add("page-show")
                allPageId[a].classList.remove("page-out")
                // menu active
                allMenuLink[a].classList.add('active')
            } else {
                allPageId[a].classList.remove("page-show")
                allPageId[a].classList.add("page-out")
                allMenuLink[a].classList.remove('active')
            }
        }
    });
}

// contact button
document.getElementById("con-tact").addEventListener("click", () => {
    allMenuLink[5].click();
})

// projects redirect button
document.getElementById("pro-jects").addEventListener("click", () => {
    allMenuLink[3].click();
})

// modal
var modal = document.getElementById("modal");
var openModal = document.querySelectorAll("[data-modal='photo']")

for(let i = 0; i < openModal.length; i++) {
    openModal[i].addEventListener("click", () => {
        modal.classList.toggle("active")
    })
}