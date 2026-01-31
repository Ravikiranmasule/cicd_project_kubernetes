import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../models/InventoryItem.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-dashboard',
  templateUrl: './inventory-dashboard.component.html',
  styleUrls: ['./inventory-dashboard.component.css']
})
export class InventoryDashboardComponent implements OnInit {
  ngOnInit(): void {
  }
  constructor(private authService:AuthService,private router:Router){}

  logout():void{
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
