import {Injectable} from '@angular/core';
import {PROPERTIES} from '../shared/countries';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PropertyService {

  findAll() {
    return Observable.create(observer => {
      observer.next(PROPERTIES);
      observer.complete();
    });
  }
}
