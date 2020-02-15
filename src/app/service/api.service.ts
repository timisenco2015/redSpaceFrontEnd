import { Injectable, Injector,Inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError,map } from 'rxjs/operators';
import { APP_CONFIG, AppConfigInterface } from 'src/app/app.config';
import { throwError } from 'rxjs';

@Injectable()
export class ApiService 
{
  api_url: string;

  constructor(
    private injector: Injector,
    private _http: HttpClient,
    @Inject(APP_CONFIG) private config: AppConfigInterface) 
    {
      this.api_url = this.config.GETCELEBRITY_ENDPOINT;
    }
 
  private formatErrors(error: any) 
  {
    
    return throwError(error.error);
  }

 
  // get all celebrities by calling http get method
  getStarWarsCelebrity(path: string): Observable<any> 
  {
   
    return this._http.get(`${this.api_url}${path}`)
      .pipe(catchError(this.formatErrors));
  }
}
