import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessRequestService {
  private apiUrl = 'http://localhost:3000/api/access-requests';

  constructor(private http: HttpClient) { }

  createAccessRequest(request: any): Observable<any> {
    return this.http.post(this.apiUrl, request);
  }

  getAccessRequests(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getAccessRequest(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  approveRequest(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status: 'approved' });
  }

  rejectRequest(id: string): Observable<any> {
    return this.http.patch(`${this.apiUrl}/${id}`, { status: 'rejected' });
  }
}
