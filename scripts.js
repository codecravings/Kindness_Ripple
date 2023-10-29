document.addEventListener('DOMContentLoaded', () => {
    const likeBtn = document.querySelector('.like-btn');
    likeBtn.addEventListener('click', () => {
        likeBtn.classList.toggle('active');
    });
});
