import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../app/login/login.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { AuthGuard } from './auth.guard';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { HoteleditComponent } from './hoteledit/hoteledit.component';


import { RegisterComponent } from './register/register.component';
import { SecurityComponent } from './security/security.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { ChefComponent } from './chef/chef.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { RegisterhotelComponent } from './registerhotel/registerhotel.component';
import { RegisterhotelchainComponent } from './registerhotelchain/registerhotelchain.component';
import { RegisterhotelbrandComponent } from './registerhotelbrand/registerhotelbrand.component';
import { HotelchainComponent } from './hotelchain/hotelchain.component';
import { HotelchaineditComponent } from './hotelchainedit/hotelchainedit.component';
import { HotelbrandComponent } from './hotelbrand/hotelbrand.component';
import { HotelbrandeditComponent } from './hotelbrandedit/hotelbrandedit.component';
import { HotelfunctionsComponent } from './hotelfunctions/hotelfunctions.component';
import { RoomEditComponent } from './room-edit/room-edit.component';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RegisterroomComponent } from './registerroom/registerroom.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';
import { RegisterbookingComponent } from './registerbooking/registerbooking.component';
import { CrmComponent } from './crm/crm.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FeedbackEditComponent } from './feedback-edit/feedback-edit.component';
import { LoyaltyDetailsComponent } from './loyalty-details/loyalty-details.component';
import { PreferenceComponent } from './preference/preference.component';
import { PreferenceDetailsComponent } from './preference-details/preference-details.component';
import { PreferenceEditComponent } from './preference-edit/preference-edit.component';
import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryitemsComponent } from './inventoryitems/inventoryitems.component';
import { InventoryitemDetailsComponent } from './inventoryitem-details/inventoryitem-details.component';
import { InventoryitemEditComponent } from './inventoryitem-edit/inventoryitem-edit.component';
import { SupplierComponent } from './supplier/supplier.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PurchaseOrderDetailsComponent } from './purchase-order-details/purchase-order-details.component';
import { PurchaseOrderEditComponent } from './purchase-order-edit/purchase-order-edit.component';
import { RegisterInventoryItemComponent } from './register-inventory-item/register-inventory-item.component';
import { RegisterPurchaseOrderComponent } from './register-purchase-order/register-purchase-order.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { MaintenanceRegisterComponent } from './maintenance-register/maintenance-register.component';
import { MaintenanceEditComponent } from './maintenance-edit/maintenance-edit.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';
import { StaffDashBoardComponent } from './staff-dash-board/staff-dash-board.component';
import { StaffDashDetailsComponent } from './staff-dash-details/staff-dash-details.component';
import { StaffDashEditComponent } from './staff-dash-edit/staff-dash-edit.component';
import { StaffDashRegisterComponent } from './staff-dash-register/staff-dash-register.component';
import { GuestRoomInfoComponent } from './guest-room-info/guest-room-info.component';
import { GuestContactusComponent } from './guest-contactus/guest-contactus.component';
import { GuestAmenitiesComponent } from './guest-amenities/guest-amenities.component';


