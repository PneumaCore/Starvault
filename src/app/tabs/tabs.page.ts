import { Component, EnvironmentInjector, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFilm, faHouse, faTv, faUser } from '@fortawesome/free-solid-svg-icons';
import { IonIcon, IonLabel, IonTabBar, IonTabButton, IonTabs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [FontAwesomeModule, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsPage {
  public environmentInjector = inject(EnvironmentInjector);

  faHouse = faHouse;
  faFilm = faFilm;
  faTv = faTv;
  faUser = faUser;

  constructor() { }
}
