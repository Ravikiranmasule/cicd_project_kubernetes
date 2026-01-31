// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtResponse } from './models/jwtresponse.model';
import { User } from './models/user.model';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient, private configService: ConfigService) { }

  login(username: string, password: string): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(`${this.configService.usersEndpoint}/login`, { username, password });
  }

  register(user: User): Observable<JwtResponse> {
    const token = localStorage.getItem('authToken');
    if (token) {
      return this.http.post<JwtResponse>(`${this.configService.usersEndpoint}/register`, user, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      });
    } else {
      throw new Error('No authentication token found');
    }
  }

  getUserById(id: number): Observable<User> {
    const token = localStorage.getItem('authToken');
    if (token) {
      return this.http.get<User>(`${this.configService.usersEndpoint}/${id}`, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
      });
    } else {
      throw new Error('No authentication token found');
    }
  }

  getAllUsers(): Observable<User[]> {
    const token = localStorage.getItem('authToken');
    return this.http.get<User[]>(`${this.configService.usersEndpoint}/all`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  deleteUser(id: number): Observable<void> {
    const token = localStorage.getItem('authToken');
    return this.http.delete<void>(`${this.configService.usersEndpoint}/${id}`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  updateUser(id: number, user: User): Observable<void> {
    const token = localStorage.getItem('authToken');
    return this.http.put<void>(`${this.configService.usersEndpoint}/${id}`, user, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  getRoles(): Observable<string[]> {
    const token = localStorage.getItem('authToken');
    return this.http.get<string[]>(`${this.configService.usersEndpoint}/roles`, {
      headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
    });
  }

  searchUser(keyword:string):Observable<User[]>{
    const token=localStorage.getItem('authToken');
    return this.http.get<User[]>(`${this.configService.usersEndpoint}/search/${keyword}`,{
      headers:new HttpHeaders().set('Authorization',`Bearer ${token}`)
    })
  }
}

