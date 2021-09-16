const accordion_questions = document.querySelectorAll('.accordion-question');

for (let i = 0; i < accordion_questions.length; i++) {
    accordion_questions[i].addEventListener('click', (event) => {
        accordionEvent(i);
    })

}

const accordionEvent = (i) => {

    accordion_questions[i].classList.toggle('collapse-open');
    if(accordion_questions[i].classList.contains('collapse-open')){

        accordion_questions[i].nextElementSibling.style.maxHeight = 100 + 'px';
    }
    else{
        accordion_questions[i].nextElementSibling.style.maxHeight = 0;
    }
    for (let j = 0; j < accordion_questions.length; j++) {
        if (j != i) {
            accordion_questions[j].classList.remove('collapse-open');
            accordion_questions[j].nextElementSibling.style.maxHeight = 0;

        }
    }
}