const cardcontent = document.querySelector(".card-content")
const acc_header = document.querySelectorAll(".accordion-header img")
const collapse = document.querySelectorAll(".accordion-collapse")

// acc_header.onClick = () => {
// }

acc_header[1].addEventListener('click', () => {
    console.log("ggsg");
    collapse[1].classList.toggle("active-accordion-collapse")
    cardcontent.classList.toggle("opened-collapse");
})