import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Config {
  useDummy: boolean;
}


@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = new BehaviorSubject<Config>({
    useDummy: false
  });
}
