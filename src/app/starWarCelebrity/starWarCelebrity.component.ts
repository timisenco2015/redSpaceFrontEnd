import { Component} from '@angular/core';
import {PersonService} from "../service/person.Service";
import{Person} from '../entity/person';
import { NgxSpinnerService } from "ngx-spinner";


@Component({
selector: 'app-root',
templateUrl: './starWarCelebrity.component.html',
styleUrls: ['./starWarCelebrity.component.css']
})
export class StarWarCelebrityComponent 
{
  title = 'simple pagination demo';
  person:Person;
  films:[];
  species:[];
  showError:boolean=false;

  constructor(private personService:PersonService,private spinner: NgxSpinnerService)
  {
    
  }

  

  columnFilter(event)
  {
    const charCode = (event.which) ? event.which : event.keyCode;
    
    if ( (charCode < 48 || charCode > 57)) 
    {
      this.showError=true;
      //alert("Please enter value between 0-9");
    }
    else
    {
      this.showError=false;
      this.spinner.show(); 
      this.getPersonDetails(parseInt(event.target.value)); 
    }
  }


  // this method gets data from service(celebrityService.ts is used to get data through http from databse)
  // it also automatic refresh (polling) at every hour
  getPersonDetails(id:number) 
  {
    
    this.personService.getStarWarsCelebrities(id).subscribe(personDetails => 
      {
       
        if(personDetails!=="undefined")
        {
          
          this.person = personDetails
          this.films=this.person.films;
          this.species= this.person.species;
       
          this.spinner.hide();
        }
        
        
      },
      error => 
      {
        this.spinner.hide();
        alert(error.message);
      }
    );
  }

 

}
