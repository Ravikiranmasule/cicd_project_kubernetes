package com.rk.serviceimpl;

import com.rk.entity.*;
import com.rk.model.InventoryItemDTO;
import com.rk.repository.*;
import com.rk.service.InventoryService;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InventoryServiceImpl implements InventoryService {

    @Autowired
    private InventoryItemRepository inventoryItemRepository;

    @Autowired
    private SupplierRepository supplierRepository;

    @Autowired
    private PurchaseOrderRepository purchaseOrderRepository;

    // Inventory Items
    @Override
    public List<InventoryItem> getAllInventoryItems() {
        return inventoryItemRepository.findAll();
    }

    @Override
    public InventoryItem getInventoryItemById(Long id) {
        Optional<InventoryItem> item = inventoryItemRepository.findById(id);
        return item.orElse(null);
    }

    @Override
    public InventoryItem addOrUpdateInventoryItem(InventoryItemDTO item) {
    	System.out.println(item.toString());
    	InventoryItem i=new InventoryItem();
    	Supplier s=new Supplier();
    	Long supplier_id = item.getSupplier_id();
    	Optional<Supplier> byId = supplierRepository.findById(supplier_id);
    	Supplier supplier = byId.get();
   
    	i.setSupplier(supplier);
    	BeanUtils.copyProperties(item, i);
    	System.out.println(i);
        return inventoryItemRepository.save(i);
    }

    @Override
    public void deleteInventoryItem(Long id) {
        inventoryItemRepository.deleteById(id);
    }

    // Suppliers
    @Override
    public List<Supplier> getAllSuppliers() {
        return supplierRepository.findAll();
    }

    @Override
    public Supplier getSupplierById(Long id) {
        Optional<Supplier> supplier = supplierRepository.findById(id);
        return supplier.orElse(null);
    }

    @Override
    public Supplier addOrUpdateSupplier(Supplier supplier) {
        return supplierRepository.save(supplier);
    }

    @Override
    public void deleteSupplier(Long id) {
        supplierRepository.deleteById(id);
    }

    // Purchase Orders
    @Override
    public List<PurchaseOrder> getAllPurchaseOrders() {
        return purchaseOrderRepository.findAll();
    }

    @Override
    public PurchaseOrder getPurchaseOrderById(Long id) {
        Optional<PurchaseOrder> order = purchaseOrderRepository.findById(id);
        return order.orElse(null);
    }

    @Override
    public PurchaseOrder createOrUpdatePurchaseOrder(PurchaseOrder order) {
        return purchaseOrderRepository.save(order);
    }

    @Override
    public void deletePurchaseOrder(Long id) {
        purchaseOrderRepository.deleteById(id);
    }
}
