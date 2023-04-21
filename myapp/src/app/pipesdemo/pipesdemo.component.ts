import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesdemo',
  templateUrl: './pipesdemo.component.html',
  styleUrls: ['./pipesdemo.component.css'],
})
export class PipesdemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  servers = [
    {
      serverSize: 'medium',
      name: 'Production Server',
      status: 'stable',
      started: new Date('2022-04-20'),
    },
    {
      serverSize: 'large',
      name: 'Databse Server',
      status: 'stable',
      started: new Date('2021-11-2'),
    },
    {
      serverSize: 'small',
      name: 'Development Server',
      status: 'critical',
      started: new Date('2023-03-16'),
    },
    {
      serverSize: 'small',
      name: 'QA Server',
      status: 'offline',
      started: new Date('2023-03-16'),
    },
  ];

  filteredStatus = '';

  getStatusClass(server) {
    return {
      'list-group-item-success': server.status === 'stable',
      'list-group-item-warning': server.status === 'offline',
      'list-group-item-danger': server.status === 'critical',
    };
  }
}
