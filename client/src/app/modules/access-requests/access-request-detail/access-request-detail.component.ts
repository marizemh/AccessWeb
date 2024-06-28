import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccessRequestService } from 'app/core/services/access-request.service';

@Component({
  selector: 'app-access-request-detail',
  templateUrl: './access-request-detail.component.html',
  styleUrls: ['./access-request-detail.component.scss']
})
export class AccessRequestDetailComponent implements OnInit {
  accessRequest: any;

  constructor(
    private route: ActivatedRoute,
    private accessRequestService: AccessRequestService
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.loadAccessRequest(id);
  }

  loadAccessRequest(id: string): void {
    this.accessRequestService.getAccessRequest(id).subscribe(
      (request) => {
        this.accessRequest = request;
      },
      (error) => {
        console.error('Error loading access request', error);
      }
    );
  }

  approveRequest(): void {
    this.accessRequestService.approveRequest(this.accessRequest.id).subscribe(
      () => {
        // Handle successful approval
      },
      (error) => {
        console.error('Error approving request', error);
      }
    );
  }

  rejectRequest(): void {
    this.accessRequestService.rejectRequest(this.accessRequest.id).subscribe(
      () => {
        // Handle successful rejection
      },
      (error) => {
        console.error('Error rejecting request', error);
      }
    );
  }
}
