import {TestBed} from '@angular/core/testing'
import { HttpClientTestingModule,HttpTestingController } from '@angular/common/http/testing';
import {ApiService} from "../../../service/api.service";
import { APP_CONFIG, AppConfig} from '../../../app.config';
import { environment } from '../../../../environments/environment';
import { Title } from '@angular/platform-browser';


describe('ApiService', ()=>
{
    let apiService:ApiService;
    let httpTestingController: HttpTestingController;
    let api_url: string;
    

    const mockPersonDetails = 
    {
        "name": "Luke Skywalker",
        "height": "172",
        "mass": "77",
        "hairColor": "blond",
        "skinColor": "fair",
        "birthYear": "19BBY",
        "gender": "male",
        "homePlanet": 
        {
            "population": "200000",
            "terrain": "desert",
            "title": "Tatooine"
        },
        "films": 
        [
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
        "species": 
        [
            {
                "name": "Human",
                "average": "180",
                "classification": "mammal",
                "language": "Galactic Basic"
            }
        ]
    }
    
  
    beforeEach(()=>
    {
       
        TestBed.configureTestingModule({providers:[Title, { provide: APP_CONFIG, useValue: AppConfig },ApiService],imports: [ HttpClientTestingModule]})
        httpTestingController = TestBed.get(HttpTestingController);
        apiService = TestBed.get(ApiService);
            
    });
    
    
    afterEach(() =>
    {
        apiService =null;
        httpTestingController.verify();
    });

    
    it('should be created', () => 
    {
        expect(apiService).toBeTruthy();
    });
    

    it('should not immediately connect to the server', () => 
    {
        httpTestingController.expectNone({});
    });

    // test for get person details
    it('get person details',()=>
    {
        
       apiService.getStarWarsCelebrity(environment.getPersonalDetailsUrlTest).subscribe(personDetails => 
        {
            
            expect(personDetails).not.toBe(null);
            expect(personDetails.name).toEqual("Luke Skywalker");
        },
        error => 
        {
            expect(error).not.toBe(null);
        });
       
        const req = httpTestingController.expectOne({ method: 'GET', url: environment.apiUrl + "person.getDetails"});

        expect(req.request.method).toEqual('GET');
    
        req.flush(mockPersonDetails);
    });   

});

