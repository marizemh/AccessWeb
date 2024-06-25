// src/app/controllers/access-request.controller.ts
import { Controller, Post, Get, Param, Body, Patch } from '@nestjs/common';
import { AccessRequestService } from '../services/access-request.service';
import { AccessRequest } from '../models/access-request.model';

@Controller('access-requests')
export class AccessRequestController {
  constructor(private readonly accessRequestService: AccessRequestService) {}

  @Post()
  createRequest(@Body() request: AccessRequest): AccessRequest {
    return this.accessRequestService.createRequest(request);
  }

  @Get(':id')
  getRequestById(@Param('id') id: string): AccessRequest {
    return this.accessRequestService.getRequestById(id);
  }

  @Patch(':id')
  updateRequest(
    @Param('id') id: string,
    @Body('status') status: 'approved' | 'rejected',
    @Body('comments') comments?: string
  ): AccessRequest {
    return this.accessRequestService.updateRequest(id, status, comments);
  }
}
