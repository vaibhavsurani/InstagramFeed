document.querySelectorAll('.like-button').forEach(button => {
    let likeCount = 0;
    button.addEventListener('click', () => {
        likeCount = likeCount === 0 ? 1 : 0; 
        button.querySelector('.like-count').textContent = likeCount;
        button.classList.toggle('liked');
    });
});

document.querySelectorAll('.comment-button').forEach(button => {
    button.addEventListener('click', function() {
        const commentInput = this.previousElementSibling;
        const commentText = commentInput.value;

        if (commentText) {
            const commentsList = this.parentElement.querySelector('.comments-list');
            const newComment = document.createElement('div');
            newComment.textContent = commentText;
            commentsList.appendChild(newComment);
            commentInput.value = ''; 
        }
    });
});