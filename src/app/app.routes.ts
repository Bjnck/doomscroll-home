import { Routes } from '@angular/router';
import {PrivacyComponent} from "./privacy/privacy.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'privacy', component: PrivacyComponent }
];
