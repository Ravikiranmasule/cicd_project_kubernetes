import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotelfunctions',
  templateUrl: './hotelfunctions.component.html',
  styleUrls: ['./hotelfunctions.component.css']
})
export class HotelfunctionsComponent implements OnInit {
  authService: any;
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
