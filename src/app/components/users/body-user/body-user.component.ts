import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { interval, Subscription, Observable } from 'rxjs';

//Chart
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: ['./body-user.component.css']
})
export class BodyUserComponent implements OnInit {
  private userId = localStorage.getItem('userToken');
  private data: Observable<any> =  this.dataService.getData(this.userId);
  subscription: Subscription;

  constructor(private dataService: DataService) { }

  grafica = true;
  gas = true;
  energia = true;
  agua = true;



  ngOnInit(): void {
    let userId = localStorage.getItem('userToken');
    this.dataService.getData(userId).subscribe((res: any) =>{
      console.log("asdfadafasdfasdfasfasfdasfadfadfafd", {res}); 
    });
    const source = interval(60000);
    const text = 'Your Text Here';
    this.subscription = source.subscribe(val => {
      let userId = localStorage.getItem('userToken');
      this.dataService.getData(userId).subscribe((res: any) =>{
        console.log({res}); 
      })
    });
  }

  //Abrir y cerrar agua
  abrirAgua(){
    this.agua = true;
  }

  cerrarAgua(){
    this.agua = false;
  }

  //abrir y cerrar gas
  abrirGas(){
    this.gas = true;
  }

  cerrarGas(){
    this.gas = false;
  }

  //abrir y cerrar energia
  abrirEnergia(){
    this.energia = true;
  }

  cerrarEnergia(){
    this.energia = false;
  }


  getAllDataSensors(){

  }


  ngOnDestroy(): void{


  }


















  //chart
  lineChartData: ChartDataSets[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Agua' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Energia' },
    { data: [1,2,3,4,5,6,100], label: 'Gas' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    //Fisrt chart - Agua
    {
      backgroundColor: 'rgba(34, 49, 63, 1)',
      borderColor: 'rgba(37, 116, 169, 1)',
    },
    //Second chart - Energy
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    },
    //Third chart - Gas
    { 
      backgroundColor: 'rgba(38, 166, 91, 1)',
      borderColor: 'rgba(0, 230, 64, 1)',
    },

  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  lineChartType = 'line';

  lineChartPlugins = [];

  // events
  chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
