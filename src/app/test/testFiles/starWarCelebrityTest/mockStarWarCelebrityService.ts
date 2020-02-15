

import {Observable, of,EMPTY} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class MockCelebrityService {

   // private celebritiesList:Celebrity[]=[];
    private celebrity;

    person = {
      "id": 1,
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hairColor": "blond",
      "skinColor": "fair",
      "birthYear": "19BBY",
      "gender": "male",
      "homePlanet": {
        "population": "200000",
        "terrain": "desert",
        "title": "Tatooine"
      },
      "films": [
        {
          "title": "The Empire Strikes Back",
          "director": "Irvin Kershner",
          "producers": "Gary Kurtz, Rick McCallum",
          "releaseDate": "1980-05-17"
        },
        {
          "title": "Revenge of the Sith",
          "director": "George Lucas",
          "producers": "Rick McCallum",
          "releaseDate": "2005-05-19"
        },
        {
          "title": "Return of the Jedi",
          "director": "Richard Marquand",
          "producers": "Howard G. Kazanjian, George Lucas, Rick McCallum",
          "releaseDate": "1983-05-25"
        },
        {
          "title": "A New Hope",
          "director": "George Lucas",
          "producers": "Gary Kurtz, Rick McCallum",
          "releaseDate": "1977-05-25"
        },
        {
          "title": "The Force Awakens",
          "director": "J. J. Abrams",
          "producers": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
          "releaseDate": "2015-12-11"
        }
      ],
      "species": [
        {
          "name": "Human",
          "average": "180",
          "classification": "mammal",
          "language": "Galactic Basic"
        }
      ]
    }


  constructor()
  {
      
  }

  
 


  // get all celebrities
  getCelebrities(): Observable<any>
  {

    return of(this.person)
    .pipe
      (
        map((response) => 
      {
        return response;
      }),
      catchError(this.handleError)); 
  
  }


  private handleError(error: Response) 
  {
    console.error(error)
    return Observable.throw(error|| "Server error");
  }

}