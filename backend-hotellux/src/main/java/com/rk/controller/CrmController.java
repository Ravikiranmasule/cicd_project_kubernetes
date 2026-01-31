package com.rk.controller;

import com.rk.entity.*;
import com.rk.service.CrmService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/crm")
@PreAuthorize("hasRole('PR')")
public class CrmController {

    @Autowired
    private CrmService crmService;

    // Guest Preferences
    @GetMapping("/customers/{id}/preferences")
    public ResponseEntity<List<Preference>> getGuestPreferences(@PathVariable Long id) {
        return ResponseEntity.ok(crmService.getPreferencesByCustomerId(id));
    }

    @PostMapping("/customers/{id}/preferences")
    public ResponseEntity<Preference> addPreference(@PathVariable Long id, @RequestBody Preference preference) {
        return ResponseEntity.ok(crmService.addOrUpdatePreference(id, preference));
    }

    // Feedback
    @GetMapping("/customers/{id}/feedback")
    public ResponseEntity<List<Feedback>> getFeedback(@PathVariable Long id) {
        return ResponseEntity.ok(crmService.getFeedbackByCustomerId(id));
    }

    @PostMapping("/customers/{id}/feedback")
    public ResponseEntity<Feedback> addFeedback(@PathVariable Long id, @RequestBody Feedback feedback) {
        return ResponseEntity.ok(crmService.addFeedback(id, feedback));
    }

    // Loyalty Programs
    @GetMapping("/customers/{id}/loyalty")
    public ResponseEntity<Loyalty> getLoyaltyInfo(@PathVariable Long id) {
        return ResponseEntity.ok(crmService.getLoyaltyInfo(id));
    }

    @PostMapping("/customers/{id}/loyalty")
    public ResponseEntity<Loyalty> updateLoyaltyPoints(@PathVariable Long id, @RequestBody Loyalty loyalty) {
        return ResponseEntity.ok(crmService.updateLoyaltyPoints(id, loyalty));
    }

    @PostMapping("/customers/{id}/redeem")
    public ResponseEntity<Reward> redeemReward(@PathVariable Long id, @RequestBody RedeemRequest redeemRequest) {
        return ResponseEntity.ok(crmService.redeemReward(id, redeemRequest));
    }

    // Marketing Campaigns
    @GetMapping("/campaigns")
    public ResponseEntity<List<Campaign>> getAllCampaigns() {
        return ResponseEntity.ok(crmService.getAllCampaigns());
    }

    @GetMapping("/campaigns/{id}")
    public ResponseEntity<Campaign> getCampaignById(@PathVariable Long id) {
        Optional<Campaign> campaign = Optional.ofNullable(crmService.getCampaignById(id));
        return campaign.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/campaigns")
    public ResponseEntity<Campaign> createOrUpdateCampaign(@RequestBody Campaign campaign) {
        return ResponseEntity.ok(crmService.createOrUpdateCampaign(campaign));
    }

    @DeleteMapping("/campaigns/{id}")
    public ResponseEntity<Void> deleteCampaign(@PathVariable Long id) {
        crmService.deleteCampaign(id);
        return ResponseEntity.noContent().build();
    }
}
