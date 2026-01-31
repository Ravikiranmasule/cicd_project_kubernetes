import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crm',
  templateUrl: './crm.component.html',
  styleUrls: ['./crm.component.css']
})
export class CrmComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private authService:AuthService,private router:Router){}

  logout():void{
    this.authService.logout();
    this.router.navigate(['/']);
  }

}
