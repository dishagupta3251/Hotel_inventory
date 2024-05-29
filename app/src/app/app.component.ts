import { Component,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { ContainerComponent } from './container/container.component';
import { EmployeeComponent } from "./employee/employee.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, RoomsComponent, ContainerComponent, EmployeeComponent]
})
export class AppComponent {
  title = 'app';
}
