import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CrmService } from '../crm.service';
import { Feedback } from '../models/Feedback.model';

@Component({
  selector: 'app-feedback-details',
  templateUrl: './feedback-details.component.html',
  styleUrls: ['./feedback-details.component.css']
})
export class FeedbackDetailsComponent implements OnInit {

  feedback: Feedback | undefined;
  customerId: number | undefined;

  constructor(
    private crmService: CrmService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.customerId = +this.route.snapshot.paramMap.get('customerId')!;
    const id = +this.route.snapshot.paramMap.get('feedbackId')!;
    this.crmService.getFeedbackById(this.customerId, id).subscribe(data => {
      this.feedback = data;
    });
  }

}
