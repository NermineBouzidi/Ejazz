import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShortVacationRequestComponent } from './Components/short-vacation-request/short-vacation-request.component';
import { NationalIdentityCardComponent } from "./Components/national-identity-card/national-identity-card.component";
import { SidebarComponent } from './Components/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ShortVacationRequestComponent, NationalIdentityCardComponent,SidebarComponent],
  template: `
    <div class="app-container">
      <app-sidebar></app-sidebar>
      <div class="content">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    .app-container {
      display: flex;
    }

    .content {
      margin-left: 250px;
      padding: 20px;
      width: calc(100% - 250px);
    }
  `]
})
export class AppComponent {
  title = 'ejaz';
}
