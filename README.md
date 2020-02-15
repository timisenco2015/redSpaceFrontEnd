# redSpaceFrontEnd
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.20.

## Description

A simple web page that fectches list of all celebrities from the database and display them to users using pagination. Users are allow to search by Firstname, Lastname and profession. The images for the celebrities are stored on AWS S3Bucket. It also implemented caching using rxjs mehthods. It is a well tested web application.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Build Code Structure
```bash
| -- src
  |
  | -- app 
  |
    | -- starWarCelebrity
    | 
      | -- starWarCelebrity.component.css
      |
      | -- starWarCelebrity.component.html
      |
      | -- starWarCelebrity.component
    |
    | -- entity
    |
      | -- person
      |
    |
    | -- service
    |
      | -- api.service.ts
      |
      | -- person.Service.ts
    |  
    | -- test
    |
      |-- testFiles
      |
        |-- starWarCelebrityTest
        |
          |-- mockStarWarCelebrityService.ts
          |
          |-- starWarCelebrityComponent.spec.ts
        |
        | -- entityTest 
        |
          | --  personTest.spec.ts
        |
        | -- serviceTest
        |
          |-- apiServiceTest.spec.ts
          |
          | -- personServiceTest.spec.ts
          |
          | -- mockAPIService.ts
        |
        | -- integrationTest
        |
          | -- starWarCelebritIntegration.spec.ts
        |
      |
    |
  |
  ```

## Code details
```bash
  - apiService (service folder): has a method called getAllCelebrities() with parameter. This method calls http get method. API Url is passed to the http get method from app.config.ts using @Inject(). http get method fecthes data from the server and return an Observable
  
  
  - CelebrityService (service folder) 
  
      -- methods are:
      
          -- getStarWarsCelebrity(): 
            -- get all star wars celebrity details by calling getStarWarsCelebrity method in APISerice
            -- accepts Id as parameter
            -- returns Observable
          
   
    - ApiService  (service folder)
   
        -- getStarWarsCelebrity(): 
            -- tget all star wars celebrity details calling http get method. 
            -- returns Observable
            -- accept path as parameter
        
        
  - person (entity folder): entity or class for celebrity (person) details
  
      -- methods are: setName(name:string), getName(), setHeight(height:string), getHeight(), setMass(mass:string), getMass(),      
                      setHairColor(hairColor:string), getHairColor(), setSkinColor(skinColor:string), getSkinColor(), 
                       setGender(gender:string), getGender(), setBirthYear(birthYear:string), getBirthYear(),       
                       setHomePlanet(homePlanet:any), getHomePlanet(), setSpecies(species:any), getSpecies(),       
                       setFilms(films:any), getFilms()
  
  
  - component (starWarCelebrity): View and Controll of the angular application
    
    - starWarCelebrity.component.ts file: controller of the angular web applications. fecthes data from database through Person     
        Service class, process the data and sent needed data to the view for display
    
    - starWarCelebrity.component.html: the view
    
    - starWarCelebrity.component.css: css file
  
  - Test Files
    
    - celebrityTest
    
    - entityTest
    
    - serviceTest
    
    Well written test files using Jasmine and Karma
    
      
      
      
## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
