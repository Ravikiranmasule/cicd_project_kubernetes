import { Room } from "./Room.model";
import { Staff } from "./Staff.model";

export interface MaintenanceRequest {
    id: number;
    description: string;
    status: string;
    room: Room;
    reportedBy: string;
    requestTime: Date;
    completionTime?: Date;
    technicianAssigned?: Staff;
    notes?: string;
    priority?: string;
    createdAt: Date;
    updatedAt: Date;
  }