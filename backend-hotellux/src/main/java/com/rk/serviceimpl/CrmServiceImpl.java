package com.rk.serviceimpl;

import com.rk.entity.*;
import com.rk.repository.*;
import com.rk.service.CrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CrmServiceImpl implements CrmService {

    @Autowired
    private PreferenceRepository preferenceRepository;

    @Autowired
    private FeedbackRepository feedbackRepository;

    @Autowired
    private LoyaltyRepository loyaltyRepository;

    @Autowired
    private CampaignRepository campaignRepository;

    // Preferences
    @Override
    public List<Preference> getPreferencesByCustomerId(Long customerId) {
        return preferenceRepository.findByCustomerId(customerId);
    }

    @Override
    public Preference addOrUpdatePreference(Long customerId, Preference preference) {
        preference.setCustomerId(customerId);
        return preferenceRepository.save(preference);
    }

    // Feedback
    @Override
    public List<Feedback> getFeedbackByCustomerId(Long customerId) {
        return feedbackRepository.findByCustomerId(customerId);
    }

    @Override
    public Feedback addFeedback(Long customerId, Feedback feedback) {
        feedback.setCustomerId(customerId);
        return feedbackRepository.save(feedback);
    }

    // Loyalty
    @Override
    public Loyalty getLoyaltyInfo(Long customerId) {
        return loyaltyRepository.findByCustomerId(customerId);
    }

    @Override
    public Loyalty updateLoyaltyPoints(Long customerId, Loyalty loyalty) {
        Loyalty existingLoyalty = loyaltyRepository.findByCustomerId(customerId);
        if (existingLoyalty != null) {
            existingLoyalty.setPoints(loyalty.getPoints());
            return loyaltyRepository.save(existingLoyalty);
        } else {
            loyalty.setCustomerId(customerId);
            return loyaltyRepository.save(loyalty);
        }
    }

    @Override
    public Reward redeemReward(Long customerId, RedeemRequest redeemRequest) {
        // Implement logic to redeem a reward
        return new Reward();
    }

    // Campaigns
    @Override
    public List<Campaign> getAllCampaigns() {
        return campaignRepository.findAll();
    }

    @Override
    public Campaign getCampaignById(Long id) {
        Optional<Campaign> campaign = campaignRepository.findById(id);
        return campaign.orElse(null);
    }

    @Override
    public Campaign createOrUpdateCampaign(Campaign campaign) {
        return campaignRepository.save(campaign);
    }

    @Override
    public void deleteCampaign(Long id) {
        campaignRepository.deleteById(id);
    }
}
