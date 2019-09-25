import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroeService, Heroe } from '../../services/heroe.service';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe;
  imageHome: string;

  constructor(private activatedRouted: ActivatedRoute, private heroeService: HeroeService) {
    this.activatedRouted.params.subscribe(params => {
      this.heroe = this.heroeService.getHeroe(params.id);
      this.imageHome = this.heroeService.getHomeHero(params.id);
    });
  }

  ngOnInit() {
  }

}
