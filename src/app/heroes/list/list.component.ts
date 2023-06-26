import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman','Iromanm','Tork','Hulk'];
  public deletedHero?: string;

  public eliminarHeroeUltimo ():void {
    this.deletedHero = this.heroNames.pop();
  }
}
