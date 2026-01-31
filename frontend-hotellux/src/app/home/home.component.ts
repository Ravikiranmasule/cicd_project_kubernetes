import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private router: Router ,
    private authService: AuthService ) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.authService.logout(); // Clear localStorage and other logout operations
    this.router.navigate(['/login']); // Redirect to login page
  }
}
