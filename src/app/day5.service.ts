import { Injectable } from '@angular/core';
import { data } from 'src/assets/data';

@Injectable({
  providedIn: 'root'
})
export class Day5Service {

  constructor() { }

  giveData()
  {
    return data;
  }
}
