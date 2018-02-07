import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private personalInfo = new BehaviorSubject<any>([]);
  info = this.personalInfo.asObservable();
  constructor() { }

  addInfo(info){
    this.personalInfo.next(info);
  }
}
