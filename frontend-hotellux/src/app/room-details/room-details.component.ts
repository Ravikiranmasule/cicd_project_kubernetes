// src/app/room-details/room-details.component.ts
import { Component, OnInit } from '@angular/core';
import { Room } from '../models/Room.model';
import { ActivatedRoute } from '@angular/router';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.css']
})
export class RoomDetailsComponent implements OnInit {

  room: Room | undefined;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.roomService.getRoomById(id).subscribe((data) => {
      this.room = data;
    });
  }
}
