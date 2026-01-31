// src/app/registerroom/registerroom.component.ts
import { Component, OnInit } from '@angular/core';
import { Room } from '../models/Room.model';
import { RoomService } from '../room.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-registerroom',
  templateUrl: './registerroom.component.html',
  styleUrls: ['./registerroom.component.css']
})
export class RegisterroomComponent implements OnInit {

  room: Room = {
    id: 0,
    name: '',
    category: '',
    amenities: '',
    price: 0,
    description: '',
    capacity: 0,
    bedType: '',
    isAvailable: true,
    rating: 0,
    view: ''
  };

  isEditMode: boolean = false;

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const roomId = this.route.snapshot.paramMap.get('id');
    if (roomId) {
      this.isEditMode = true;
      this.roomService.getRoomById(+roomId).subscribe(room => {
        this.room = room;
      });
    }
  }

  saveRoom(): void {
    if (this.isEditMode) {
      this.roomService.updateRoom(this.room.id, this.room).subscribe(() => {
        this.router.navigate(['/staff-dashboard']);
      });
    } else {
      this.roomService.createRoom(this.room).subscribe(() => {
        alert("Room registered successfully");
        this.router.navigate(['/staff-dashboard']);
      });
    }
  }
}
