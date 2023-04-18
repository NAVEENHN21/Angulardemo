import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, OnChanges {
  constructor() {
    console.log('productcomponent constructor called.');
  }

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  @Input('product')
  product: {
    productName: string;
    productDescription: string;
    productQuantity: number;
    productCost: number;
  };
}
