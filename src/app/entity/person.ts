export class Person
{
    name:string;
    height:string;
    mass:string;
    hairColor:string;
    skinColor:string;
    gender:string;
    birthYear:string;
    homePlanet:any;
    species:any;
    films:any;

    constructor()
    {
    
    }

    setName(name:string)
    {
        this.name=name;
    }

    getName()
    {
        return this.name;
    }

    setHeight(height:string)
    {
        this.height = height;
    }

    getHeight()
    {
        return this.height;
    }

    setMass(mass:string)
    {
        this.mass = mass;
    }

    getMass()
    {
        return this.mass;
    }


    setHairColor(hairColor:string)
    {
        this.hairColor = hairColor;
    }

    getHairColor()
    {
        return this.hairColor;
    }
  
    setSkinColor(skinColor:string)
    {
        this.skinColor = skinColor;
    }

    getSkinColor()
    {
        return this.skinColor;
    }

    setGender(gender:string)
    {
        this.gender = gender;
    }

    getGender()
    {
        return this.gender;
    }


  setBirthYear(birthYear:string)
  {
      this.birthYear = birthYear;
  }

  getBirthYear()
  {
      return this.birthYear;
  }

  setHomePlanet(homePlanet:any)
  {
    this.homePlanet = homePlanet;
  }

  getHomePlanet()
  {
      return this.homePlanet;
  }

  setSpecies(species:any)
  {
    this.species = species;
  }

  getSpecies()
  {
      return this.species;
  }

  setFilms(films:any)
  {
    this.films = films;
  }

  getFilms()
  {
      return this.films;
  }
 
}
