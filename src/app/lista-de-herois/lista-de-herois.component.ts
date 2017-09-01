import { Component, OnInit, Input } from '@angular/core';
import {Vingador} from '../vingador';

@Component({
  selector: 'app-lista-de-herois',
  templateUrl: './lista-de-herois.component.html',
  styleUrls: ['./lista-de-herois.component.css']
})
export class ListaDeHeroisComponent implements OnInit {
  @Input()
  vingadores: Array<Vingador>;

  constructor() {}

  ngOnInit() {
  }

}
