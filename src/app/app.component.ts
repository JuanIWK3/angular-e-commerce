import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    // console.log(JSON.parse(localStorage.getItem('user')!));
  }
}
