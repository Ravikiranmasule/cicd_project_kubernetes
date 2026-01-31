import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmService } from '../crm.service';
import { Campaign } from '../models/Campaign.model';

@Component({
  selector: 'app-campaign-edit',
  templateUrl: './campaign-edit.component.html',
  styleUrls: ['./campaign-edit.component.css']
})
export class CampaignEditComponent implements OnInit {
  campaign: Campaign = {
    title: '', description: '', startDate: new Date(), endDate: new Date(),
    id: 0
  };
  isEdit = false;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    if (id) {
      this.isEdit = true;
      this.crmService.getCampaignById(id).subscribe(data => {
        this.campaign = data;
      });
    }
  }

  save(): void {
    this.crmService.createOrUpdateCampaign(this.campaign).subscribe(() => {
      this.router.navigate(['/crm/campaigns']);
    });
  }

}
