import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faWaveSquare, faBox, faClock, faAngleUp, faAngleDown, faHeart, faBorderAll, faUsers, faGear } from '@fortawesome/free-solid-svg-icons';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { CdkAccordionModule } from '@angular/cdk/accordion';

@Component({
  selector: 'app-boards',
  standalone: true,
  imports: [NavbarComponent, FontAwesomeModule, CdkAccordionModule, ],
  templateUrl: './boards.component.html'
})
export class BoardsComponent {
  faWaveSquare: any = faWaveSquare;
  faBox: any = faBox;
  faTrello: any = faTrello;
  faClock: any = faClock;
  faAngleUp: any = faAngleUp;
  faAngleDown: any = faAngleDown;
  faHeart: any = faHeart;
  faBorderAll: any = faBorderAll;
  faUsers: any = faUsers;
  faGear: any = faGear;
  items = [
    {
      label: 'item 1',
      items: [
        { labels: 'sub-items-1' },
        { labels: 'sub-items-2' },

      ]
    },
    {
      label: 'item 2',
      items: [
        { labels: 'sub-items-1' },
      ]
    },
    {
      label: 'item 3',
      items: [
        { labels: 'sub-items-3' },
        { labels: 'sub-items-4' },
        { labels: 'sub-items-5' },
      ]
    },
  ]

}
