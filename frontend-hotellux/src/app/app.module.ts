import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UserDetailsComponent } from './user-details/user-details.component';
import { HomeComponent } from './home/home.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

import { GuestDashboardComponent } from './guest-dashboard/guest-dashboard.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { HoteldetailsComponent } from './hoteldetails/hoteldetails.component';
import { HoteleditComponent } from './hoteledit/hoteledit.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HousekeepingComponent } from './housekeeping/housekeeping.component';
import { ChefComponent } from './chef/chef.component';
import { ReceptionistComponent } from './receptionist/receptionist.component';
import { SecurityComponent } from './security/security.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { StaffDashboardComponent } from './staff-dashboard/staff-dashboard.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { RegisterComponent } from './register/register.component';

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
import { BookingComponent } from './booking/booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { BookingEditComponent } from './booking-edit/booking-edit.component';

import { InventoryDashboardComponent } from './inventory-dashboard/inventory-dashboard.component';
import { InventoryitemsComponent } from './inventoryitems/inventoryitems.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { InventoryitemDetailsComponent } from './inventoryitem-details/inventoryitem-details.component';
import { InventoryitemEditComponent } from './inventoryitem-edit/inventoryitem-edit.component';
import { PurchaseOrderDetailsComponent } from './purchase-order-details/purchase-order-details.component';
import { PurchaseOrderEditComponent } from './purchase-order-edit/purchase-order-edit.component';
import { SupplierDetailsComponent } from './supplier-details/supplier-details.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { PreferenceComponent } from './preference/preference.component';
import { PreferenceDetailsComponent } from './preference-details/preference-details.component';
import { PreferenceEditComponent } from './preference-edit/preference-edit.component';
import { CrmComponent } from './crm/crm.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackDetailsComponent } from './feedback-details/feedback-details.component';
import { FeedbackEditComponent } from './feedback-edit/feedback-edit.component';
import { LoyaltyDetailsComponent } from './loyalty-details/loyalty-details.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CampaignDetailsComponent } from './campaign-details/campaign-details.component';
import { CampaignEditComponent } from './campaign-edit/campaign-edit.component';
import { RegisterInventoryItemComponent } from './register-inventory-item/register-inventory-item.component';
import { RegisterPurchaseOrderComponent } from './register-purchase-order/register-purchase-order.component';
import { RegisterbookingComponent } from './registerbooking/registerbooking.component';
import { RegisterhotelComponent } from './registerhotel/registerhotel.component';
import { RegisterSupplierComponent } from './register-supplier/register-supplier.component';
import { MaintenanceDashboardComponent } from './maintenance-dashboard/maintenance-dashboard.component';
import { MaintenanceRegisterComponent } from './maintenance-register/maintenance-register.component';
import { MaintenanceEditComponent } from './maintenance-edit/maintenance-edit.component';
import { MaintenanceDetailsComponent } from './maintenance-details/maintenance-details.component';
import { StaffDashBoardComponent } from './staff-dash-board/staff-dash-board.component';
import { StaffDashRegisterComponent } from './staff-dash-register/staff-dash-register.component';
import { StaffDashEditComponent } from './staff-dash-edit/staff-dash-edit.component';
import { StaffDashDetailsComponent } from './staff-dash-details/staff-dash-details.component';
import { ConfigService } from './config.service';
import { GuestRoomInfoComponent } from './guest-room-info/guest-room-info.component';
import { GuestContactusComponent } from './guest-contactus/guest-contactus.component';
import { GuestAmenitiesComponent } from './guest-amenities/guest-amenities.component';

export function initializeApp(configService: ConfigService) {
  return () => configService.loadConfig();
}




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UserDetailsComponent,
    HomeComponent,
    AdminDashboardComponent,
    ManagerDashboardComponent,
    StaffDashboardComponent,
    GuestDashboardComponent,
    UserEditComponent,
    HoteldetailsComponent,
    HoteleditComponent,
    NavbarComponent,
    MaintenanceComponent,
    ReceptionistComponent,
    SecurityComponent,
    ChefComponent,
    HousekeepingComponent,
    RegisterhotelComponent,
    RegisterhotelchainComponent,
    RegisterhotelbrandComponent,
    HotelchainComponent,
    HotelchaineditComponent,
    HotelbrandComponent,
    HotelbrandeditComponent,
    HotelfunctionsComponent,
    RoomEditComponent,
    RoomDetailsComponent,
    RegisterroomComponent,
    BookingComponent,
    BookingDetailsComponent,
    BookingEditComponent,
    RegisterbookingComponent,
    InventoryDashboardComponent,
    InventoryitemsComponent,
    SupplierComponent,
    PurchaseOrderComponent,
    InventoryitemDetailsComponent,
    InventoryitemEditComponent,
    PurchaseOrderDetailsComponent,
    PurchaseOrderEditComponent,
    SupplierDetailsComponent,
    SupplierEditComponent,
    PreferenceComponent,
    PreferenceDetailsComponent,
    PreferenceEditComponent,
    CrmComponent,
    FeedbackComponent,
    FeedbackDetailsComponent,
    FeedbackEditComponent,
    LoyaltyDetailsComponent,
    CampaignComponent,
    CampaignDetailsComponent,
    CampaignEditComponent,
    RegisterInventoryItemComponent,
    RegisterPurchaseOrderComponent,
    RegisterSupplierComponent,
    MaintenanceDashboardComponent,
    MaintenanceRegisterComponent,
    MaintenanceEditComponent,
    MaintenanceDetailsComponent,
    StaffDashBoardComponent,
    StaffDashRegisterComponent,
    StaffDashEditComponent,
    StaffDashDetailsComponent,
    GuestRoomInfoComponent,
    GuestContactusComponent,
    GuestAmenitiesComponent,
  
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [ConfigService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
