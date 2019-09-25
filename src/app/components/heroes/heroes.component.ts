import { Component, OnInit, Input } from '@angular/core';
import { HeroeService, Heroe} from '../../services/heroe.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];
  @Input() index: number;

  constructor(private heroService: HeroeService, private router: Router) {

   }

  ngOnInit() {
   this.heroes = this.heroService.getHeroes();
   console.log('mis heroes', this.heroes);
  }

  verHeroePadre(idx: number) {
     this.router.navigate(['/heroe', idx] );
  }

}



