console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;

  buttonElement.classList.toggle("post__button--liked");
}


//newButton.addEventListener("click", handleLikeButtonClick);

// Use document.createElement() and append another social media post to the body.

const newPost = document.createElement("article");
const newPtag = document.createElement("p");
const newFooter = document.createElement("footer");
const newSpan = document.createElement("span");
const newButton = document.createElement("button");
newButton.setAttribute("data-js", "second-like-button");
newPtag.classList.add("post__content");
newPost.classList.add("post");
newFooter.classList.add("post__footer");
newSpan.classList.add("post__username");
newButton.classList.add("post__button");
newPtag.textContent =
"Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newSpan.textContent = "@username";
newButton.textContent = "♥ Like";
document.body.append(newPost);
newPost.append(newPtag);
newPost.append(newFooter);
newFooter.append(newSpan);
newFooter.append(newButton);

newButton.addEventListener("click", handleLikeButtonClick);