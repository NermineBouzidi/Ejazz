import { Routes } from '@angular/router';
import { NationalIdentityCardComponent } from './Components/national-identity-card/national-identity-card.component';

export const routes: Routes = [
    { path: '**', component: NationalIdentityCardComponent }

];
