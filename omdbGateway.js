export class OmdbGateway {
  key = `7db8350e`;
  baseUrl = `https://www.omdbapi.com/?apikey=${this.key}`;

  async search(title) {
    const response = await fetch(`${this.baseUrl}&s=${title}`);
    const result = await response.json();
    return result;
  }

  async details(imbdID) {
    const response = await fetch(`${this.baseUrl}&i=${imbdID}`);
    const result = await response.json();
    return result;
  }
}
