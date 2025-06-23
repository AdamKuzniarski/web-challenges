console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(starsNum, filledStars=0) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";

  // --v-- write or modify code below this line --v--
for(let i =1 ; i <=starsNum; i++){
  const imgElement = document.createElement('img')

  if(i <= filledStars){
    imgElement.setAttribute('src', `assets/star-filled.svg`)
    imgElement.setAttribute('alt', 'star') 
  }else {
    imgElement.setAttribute('src', `assets/star-empty.svg`)
    imgElement.setAttribute('alt', 'star')

  }

  starContainer.append(imgElement)
}
  // --^-- write or modify code above this line --^--
}

renderStars(4,2);
