import { Component, OnInit } from '@angular/core';
import { CrmService } from '../crm.service';
import { ActivatedRoute } from '@angular/router';
import { Preference } from '../models/Preference.model';

@Component({
  selector: 'app-preference',
  templateUrl: './preference.component.html',
  styleUrls: ['./preference.component.css']
})
export class PreferenceComponent implements OnInit {

  preferences: Preference[] = [];
  customerId: number | undefined;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.paramMap.get('customerId')!;
    this.crmService.getPreferences(this.customerId).subscribe(data => {
      this.preferences = data;
    });
  }

}
