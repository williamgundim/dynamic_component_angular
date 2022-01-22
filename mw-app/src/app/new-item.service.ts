import { Injectable } from '@angular/core';
import { NewItem } from './models/new-item';
import { PageOneComponent } from './page-one/page-one.component';
import { PageThreeComponent } from './page-three/page-three.component';
import { PageTwoComponent } from './page-two/page-two.component';

@Injectable({
  providedIn: 'root'
})
export class NewItemService {

  constructor() { }

  getItems(){
   
    return this.loadItems();

  }

  loadItems(){

    let frutas:Array<NewItem> = [];

    frutas.push( new NewItem(
      PageOneComponent, 
      {
        titulo: "Banana",
        subtitulo: "Frutas",
        descricao: "A banana não é só mais uma fruta no mercado ou na sua fruteira." +
        "O sabor que agrada o paladar de muita gente também pode ser suporte para uma alimentação saudável." +
        "Vai sair e precisa de um lanchinho prático? Leve uma banana! Cheia de nutrientes, a fruta pode ser encontrada em todas as estações do ano.",
        imagem: "https://d3ugyf2ht6aenh.cloudfront.net/stores/746/397/products/banana_caturra1-7e2b9a3f6b39b3309915220270001382-1024-1024.jpg"
      }) );

    frutas.push( new NewItem(
      PageTwoComponent, 
      {
        titulo: "Tag Itau",
        subtitulo: "Beneficios Itau",
        descricao: "A Tag Itaú é um adesivo de pagamento." +
        "automático de pedágios e estacionamentos do Itaú com a tecnologia, cobertura e qualidade da ConectCar.",
        imagem: "https://cdn.guiadoinvestidor.com.br/2021/10/Itau-8.png"
      }) );

      frutas.push( new NewItem(
        PageThreeComponent, 
        {
          titulo: "Maça",
          subtitulo: "Frutas",
          descricao: "",
          imagem: ""
        }) );

    return frutas

  }

}
