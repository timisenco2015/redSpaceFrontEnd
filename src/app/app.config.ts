import { InjectionToken } from '@angular/core';

export interface AppConfigInterface {
  GETCELEBRITY_ENDPOINT: string;
 
}

export const APP_CONFIG = new InjectionToken('app.config');
export const AppConfig: AppConfigInterface = {
 
  GETCELEBRITY_ENDPOINT: 'http://localhost:1388/',
    //GETCELEBRITY_ENDPOINT: 'http://localhost:3004/'
    
  
};