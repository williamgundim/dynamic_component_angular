import { Component, Input, OnInit } from '@angular/core';
import { Frutas } from '../models/frutas.model';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {

  @Input() data!: Frutas;

  constructor() { }

  ngOnInit(): void {
  }

}
