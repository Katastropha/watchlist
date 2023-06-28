export class Storage {
    key = "watchlist"
    
    save(arr) {
        localStorage.setItem(this.key, JSON.stringify(arr))
    }
    
    load() {
        return JSON.parse(localStorage.getItem(this.key))    
    }
    
    update() {
        
    }
}

