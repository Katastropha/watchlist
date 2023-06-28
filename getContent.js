const container = document.querySelector(".container");
import { Storage } from "./Storage.js";
export const storage = new Storage();

// -------------------------------------------------------------------

let myMovieList = storage.load() ?? [];
if (!myMovieList.length) storage.save(myMovieList);

// -------------------------------------------------------------------

export const isFound = (id) => {
  if (myMovieList.some((el) => el === id)) {
    return "icon img-minus";
  }
  return "icon img-plus";
};

export const getContent = (movies) => {
  return movies
    .map(
      (data) =>
        `<div class="container-movie">
            <div class="poster">
                <img class="movie-poster" src="${data.Poster}" />
            </div>
            <div class="container-information">
                <div class="movie-title-rating">
                    <h2 class="movie-title">${
                      data.Title
                    }</h2> <span class="rating"><img class="icon" src="img/star-icon.png" />${
          data.imdbRating
        }</span>
                </div>
                <div class="information-description">
                    <span class="">${data.Runtime}</span>
                    <span class="">${data.Genre}</span>
                    <div class="description" data-id="${data.imdbID}">
                        <div class="${isFound(data.imdbID)}"> </div>
                            <span class="link">Watchlist</span>
                    </div>
                </div>
                <div class="information-plot">
                    <p class="plot">${data.Plot}</p>                 
                </div>
            </div>    
        </div>`
    )
    .join("");
};
// -------------------------------------------------------------------

const handleMovieListID = (id) => {
  if (myMovieList.some((el) => el === id)) {
    myMovieList = myMovieList.filter((el) => el !== id);
    storage.save(myMovieList);
    // console.log(storage.load(), `${id} movie removed; in my list is ${myMovieList.length} movies now`)
  } else {
    myMovieList.push(id);
    storage.save(myMovieList);
    // console.log(storage.load(), `<<< movie ${id} is added to a lockal storage; in my list is ${myMovieList.length} movies now`)
  }
};
// -------------------------------------------------------------------

export const addToWatchlist = () => {
  container.addEventListener("click", (e) => {
    const addBtn = e.target.closest(".description");
    const icon = addBtn.querySelector(".icon");
    const id = addBtn.dataset.id;

    if (addBtn) {
      handleMovieListID(id);
      if (icon.classList.contains("img-plus")) {
        icon.classList.replace("img-plus", "img-minus");
      } else icon.classList.replace("img-minus", "img-plus");
    }
  });
};

// -------------------------------------------------------------------
addToWatchlist();
