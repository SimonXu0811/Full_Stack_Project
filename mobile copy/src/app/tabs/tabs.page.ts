import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  private name: string;
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.name = String (params['username']);
    });
  }

}
