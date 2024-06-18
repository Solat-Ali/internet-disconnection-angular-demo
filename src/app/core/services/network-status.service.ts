import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { fromEvent, map, merge, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NetworkStatusService {
    router = inject(Router);

    monitorNetworkConnection() {
        return merge(
            fromEvent(window, 'load').pipe(map(() => true)),
            fromEvent(window, 'online').pipe(map(() => true)),
            fromEvent(window, 'offline').pipe(map(() => false))
        ).pipe(
            tap(connected => {
                console.log("Network connection status: ", connected);

                // TODO: Add any additional logic which will be executed if connection is lost
                // if(!connected){ ... }
            })
        )
    }
}