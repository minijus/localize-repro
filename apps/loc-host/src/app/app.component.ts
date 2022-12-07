import { Component, Inject, LOCALE_ID } from '@angular/core';

@Component({
  selector: 'localize-repro-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'loc-host';
  constructor(@Inject(LOCALE_ID) public locale: string) {}
}
