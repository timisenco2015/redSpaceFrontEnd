import{Person} from '../../../entity/person';


describe('Entity Person', () => 
{
    let person: Person;
  
    // test to check if class can be instantiated
    it('should create', async() => 
    {
      person = new Person();
      expect(person).toBeTruthy();
    }) 

    // test all class methods (sets and gets)
    it('should test setter and getter of Person Entity', async() => 
    {
      person = new Person();

      person.setName("John");
      expect(person.getName()).toEqual("John");

      person.setHeight("172");
      expect(person.getHeight()).toEqual("172");
        
      person.setMass("77");
      expect(person.getMass()).toEqual("77"); 

      person.setHairColor("blond");
      expect(person.getHairColor()).toEqual("blond");
      
      person.setSkinColor("fair");
      expect(person.getSkinColor()).toEqual("fair"); 

      person.setGender("male");
      expect(person.getGender()).toEqual("male"); 

      person.setBirthYear("19BBY");
      expect(person.getBirthYear()).toEqual("19BBY"); 

      var homePlanet = 
      {
        "population": "200000",
        "terrain": "desert",
        "title": "Tatooine"
      };

      person.setHomePlanet(homePlanet);
      expect(person.getHomePlanet()).toEqual(homePlanet); 

      var species= 
      [
        {
            "name": "Human",
            "average": "180",
            "classification": "mammal",
            "language": "Galactic Basic"
        }
      ];

      person.setSpecies(species);
      expect(person.getSpecies()[0]).toEqual(species[0]); 

      var films= 
      [
        {
            "title": "The Empire Strikes Back",
            "director": "Irvin Kershner",
            "producers": "Gary Kurtz, Rick McCallum",
            "releaseDate": "1980-05-17"
        }
      ];

      person.setFilms(films);
      expect(person.getFilms()[0]).toEqual(films[0]); 


    });

   


});
  