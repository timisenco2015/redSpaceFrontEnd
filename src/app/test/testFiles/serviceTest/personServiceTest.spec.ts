
import {TestBed,fakeAsync,tick} from '@angular/core/testing'
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ApiService } from "../../../service/api.service";
import {MockAPIService} from "./mockAPIService";
import{PersonService} from "../../../service/person.Service";
import { map} from 'rxjs/operators';
import { Observable } from 'rxjs';

describe('PersonServiceTest', ()=>
{
  let personService: PersonService;
  
  var originalTimeout;
  afterEach(() =>
  {
    personService=null;
  });

  
  beforeEach(()=>
  {
    TestBed.configureTestingModule({providers:[ { provide: ApiService, useClass: MockAPIService},PersonService],imports: [ HttpClientTestingModule]}).compileComponents();
    personService = TestBed.get(PersonService);
    
  });



  it('should test for getStarWarsCelebrities() method in personService', () => 
  {
  
    expect(personService.getStarWarsCelebrities(1)).toBeTruthy();
  });

  

});













   