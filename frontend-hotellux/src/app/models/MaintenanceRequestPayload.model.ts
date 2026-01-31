export interface MaintenanceRequestPayload{
 
    description: string;
    status: string;
    roomId: number;
    reportedBy: string;
    requestTime: Date;
    completionTime: Date;
    technicianAssignedId: number;
    notes?: string;
    priority?: string;
    createdAt: Date;
    updatedAt: Date;
}