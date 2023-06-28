import { OmdbGateway } from "./omdbGateway.js";
import { handleSearch } from "./handleSearch.js";
import { addToWatchlist } from "./getContent.js";

// -----------------------------------------------------------------
const key = `7db8350e`;
const allDataApi = `https://www.omdbapi.com/?apikey=${key}&`;

const header = document.querySelector(".header");
const headerIntroduction = document.querySelector(".header-introduction");

const searchForm = document.querySelector(".search-form");
const searchBtn = document.querySelector(".search-btn");

const container = document.querySelector(".container");

// -----------------------------------------------------------------
container.innerHTML = `
    <div class="start-exploring">
        <img class="start-icon" src="img/film-reel-icon.png" />
        <p class="start-text">Start exploring</p>
    </div>
`;
// -----------------------------------------------------------------
searchForm.addEventListener("submit", handleSearch);
// -----------------------------------------------------------------
