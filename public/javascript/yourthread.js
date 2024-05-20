let heart = document.querySelector('.heart');
let comment = document.querySelector('.comment');
let share = document.querySelector('.share');

let unfilledHeart = document.getElementById('unfilledHeart');
let filledHeart = document.getElementById('filledHeart');
let unfilledComment = document.getElementById('unfilledComment');
let filledComment = document.getElementById('filledComment');
let unfilledShare = document.getElementById('unfilledShare');
let filledShare = document.getElementById('filledShare');

heart.addEventListener('click', function() {
        unfilledHeart.classList.toggle('none');
        filledHeart.classList.toggle('none');
});

comment.addEventListener('mouseover', function() {
        unfilledComment.classList.toggle('none');
        filledComment.classList.toggle('none');
});

comment.addEventListener('mouseout', function() {
        unfilledComment.classList.toggle('none');
        filledComment.classList.toggle('none');
});


share.addEventListener('mouseover', function() {
        unfilledShare.classList.toggle('none');
        filledShare.classList.toggle('none');
});

share.addEventListener('mouseout', function() {
        unfilledShare.classList.toggle('none');
        filledShare.classList.toggle('none');
});