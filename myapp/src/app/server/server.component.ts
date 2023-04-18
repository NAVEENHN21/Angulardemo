import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  serverId: number = 1;
  serverStatus: string = 'online';
  onclickbutton: string = 'ON';
  serverName: string = 'QAServer';
  serverdescription: string = 'Init description';
  isServerEnabled: boolean = false;

  getServerStatus() {
    return this.serverStatus;
  }

  onPowerButtonClick() {
    if (this.serverStatus == 'offline') {
      this.serverStatus = 'online';
      this.onclickbutton = 'OFF';
    } else if (this.serverStatus == 'online') {
      this.serverStatus = 'offline';
      this.onclickbutton = 'ON';
    }
    console.log('power button is clicked');
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }
  getServerColour() {
    return this.serverStatus == 'online' ? 'green' : 'red';
  }
  getServerClass() {
    return this.serverStatus == 'online' ? 'bg-danger' : 'bg-success';
  }
}
