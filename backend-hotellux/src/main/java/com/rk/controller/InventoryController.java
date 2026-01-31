package com.rk.controller;

import com.rk.entity.*;
import com.rk.model.InventoryItemDTO;
import com.rk.service.InventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/inventory")
@PreAuthorize("hasRole('INVENTORY')")
public class InventoryController {

    @Autowired
    private InventoryService inventoryService;

    // Inventory Items
    @GetMapping("/items")
    public ResponseEntity<List<InventoryItem>> getAllInventoryItems() {
        return ResponseEntity.ok(inventoryService.getAllInventoryItems());
    }

    @GetMapping("/items/{id}")
    public ResponseEntity<InventoryItem> getInventoryItemById(@PathVariable Long id) {
        InventoryItem item = inventoryService.getInventoryItemById(id);
        return item != null ? ResponseEntity.ok(item) : ResponseEntity.notFound().build();
    }

    @PostMapping("/items")
    public ResponseEntity<InventoryItem> addOrUpdateInventoryItem(@RequestBody InventoryItemDTO item) {
    	System.out.println(item);
        return ResponseEntity.ok(inventoryService.addOrUpdateInventoryItem(item));
    }

    @DeleteMapping("/items/{id}")
    public ResponseEntity<Void> deleteInventoryItem(@PathVariable Long id) {
        inventoryService.deleteInventoryItem(id);
        return ResponseEntity.noContent().build();
    }

    // Suppliers
    @GetMapping("/suppliers")
    public ResponseEntity<List<Supplier>> getAllSuppliers() {
        return ResponseEntity.ok(inventoryService.getAllSuppliers());
    }

    @GetMapping("/suppliers/{id}")
    public ResponseEntity<Supplier> getSupplierById(@PathVariable Long id) {
        Supplier supplier = inventoryService.getSupplierById(id);
        return supplier != null ? ResponseEntity.ok(supplier) : ResponseEntity.notFound().build();
    }

    @PostMapping("/suppliers")
    public ResponseEntity<Supplier> addOrUpdateSupplier(@RequestBody Supplier supplier) {
        return ResponseEntity.ok(inventoryService.addOrUpdateSupplier(supplier));
    }

    @DeleteMapping("/suppliers/{id}")
    public ResponseEntity<Void> deleteSupplier(@PathVariable Long id) {
        inventoryService.deleteSupplier(id);
        return ResponseEntity.noContent().build();
    }

    // Purchase Orders
    @GetMapping("/orders")
    public ResponseEntity<List<PurchaseOrder>> getAllPurchaseOrders() {
        return ResponseEntity.ok(inventoryService.getAllPurchaseOrders());
    }

    @GetMapping("/orders/{id}")
    public ResponseEntity<PurchaseOrder> getPurchaseOrderById(@PathVariable Long id) {
        PurchaseOrder order = inventoryService.getPurchaseOrderById(id);
        return order != null ? ResponseEntity.ok(order) : ResponseEntity.notFound().build();
    }

    @PostMapping("/orders")
    public ResponseEntity<PurchaseOrder> createOrUpdatePurchaseOrder(@RequestBody PurchaseOrder order) {
        return ResponseEntity.ok(inventoryService.createOrUpdatePurchaseOrder(order));
    }

    @DeleteMapping("/orders/{id}")
    public ResponseEntity<Void> deletePurchaseOrder(@PathVariable Long id) {
        inventoryService.deletePurchaseOrder(id);
        return ResponseEntity.noContent().build();
    }
}
