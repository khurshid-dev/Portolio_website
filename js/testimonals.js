// testimonals slider 
const btnsParent = document.querySelector('.indicator'),
    btns = document.querySelectorAll('.btn'),
    content = document.querySelectorAll('.client-comment-items');


function hideContent() {
    btns.forEach((item) => {
        item.classList.remove('active');
    });
    content.forEach((item) => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });
}

function showContent(i = 0) {
    btns[i].classList.add('active');
    content[i].classList.add('show', 'fade');
    content[i].classList.remove('hide');
}

hideContent();
showContent();


btnsParent.addEventListener('click', (event) => {
    const target = event.target;
    if(target && target.classList.contains('btn')) {
        btns.forEach((item, idx) => {
            if(target === item) {
                hideContent();
                showContent(idx);
            }
        });
    }
});
