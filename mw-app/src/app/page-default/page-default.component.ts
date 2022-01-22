import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NewItem } from '../models/new-item';
import { NovoComponente } from '../models/novoComponent';
import { AdDirective } from '../utils/addItem.directive';

@Component({
  selector: 'app-page-default',
  templateUrl: './page-default.component.html',
  styleUrls: ['./page-default.component.css']
})
export class PageDefaultComponent implements OnInit, OnDestroy, AfterViewInit {
  @Input() items: NewItem[] = []; //Recebe os componentes

  currentAdIndex = -1;

  @ViewChild(AdDirective, {static: true}) adHost!: AdDirective;
  interval: number = 0;;

  ngOnInit(){
  }
  
  ngAfterViewInit() {
    this.loadComponent();
    this.getAds();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.items.length;
    const adItem = this.items[this.currentAdIndex];

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent<NovoComponente>(adItem.component);
    componentRef.instance.data = adItem.data;
  }

  getAds() {
    setInterval(() => {
      this.loadComponent();
    }, 10000);
  }
}