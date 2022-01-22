import { Component, OnInit } from '@angular/core';
import { NewItem } from './models/new-item';
import { NewItemService } from './new-item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'mw-app';
  items: NewItem[] = [];
  constructor(private newItemService:NewItemService) {

  }

  ngOnInit(): void {
      
    this.items = this.newItemService.getItems();

  }

}

