import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrmService } from '../crm.service';
import { Loyalty } from '../models/Loyalty.model';

@Component({
  selector: 'app-loyalty-details',
  templateUrl: './loyalty-details.component.html',
  styleUrls: ['./loyalty-details.component.css']
})
export class LoyaltyDetailsComponent implements OnInit {

  loyalty: Loyalty | undefined;
  customerId: number=0;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.paramMap.get('customerId')!;
    this.crmService.getLoyaltyInfo(this.customerId).subscribe(data => {
      this.loyalty = data;
    });
  }
}
