import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrmService } from '../crm.service';
import { Campaign } from '../models/Campaign.model';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.css']
})
export class CampaignDetailsComponent implements OnInit {

  campaign: Campaign | undefined;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.crmService.getCampaignById(id).subscribe(data => {
      this.campaign = data;
    });
  }

}
