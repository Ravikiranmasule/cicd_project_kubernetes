import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrmService } from '../crm.service';
import { Preference } from '../models/Preference.model';

@Component({
  selector: 'app-preference-details',
  templateUrl: './preference-details.component.html',
  styleUrls: ['./preference-details.component.css']
})
export class PreferenceDetailsComponent implements OnInit {

  preference: Preference | undefined;
  customerId: number | undefined;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.paramMap.get('customerId')!;
    const id = +this.route.snapshot.paramMap.get('preferenceId')!;
    this.crmService.getPreference(this.customerId, id).subscribe(data => {
      this.preference = data;
    });
  }

}
