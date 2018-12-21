export default class Service {
  id = 1;
  _apiBase = "https://dog.ceo/api/breeds";
  async getResource(url) {
    const res = await fetch(`${this._apiBase}${url}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  _apiBase2 = "https://dog.ceo/api/breed";
  async getBreed(breed) {
    const res = await fetch(`${this._apiBase2}${breed}`);
    if (!res.ok) {
      throw new Error(`Could not fetch ${breed}, received ${res.status}`);
    }
    const body = await res.json();
    return body;
  }

  getRandomDog = async () => {
    const dog = await this.getResource(`/image/random`);
    return dog;
  };

  getAllDogs = async () => {
    const dog = await this.getResource(`/list/all`);
    
   
    return Object.keys(dog.message).map(breed => {
      return breed;
    });
  };

  getBreedDog = async (breed) => {
    const dog = await this.getBreed(`/${breed}/images/random`);
    return dog;
  };

 
}
