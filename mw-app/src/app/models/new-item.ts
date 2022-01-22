import { Type } from '@angular/core';
import { Frutas } from './frutas.model';

export class NewItem {
  constructor(public component: Type<any>, public data: Frutas) {}
}