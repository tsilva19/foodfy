// const modalOverlay = document.querySelector('.modal-overlay');
// const receitas = document.querySelectorAll('.card');

// for (let receita of receitas) {
//     receita.addEventListener("click", function() {
//         const imageId = receita.getAttribute('id');
//         const titulo = receita.querySelector('.titulo').innerText
//         const autor = receita.querySelector('.texto').innerText

//         modalOverlay.classList.add('active');
//         modalOverlay.querySelector('img').src = `assets/${imageId}.png`
//         modalOverlay.querySelector('h4').innerHTML = titulo;
//         modalOverlay.querySelector('p').innerHTML = autor;
//     })
// }

// document.querySelector('.close-modal').addEventListener("click", function() {
//     modalOverlay.classList.remove('active');
// })

const cards = document.querySelectorAll('.card')

for (let i = 0; i <= cards.length; i++){
    cards[i].addEventListener('click', () => {
        window.location.href = `/recipes/${i}`
       
    })
}