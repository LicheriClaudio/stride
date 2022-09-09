import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Lista } from './lista';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  public lista: Lista[] = [];
  public counter: number = 0;
  public iniz: String = '';
  public switch: Boolean = false;
  public sortCompleted: Boolean = false;
  public arr2: [] = [];
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.lista = this.arr1();
    this.listaCompleted;
  }

  changeModel(): void {
    this.switch = true;
  }

  creaModel(): void {
    this.listaScritta();
    this.lista.push();
    this.switch = false;
  }

  arr1(): Lista[] {
    return this.lista;
  }

  listaCompleted(ele: Lista) {
    this.remove(ele);
    this.lista.push(ele);


    console.log(ele);


  }




  remove(u: Lista): void {
    let index = this.lista.indexOf(u);
    this.lista.splice(index, 1);
  }

  listaScritta(): void {
    if (this.iniz.trim() !== '') {
      this.counter++;
      let ele = {
        id: this.counter,
        title: this.iniz,
        completed: false,
      };
      this.lista.push(ele);
      console.log(this.lista);
      console.log(ele);
      this.iniz = '';
      this.switch = false;
    } else {
      alert('campo vuoto');
    }
  }
}
