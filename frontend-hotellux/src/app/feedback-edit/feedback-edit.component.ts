import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CrmService } from '../crm.service';
import { Feedback } from '../models/Feedback.model';


@Component({
  selector: 'app-feedback-edit',
  templateUrl: './feedback-edit.component.html',
  styleUrls: ['./feedback-edit.component.css']
})
export class FeedbackEditComponent implements OnInit {
  feedback: Feedback = {
    feedbackText: '', date: new Date(),
    id: 0,
    customerId: 0
  };
  customerId: number=0;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.paramMap.get('customerId')!;
    const id = +this.route.snapshot.paramMap.get('feedbackId')!;
    if (id) {
      this.crmService.getFeedbackById(this.customerId, id).subscribe(data => {
        this.feedback = data;
      });
    }
  }

  save(): void {
    this.crmService.addFeedback(this.customerId, this.feedback).subscribe(() => {
      this.router.navigate(['/crm/customers', this.customerId, 'feedback']);
    });
  }
}
