import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmService } from '../crm.service';
import { Preference } from '../models/Preference.model';

@Component({
  selector: 'app-preference-edit',
  templateUrl: './preference-edit.component.html',
  styleUrls: ['./preference-edit.component.css']
})
export class PreferenceEditComponent implements OnInit {
  preference: Preference = {
    key: '', value: '',

    customerId: 0,
    id: 0
  };
  customerId: number=0;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.paramMap.get('customerId')!;
    const id = +this.route.snapshot.paramMap.get('preferenceId')!;
    if (id) {
      this.crmService.getPreference(this.customerId, id).subscribe(data => {
        this.preference = data;
      });
    }
  }

  save(): void {
    this.crmService.addOrUpdatePreference(this.customerId, this.preference).subscribe(() => {
      this.router.navigate(['/crm/customers', this.customerId, 'preferences']);
    });
  }

}
