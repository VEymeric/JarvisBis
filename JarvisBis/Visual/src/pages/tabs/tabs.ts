import { Component } from '@angular/core';

import { HomePage } from '../Home/Home';
import { TaskPage } from '../Task/Task';
import { AgendaPage } from '../Agenda/Agenda';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = AgendaPage;
  tab2Root = HomePage;
  tab3Root = TaskPage;

  constructor() {

  }
}
