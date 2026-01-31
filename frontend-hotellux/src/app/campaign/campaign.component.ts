import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { Campaign } from '../models/Campaign.model';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  campaigns: Campaign[] = [];

  constructor(private crmService: CrmService) {}

  ngOnInit(): void {
    this.crmService.getAllCampaigns().subscribe(data => {
      this.campaigns = data;
    });
  }

}
