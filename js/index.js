console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

const secondPost = document.createElement("article");
const paragraph = document.createElement("p");
const footer = document.createElement("footer");
const userSpan = document.createElement("span");
const secondLikeButton = document.createElement("button");

document.body.append(secondPost);
secondPost.classList.add("post");

secondPost.append(paragraph);
paragraph.textContent =
  "Ist das Latein, oder was? Warum schreibst du nicht auf Deutsch?";
paragraph.classList.add("post__content");

secondPost.append(footer);
footer.classList.add("post_footer");

footer.append(userSpan);
userSpan.textContent = "@another_user";
userSpan.classList.add("post__username");

footer.append(secondLikeButton);

secondLikeButton.textContent = "♥ Like";
secondLikeButton.classList.add("post__button");
secondLikeButton.addEventListener("click", handleLikeButtonClick);

console.log(footer);

// Exercise:
// Use document.createElement() and append another social media post to the body.
