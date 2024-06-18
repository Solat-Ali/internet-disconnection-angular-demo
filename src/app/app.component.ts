import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NetworkStatusService } from './core/services/network-status.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  networkService= inject(NetworkStatusService);
  isConnectionOnline$ = this.networkService.monitorNetworkConnection();
}
