import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService, Heroe } from '../../services/heroe.service';


@Component({
  selector: 'app-busqueda-hero',
  templateUrl: './busqueda-hero.component.html',
  styleUrls: ['./busqueda-hero.component.css']
})

export class BusquedaHeroComponent implements OnInit {

  listadoHeroes: Heroe[];
  termino: string;

  constructor(private activatedRoute: ActivatedRoute, private  heroService: HeroeService)  {

  }

  ngOnInit() {
    this.resultadoBusqueda();
  }

  public resultadoBusqueda() {
    this.activatedRoute.params.subscribe(params => {
          this.listadoHeroes = this.heroService.buscarHeroe(params.termino);
          this.termino = params.termino;
          console.log(this.listadoHeroes);
    });
  }

}
