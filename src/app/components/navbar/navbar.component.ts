import { Component } from '@angular/core';
import { BtnComponent } from "../btn/btn.component";
import { OverlayModule } from '@angular/cdk/overlay';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee, faBell, faClock, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [BtnComponent, OverlayModule,FontAwesomeModule],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  isOpen = false
  faBell:  any = faBell;
  faCoffee:  any = faCoffee;
  faClock:  any = faClock;
  faBars:  any = faBars;
}
