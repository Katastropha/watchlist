import { OmdbGateway } from "./omdbGateway.js";
import { getContent } from "./getContent.js";
import { addToWatchlist } from "./getContent.js";
export const omdbGateway = new OmdbGateway();

const searchMovie = document.getElementById("search-movie");
const container = document.querySelector(".container");

const notFoundHtml = `
    <div class="start-exploring">                
        <p class="start-text">Unable to find what you’re looking for. Please try another search.</p>
    </div>`;

export const handleSearch = async (e) => {
  e.preventDefault();

  const searchResult = await omdbGateway.search(searchMovie.value);

  if (!searchResult.Search) {
    container.innerHTML = notFoundHtml;
    return;
  }

  const ids = searchResult.Search.map(({ imdbID }) => imdbID);
  const movies = await Promise.all(ids.map((id) => omdbGateway.details(id)));

  container.innerHTML = getContent(movies);
};
