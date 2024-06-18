import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Observable, fromEvent, map, merge, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  isConnectionOnline$: Observable<boolean>;

  constructor() {
    this.isConnectionOnline$ = merge(
      fromEvent(window, 'load').pipe(map(() => true)),
      fromEvent(window, 'online').pipe(map(() => true)),
      fromEvent(window, 'offline').pipe(map(() => false))
    ).pipe(
      tap(res => {
        console.log("Status: ", res);
      })
    )
  }
}
