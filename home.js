//Home
document.addEventListener('DOMContentLoaded', () => {
    const likeButton = document.querySelector('.like-btn');
    const likeCountElement = document.getElementById('like-count');
    let likeCount = parseInt(likeCountElement.textContent, 10) || 0;

    likeButton.addEventListener('click', () => {
        likeCount += 1;
        likeCountElement.textContent = likeCount;
        likeButton.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const commentForm = document.getElementById('comment-form');
    const commentInput = document.getElementById('comment-input');
    const commentsDiv = document.querySelector('.comments');

    commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const newComment = document.createElement('div');
        newComment.className = 'comment';
        newComment.innerHTML = `
            <a href="profile.html" target="_blank" class="comment-profile-pic-link">
                <img src="src/om.jpg" alt="Profile Picture" class="comment-profile-pic">
            </a>
            
            <p>${commentInput.value}</p>
        `;
        commentsDiv.appendChild(newComment);
        commentInput.value = '';
    });
});


//Help Randomly 
document.addEventListener('DOMContentLoaded', () => {
    const mapBtn = document.getElementById('map-btn');
    mapBtn.addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=19.048337,72.895494&hl=en', '_blank');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mapBtn = document.getElementById('map-btn2');
    mapBtn.addEventListener('click', () => {
        window.open('https://www.google.com/maps?q=19.077966110607765, 72.8842386750368&hl=en', '_blank');
    });
});

document.getElementById('seek-help-btn').addEventListener('click', function() {
    const inputContainer = document.getElementById('input-container');
    inputContainer.innerHTML = `
        <input type="text" class="input-field" id="assistance-input" placeholder="Clearly articulate the assistance">
        <input type="file" class="input-field" id="upload-photo" accept="image/*" capture="camera">
        <input type="text" class="input-field" id="button-text-input" placeholder="What should be displayed on button">
        <input type="text" class="input-field" id="link-input" placeholder="Please provide a link">
        <button class="submit-btn glass-btn" onclick="handleSubmit()">Submit</button>
    `;
});

function handleSubmit() {
    const assistanceInput = document.getElementById('assistance-input').value;
    const photoInput = document.getElementById('upload-photo').files[0];
    const buttonText = document.getElementById('button-text-input').value;
    const linkInput = document.getElementById('link-input').value;

    const outputContainer = document.createElement('div');
    outputContainer.className = 'container';

    const reader = new FileReader();
    reader.onload = function(e) {
        outputContainer.innerHTML = `
            <div class="profile-section">
                <img src="src/anonymous.png" alt="Profile Picture" class="profile-pic">
                <p><b>Anonymous</b></p>
            </div>
            <p>${assistanceInput}</p>
            <img src="${e.target.result}" alt="Uploaded Image" class="responsive-img">
            <a href="${linkInput}" target="_blank"><button class="glass-btn">${buttonText}</button></a>
        `;
        document.body.appendChild(outputContainer);

        const capturedImageContainer = document.getElementById('captured-image-container');
        capturedImageContainer.innerHTML = `<img src="${e.target.result}" alt="Captured Image" class="responsive-img">`;
    }
    if (photoInput) {
        reader.readAsDataURL(photoInput);
    }

    document.getElementById('input-container').innerHTML = ''; // Clear the input fields
}


