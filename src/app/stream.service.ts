import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StreamService {
  private name: BehaviorSubject<string> = new BehaviorSubject('');

  setName(val?: string): void {
    this.name.next(val);
  }

  getName() {
    return this.name.asObservable();
  }
}
