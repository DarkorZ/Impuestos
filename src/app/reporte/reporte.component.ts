import { Component, OnInit } from '@angular/core';
import { GastoService} from '../gasto.service';
import { Gasto } from '../gasto/gasto.component';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrl: './reporte.component.css'
})
export class ReporteComponent implements OnInit {
  ngOnInit(): void {
  }
  gastos: Gasto[]=[];
    constructor(private gastoService:GastoService){
    this.gastoService.obtenerDatos().subscribe(data =>
      {
        this.gastos=data;
        console.log(data);
      });
    }
}
