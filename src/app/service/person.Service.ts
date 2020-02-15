import {Injectable} from '@angular/core';
import{Person} from '../entity/person';
import {HttpClient} from '@angular/common/http';
import {Observable, EMPTY,throwError} from 'rxjs';
import { catchError, map,publishReplay, refCount,isEmpty} from 'rxjs/operators';
import { ApiService } from './api.service';
import { environment } from '../../environments/environment';

@Injectable()
export class PersonService
{
  private _person:Person;
  private _http: HttpClient;
  _apiService: ApiService;
  private static allCelebritiesList:any;

  constructor(private http: HttpClient,_apiService: ApiService)
  {
    this._http=http;
    this._apiService = _apiService;
  }


  // get all celebrities from database
  // also does caching of data
  getStarWarsCelebrities(id:number): Observable<any>
  {

    return  this._apiService.getStarWarsCelebrity(environment.getPersonalDetailsUrl+id).pipe
    (
      
      map((response) => 
      { 
        if(response!=undefined)
        {
          return response.data;
        }
        else
        {
          return throwError("undefined");
        }
      }),
     catchError(this.handleError)
    ); // to handle error

  }

  handleError(error) 
  {
   
    let errorMessage = '';
    
    if (error.error instanceof ErrorEvent)
    {
      
        errorMessage = `${error.error.message}`;
    } 
    else 
    {
      
        // server-side error
        errorMessage = `${error.message}`;
    }
   
    return throwError(errorMessage);
  }
 
}