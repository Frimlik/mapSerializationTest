import { Component, VERSION } from '@angular/core';
import { Store } from '@ngrx/store';
import * as mapActions from '../store/actions';
import { AppState } from '../store/reducers';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  constructor(private store: Store<AppState>) {}

  setMap(): void {
    console.log('set map');
    this.store.dispatch(mapActions.setMap({ index: 1 }));
  }
}
