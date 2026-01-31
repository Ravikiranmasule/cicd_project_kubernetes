import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Preference } from './models/Preference.model';
import { Feedback } from './models/Feedback.model';
import { Loyalty } from './models/Loyalty.model';
import { Campaign } from './models/Campaign.model';
import { Reward } from './models/Reward.model';
import { RedeemRequest } from './models/RedeemRequest.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class CrmService {
  constructor(private http: HttpClient, private configService: ConfigService) {}

  private getAuthHeaders(): HttpHeaders {
    const token = localStorage.getItem('authToken');
    if (token) {
      return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    } else {
      throw new Error('No authentication token found');
    }
  }

  // Preferences
  getPreferences(customerId: number): Observable<Preference[]> {
    return this.http.get<Preference[]>(`${this.configService.crmEndpoint}/customers/${customerId}/preferences`, {
      headers: this.getAuthHeaders()
    });
  }

  getPreference(customerId: number, preferenceId: number): Observable<Preference> {
    return this.http.get<Preference>(`${this.configService.crmEndpoint}/customers/${customerId}/preferences/${preferenceId}`, {
      headers: this.getAuthHeaders()
    });
  }

  addOrUpdatePreference(customerId: number, preference: Preference): Observable<Preference> {
    return this.http.post<Preference>(`${this.configService.crmEndpoint}/customers/${customerId}/preferences`, preference, {
      headers: this.getAuthHeaders()
    });
  }

  // Feedback
  getFeedback(customerId: number): Observable<Feedback[]> {
    return this.http.get<Feedback[]>(`${this.configService.crmEndpoint}/customers/${customerId}/feedback`, {
      headers: this.getAuthHeaders()
    });
  }

  getFeedbackById(customerId: number, feedbackId: number): Observable<Feedback> {
    return this.http.get<Feedback>(`${this.configService.crmEndpoint}/customers/${customerId}/feedback/${feedbackId}`, {
      headers: this.getAuthHeaders()
    });
  }

  addFeedback(customerId: number, feedback: Feedback): Observable<Feedback> {
    return this.http.post<Feedback>(`${this.configService.crmEndpoint}/customers/${customerId}/feedback`, feedback, {
      headers: this.getAuthHeaders()
    });
  }

  // Loyalty
  getLoyaltyInfo(customerId: number): Observable<Loyalty> {
    return this.http.get<Loyalty>(`${this.configService.crmEndpoint}/customers/${customerId}/loyalty`, {
      headers: this.getAuthHeaders()
    });
  }

  updateLoyaltyPoints(customerId: number, loyalty: Loyalty): Observable<Loyalty> {
    return this.http.post<Loyalty>(`${this.configService.crmEndpoint}/customers/${customerId}/loyalty`, loyalty, {
      headers: this.getAuthHeaders()
    });
  }

  redeemReward(customerId: number, redeemRequest: RedeemRequest): Observable<Reward> {
    return this.http.post<Reward>(`${this.configService.crmEndpoint}/customers/${customerId}/redeem`, redeemRequest, {
      headers: this.getAuthHeaders()
    });
  }

  // Campaigns
  getAllCampaigns(): Observable<Campaign[]> {
    return this.http.get<Campaign[]>(`${this.configService.crmEndpoint}/campaigns`, {
      headers: this.getAuthHeaders()
    });
  }

  getCampaignById(id: number): Observable<Campaign> {
    return this.http.get<Campaign>(`${this.configService.crmEndpoint}/campaigns/${id}`, {
      headers: this.getAuthHeaders()
    });
  }

  createOrUpdateCampaign(campaign: Campaign): Observable<Campaign> {
    if (campaign.id) {
      return this.http.put<Campaign>(`${this.configService.crmEndpoint}/campaigns/${campaign.id}`, campaign, {
        headers: this.getAuthHeaders()
      });
    } else {
      return this.http.post<Campaign>(`${this.configService.crmEndpoint}/campaigns`, campaign, {
        headers: this.getAuthHeaders()
      });
    }
  }

  deleteCampaign(id: number): Observable<void> {
    return this.http.delete<void>(`${this.configService.crmEndpoint}/campaigns/${id}`, {
      headers: this.getAuthHeaders()
    });
  }
}