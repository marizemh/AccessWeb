import { Component, OnInit } from '@angular/core';
import { AccessRequestService } from 'app/core/services/access-request.service';

@Component({
  selector: 'app-access-request-list',
  templateUrl: './access-request-list.component.html',
  styleUrls: ['./access-request-list.component.scss']
})
export class AccessRequestListComponent implements OnInit {
  accessRequests: any[];
  displayedColumns: string[] = ['email', 'application', 'environment', 'duration', 'status', 'actions'];

  constructor(private accessRequestService: AccessRequestService) { }

  ngOnInit(): void {
    this.loadAccessRequests();
  }

  loadAccessRequests(): void {
    this.accessRequestService.getAccessRequests().subscribe(
      (requests) => {
        this.accessRequests = requests;
      },
      (error) => {
        console.error('Error loading access requests', error);
      }
    );
  }

  viewDetails(request: any): void {
    // Implementar navegación a la vista de detalles
  }
}
