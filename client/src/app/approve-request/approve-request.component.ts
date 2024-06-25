// src/app/approve-request/approve-request.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessRequestService } from '../services/access-request.service';
import { AccessRequest } from '../models/access-request.model';

@Component({
  selector: 'app-approve-request',
  templateUrl: './approve-request.component.html',
  styleUrls: ['./approve-request.component.scss']
})
export class ApproveRequestComponent implements OnInit {
  request: AccessRequest;

  constructor(private route: ActivatedRoute, private accessRequestService: AccessRequestService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.accessRequestService.getRequestById(id).subscribe(request => {
      this.request = request;
    });
  }

  approve() {
    this.accessRequestService.updateRequest(this.request.id, 'approved').subscribe(response => {
      // Handle response
    });
  }

  reject(comments: string) {
    this.accessRequestService.updateRequest(this.request.id, 'rejected', comments).subscribe(response => {
      // Handle response
    });
  }
}
