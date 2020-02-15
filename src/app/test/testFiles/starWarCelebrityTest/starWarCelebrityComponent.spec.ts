
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { StarWarCelebrityComponent } from '../../../starWarCelebrity/starWarCelebrity.component';
import { HttpClientTestingModule, } from '@angular/common/http/testing';
import { APP_CONFIG, AppConfig } from '../../../app.config';
import { Title } from '@angular/platform-browser';
import { MockCelebrityService } from "./mockStarWarCelebrityService"
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import {PersonService} from "../../../service/person.Service";

describe('CelebrityComponent', () => 
{
  var component: StarWarCelebrityComponent;
  let personService: PersonService;

  beforeEach(async(() => 
  {
    TestBed.configureTestingModule(
    {
      declarations: [ StarWarCelebrityComponent ],
      providers:[  {provide: PersonService, useClass: MockCelebrityService}],

      imports: 
      [
        BrowserModule,
        NgxPaginationModule,
        NgxSpinnerModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        HttpClientJsonpModule,
        FormsModule
       
      ]
    }).overrideComponent(StarWarCelebrityComponent, 
      {
        set: 
        {
          providers: 
          [
            { provide: PersonService, useClass: MockCelebrityService }
          ]
        }
      }).compileComponents();
  }));


  // test if StarWarCelebrityComponent has been called
  it('should create the CelebrityComponent', function () 
  {
    // make the call to this function
    component = TestBed.createComponent(StarWarCelebrityComponent).componentInstance;
    //component = app.debugElement.componentInstance;
    expect(component).toBeTruthy();;   
  });
  

  // get person details
  it('expects getPersonDetails() to have been called', function () 
  {
    // make the call to this function
    component = TestBed.createComponent(StarWarCelebrityComponent).componentInstance;
    spyOn(component, 'getPersonDetails').withArgs(1);

    // make the call to this function
    component.getPersonDetails(1);

    // Check internal function
    expect(component.getPersonDetails).toHaveBeenCalled();
  });



  // test the ngOnit
  it('expects columnFilter() to have been called', function () 
  {
    // make the call to this function
    const event = { target: { value: 2 }};
    component = TestBed.createComponent(StarWarCelebrityComponent).componentInstance;
    
    spyOn(component, 'columnFilter').withArgs(event);
 
  
     //make the call to this function
    component.columnFilter(event);

    // Check internal function
    expect(component.columnFilter).toHaveBeenCalled();
  });

});

