package com.rk.service;

import com.rk.entity.*;
import com.rk.model.InventoryItemDTO;

import java.util.List;

public interface InventoryService {
    // Inventory Items
    List<InventoryItem> getAllInventoryItems();
    InventoryItem getInventoryItemById(Long id);
    InventoryItem addOrUpdateInventoryItem(InventoryItemDTO item);
    
    void deleteInventoryItem(Long id);

    // Suppliers
    List<Supplier> getAllSuppliers();
    Supplier getSupplierById(Long id);
    Supplier addOrUpdateSupplier(Supplier supplier);
    void deleteSupplier(Long id);

    // Purchase Orders
    List<PurchaseOrder> getAllPurchaseOrders();
    PurchaseOrder getPurchaseOrderById(Long id);
    PurchaseOrder createOrUpdatePurchaseOrder(PurchaseOrder order);
    void deletePurchaseOrder(Long id);
}
