import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{
    name:'Trunks',
    power:10
  }]

  @Output()
  public onDeletePersonaje: EventEmitter<string> = new EventEmitter();



  onDeleteCharacter(id?: string):void {
    // TODO: Emitir el ID del Personaje
    if (!id) return;

    this.onDeletePersonaje.emit(id);
  }
}
