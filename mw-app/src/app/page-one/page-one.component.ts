import { Component, Input, OnInit } from '@angular/core';
import { Frutas } from '../models/frutas.model';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  @Input() data!: Frutas;

  constructor() { }

  ngOnInit(): void {
  }

}
