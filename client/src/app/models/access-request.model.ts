// src/app/models/access-request.model.ts
export interface AccessRequest {
  id: string;
  email: string;
  application: string;
  environment: string;
  approvers: string[];
  duration: string;
  status: 'pending' | 'approved' | 'rejected';
  comments?: string;
}
