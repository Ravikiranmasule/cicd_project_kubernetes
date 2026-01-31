// src/app/room-edit/room-edit.component.ts
import { Component, OnInit } from '@angular/core';
import { Room } from '../models/Room.model';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-edit',
  templateUrl: './room-edit.component.html',
  styleUrls: ['./room-edit.component.css']
})
export class RoomEditComponent implements OnInit {

  room: Room = { id: 0, name: '', category: '', amenities: '', price: 0 };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.roomService.getRoomById(id).subscribe((data) => {
      this.room = data;
    });
  }

  onSubmit(): void {
    this.roomService.updateRoom(this.room.id, this.room).subscribe(() => {
      alert("Room edited successfully");
      this.router.navigate(['/staff-dashboard']);
    });
  }
}
