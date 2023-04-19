import { Component, Input, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/AccountService';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent implements OnInit {
  @Input()
  account: {
    name: string;
    status: string;
  };

  @Input()
  id: number;

  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  changeStatus(newStatus: string) {
    // this.account.status = newStatus;
    this.accountService.updateStatus(this.id, newStatus);
  }
  accountDeleted() {
    this.accountService.deleteAccount(this.id);
  }
}
