import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() data: any;
  public isDetails: boolean = false;
  public classe: string | null = null;

  constructor() { }

  ngOnInit() {
    if (this.data) {
      this.isDetails = true;
      this.classe = this.data.color;
    }
  }

  // faça uma função de str_pad com 3 caracteres preenchendo zero à esquerda
  public str_pad_left(string: number): string {
    return (new Array(4).join('0') + (string).toString()).slice(-3);
  }
  

}
