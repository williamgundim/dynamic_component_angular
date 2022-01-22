import { Component, Input, OnInit } from '@angular/core';
import { Frutas } from '../models/frutas.model';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.css']
})
export class PageThreeComponent implements OnInit {

  @Input() data!: Frutas;

  constructor() { }

  ngOnInit(): void {
  }

}
