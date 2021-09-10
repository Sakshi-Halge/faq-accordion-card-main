// document.querySelectorAll('.accordion-question').forEach((item) => {
//     item.addEventListener('click', (event) => {
//         item.classList.toggle('collapse-open');
//         console.log('click!');
//     })
// })

const accordion_questions = document.querySelectorAll('.accordion-question');

for (let i = 0; i < accordion_questions.length; i++){
    accordion_questions[i].addEventListener('click', (event) => {
        accordionEvent(i);
    })
    
}

const accordionEvent = (i) =>  {
    accordion_questions[i].classList.toggle('collapse-open');
    accordion_questions[i].nextElementSibling.classList.toggle('open');
    for (let j = 0; j < accordion_questions.length; j++){
        if(j != i){
            accordion_questions[j].classList.remove('collapse-open');
            accordion_questions[j].nextElementSibling.classList.remove('open');

        }
    }
}