const routes: Routes = [
  { path: '', component: GuestDashboardComponent },  // Public route
  { path: 'login', component: LoginComponent },
  { path: 'guest-dashboard', component: GuestDashboardComponent },
  { path: 'guest-room-info', component: GuestRoomInfoComponent }, 
  { path: 'guest-contactus', component: GuestContactusComponent },
  { path: 'guest-amenities', component: GuestAmenitiesComponent},// Public route
   
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard],data: { role: 'ADMIN' } }, // Public route
  { path: 'user-details', component: UserDetailsComponent, canActivate: [AuthGuard] }, // Protected route
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard], data: { role: 'ADMIN' } }, // Admin only
  { path: 'manager-dashboard', component: ManagerDashboardComponent, canActivate: [AuthGuard], data: { role: 'MANAGER' } }, // Manager only
  { path: 'staff-dashboard', component: StaffDashboardComponent, canActivate: [AuthGuard], data: { role: 'STAFF' } }, 
  { path: 'room-edit/:id', component: RoomEditComponent, canActivate: [AuthGuard], data: { role: 'STAFF' } },
  { path: 'room-details/:id', component: RoomDetailsComponent, canActivate: [AuthGuard], data: { role: 'STAFF' } },
  { path: 'register-room', component: RegisterroomComponent, canActivate: [AuthGuard], data: { role: 'STAFF' } },// Staff only
  
  { path: 'user-edit/:id', component: UserEditComponent , canActivate: [AuthGuard],data: { role: 'ADMIN' }},
  { path: 'user-details/:id', component: UserDetailsComponent, canActivate: [AuthGuard],data: { role: 'ADMIN' } },
  { path: 'staff-dash-board', component: StaffDashBoardComponent, canActivate: [AuthGuard],data: { role: 'ADMIN' } },
  { path: 'staff-dash-register', component: StaffDashRegisterComponent, canActivate: [AuthGuard],data: { role: 'ADMIN' } },
  { path: 'staff-dash-edit/:id', component: StaffDashEditComponent, canActivate: [AuthGuard],data: { role: 'ADMIN' } },
  { path: 'staff-dash-details/:id', component: StaffDashDetailsComponent, canActivate: [AuthGuard],data: { role: 'ADMIN' } },
  

  { path: 'hotel-details/:id', component: HoteldetailsComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'hotel-edit/:id', component: HoteleditComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'register-hotel', component: RegisterhotelComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'register-hotel-chain', component: RegisterhotelchainComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'register-hotel-brand', component: RegisterhotelbrandComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'hotel-chain', component: HotelchainComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'hotel-chain-edit/:id', component: HotelchaineditComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'hotel-brand', component: HotelbrandComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'hotel-brand-edit/:id', component: HotelbrandeditComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'hotel-functions', component: HotelfunctionsComponent, canActivate: [AuthGuard],data: { role: 'MANAGER' } },
  { path: 'security', component: SecurityComponent , canActivate: [AuthGuard],data: { role: 'SECURITY' }},
  { path: 'house-keeping', component: HousekeepingComponent , canActivate: [AuthGuard],data: { role: 'HOUSEKEEPING' }},
  { path: 'chef', component: ChefComponent, canActivate: [AuthGuard],data: { role: 'CHEF' } },
  { path: 'receptionist', component: ReceptionistComponent, canActivate: [AuthGuard],data: { role: 'RECEPTIONIST' } },
  { path: 'booking-details/:id', component: BookingDetailsComponent, canActivate: [AuthGuard],data: { role: 'RECEPTIONIST' } },
  { path: 'booking-edit/:id', component:BookingEditComponent, canActivate: [AuthGuard],data: { role: 'RECEPTIONIST' } },
  { path: 'register-booking', component: RegisterbookingComponent, canActivate: [AuthGuard],data: { role: 'RECEPTIONIST' } },
  { path: 'crm', component:CrmComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'campaign', component:CampaignComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'campaign-details/:id', component:CampaignDetailsComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'campaign-edit/:id', component:CampaignEditComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'feedback', component:FeedbackComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'feedback-details/:id', component:FeedbackDetailsComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'feedback-edit/:id', component:FeedbackEditComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'loyalty-details/:id', component:LoyaltyDetailsComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'preference', component:PreferenceComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'preference-details/:id', component:PreferenceDetailsComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'preference-edit/:id', component:PreferenceEditComponent, canActivate: [AuthGuard],data: { role: 'PR' } },
  { path: 'inventory-dashboard', component:InventoryDashboardComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'inventory-item', component:InventoryitemsComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'inventory-item-details/:id', component:InventoryitemDetailsComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'inventory-item-edit/:id', component:InventoryitemEditComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'supplier', component:SupplierComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'supplier-details/:id', component:SupplierDetailsComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'supplier-edit/:id', component:SupplierEditComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'purchase-order', component:PurchaseOrderComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'purchase-order-details/:id', component:PurchaseOrderDetailsComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'purchase-order-edit/:id', component:PurchaseOrderEditComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'register-inventory-item', component:RegisterInventoryItemComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'register-purchase-order', component:RegisterPurchaseOrderComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'register-supplier', component:RegisterSupplierComponent, canActivate: [AuthGuard],data: { role: 'INVENTORY' } },
  { path: 'maintenance-dashboard', component:MaintenanceDashboardComponent, canActivate: [AuthGuard],data: { role: 'MAINTENANCE' } },
  { path: 'maintenance-register', component:MaintenanceRegisterComponent, canActivate: [AuthGuard],data: { role: 'MAINTENANCE' } },
  { path: 'maintenance-edit/:id', component:MaintenanceEditComponent, canActivate: [AuthGuard],data: { role: 'MAINTENANCE' } },
  { path: 'maintenance-details/:id', component:MaintenanceDetailsComponent, canActivate: [AuthGuard],data: { role: 'MAINTENANCE' } },




  
  { path: '**', redirectTo: '', pathMatch: 'full' }  // Redirect any unknown routes to home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
