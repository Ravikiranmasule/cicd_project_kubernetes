package com.rk.service;

import com.rk.entity.*;

import java.util.List;

public interface CrmService {
    // Preferences
    List<Preference> getPreferencesByCustomerId(Long customerId);
    Preference addOrUpdatePreference(Long customerId, Preference preference);

    // Feedback
    List<Feedback> getFeedbackByCustomerId(Long customerId);
    Feedback addFeedback(Long customerId, Feedback feedback);

    // Loyalty
    Loyalty getLoyaltyInfo(Long customerId);
    Loyalty updateLoyaltyPoints(Long customerId, Loyalty loyalty);
    Reward redeemReward(Long customerId, RedeemRequest redeemRequest);

    // Campaigns
    List<Campaign> getAllCampaigns();
    Campaign getCampaignById(Long id);
    Campaign createOrUpdateCampaign(Campaign campaign);
    void deleteCampaign(Long id);
}
