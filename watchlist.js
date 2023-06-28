
import { storage } from "./getContent.js"
import { getContent } from "./getContent.js"
import { isFound } from "./getContent.js"
import { omdbGateway } from "./handleSearch.js"


const movieIDs = storage.load()
const myMovies = await Promise.all(movieIDs.map(id => omdbGateway.details(id)))

const container = document.querySelector(".container")

const renderMyList = () => {        
    if (!movieIDs.length) {
        // console.log('the list is empty')
        return `
            <div class="start-exploring">
                <p class="start-text">Your watchlist is looking a little empty...</p>
                <a class="link" href="index.html"><img class="icon" src="img/plus-icon.png" />Let’s add some movies!</a>
            </div>`            
    } else {
        // console.log(`${movieIDs.length} movies in my list`)
        return getContent(myMovies)
    }  
}



container.innerHTML = renderMyList()
