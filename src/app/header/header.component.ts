import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../state';
import { Store } from '@ngrx/store';
import { selectCount } from '../couterr/selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
count$: Observable<number> | undefined;
constructor(private store:Store<AppState>){
  this.count$ = this.store.select(selectCount);
}

}
