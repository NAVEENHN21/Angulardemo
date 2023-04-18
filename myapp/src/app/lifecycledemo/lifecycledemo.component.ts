import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycledemo',
  templateUrl: './lifecycledemo.component.html',
  styleUrls: ['./lifecycledemo.component.css'],
})
// OnChanges,
// DoCheck,
// AfterContentInit,
// AfterContentChecked,
// AfterViewInit,
// AfterViewChecked,
// OnDestroy
export class LifecycledemoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
