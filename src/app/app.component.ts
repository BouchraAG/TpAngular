import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  active_status = 1;
  title = 'TpAngular';
  constructor(private router: Router) { }
  public goto(path: string) {
    this.router.navigate([path])
  }
   openTab = 1;
  toggleTabs($tabNumber: number, path: string){
    this.openTab = $tabNumber;
    this.goto(path)
  }
}
