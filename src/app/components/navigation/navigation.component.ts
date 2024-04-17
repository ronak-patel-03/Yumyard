import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { faSearch, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FontAwesomeModule,],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  constructor(){}
  faSearch = faSearch;
  faBell = faBell;
  faUser = faUser;
}
