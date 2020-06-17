import { Component, OnInit } from '@angular/core'
import { DataService } from 'src/app/services/data.service'
import { interval, Subscription, Observable } from 'rxjs'

//Chart
import { ChartDataSets, ChartOptions } from 'chart.js'
import { Color, Label } from 'ng2-charts'

@Component({
  selector: 'app-body-user',
  templateUrl: './body-user.component.html',
  styleUrls: [
    './body-user.component.css'
  ]
})
export class BodyUserComponent implements OnInit {
  private userId = localStorage.getItem('userToken')
  private data: Observable<any> = this.dataService.getData(this.userId)
  subscription: Subscription

  constructor (private dataService: DataService) {}

  grafica = true
  gas = true
  energia = true
  agua = true
  datosAgua = []
  datosEnergia = []
  datosGas = []
  datos = []
  gasId = ''
  energiaId = ''
  aguaId = ''
  gasAPesos
  aguaAPesos
  energiaAPesos

  ngOnInit (): void {
    this.getAllDataSensors()

    const source = interval(60000)
    const text = 'Your Text Here'
    this.subscription = source.subscribe((val) => {
      let userId = localStorage.getItem('userToken')
      this.dataService.getData(userId).subscribe((res: any) => {
      })
    })
  }

  //Gas a $
  conversionGasAPesos () {
    let sum
    for (let i = 0; i < this.datosGas.length; i++) {
      sum = +this.datosGas[i]
    }
    this.gasAPesos = sum * 1938.62
    this.gasAPesos = this.gasAPesos.toFixed(2)
  }
  // Agua a $
  conversionAguaAPesos () {
    let sum
    for (let i = 0; i < this.datosAgua.length; i++) {
      sum = +this.datosAgua[i]
    }
    this.aguaAPesos = sum * 2049.65
    this.aguaAPesos = this.aguaAPesos.toFixed(2)
  }
  // Energia a $
  conversionEnergiaAPesos () {
    let sum
    for (let i = 0; i < this.datosEnergia.length; i++) {
      sum = +this.datosEnergia[i]
    }
    this.energiaAPesos = sum * 482.26
    this.energiaAPesos = this.energiaAPesos.toFixed(2)
  }

  //Abrir y cerrar agua
  abrirAgua () {
    this.dataService.openService(this.aguaId).subscribe(res => {
      
    })
    this.agua = true
  }

  cerrarAgua () {
    this.dataService.closeService(this.aguaId).subscribe(res => {
      
    })
    this.agua = false
  }

  //abrir y cerrar gas
  abrirGas () {
    this.dataService.openService(this.gasId).subscribe(res => {
      
    })
    this.gas = true
  }

  cerrarGas () {
    this.dataService.closeService(this.gasId).subscribe(res => {
      
    })
    this.gas = false
  }

  //abrir y cerrar energia
  abrirEnergia () {
    this.dataService.openService(this.energiaId).subscribe(res => {
      
    })
    this.energia = true
  }

  cerrarEnergia () {
    this.dataService.closeService(this.energiaId).subscribe(res => {
      
    })
    this.energia = false
  }

  getAllDataSensors () {
    let userId = localStorage.getItem('userToken')

    this.dataService.getData(userId).subscribe((res: any) => {
      res.data.map((dataSet) => {
        if (dataSet.type === 'Water') {
          this.aguaId = dataSet.sensorId
          this.datosAgua.push(dataSet.data)
          this.conversionAguaAPesos()
        } else if (dataSet.type === 'Energy') {
          this.energiaId = dataSet.sensorId
          this.datosEnergia.push(dataSet.data)
          this.conversionEnergiaAPesos()
        } else if (dataSet.type === 'Gas') {
          this.gasId = dataSet.sensorId
          this.datosGas.push(dataSet.data)
          this.conversionGasAPesos()
        }
      })
    })

  }

  ngOnDestroy (): void {}

  //chart
  lineChartData: ChartDataSets[] = [
    { data: this.datosAgua, label: 'Agua M3/s' },
    { data: this.datosEnergia, label: 'Energia kWh' },
    { data: this.datosGas, label: 'Gas M3/s' }
  ]

  //Labels shown on the x-axis
  lineChartLabels: Label[] = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '9',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '21',
    '22',
    '23',
    '24',
    '25',
    '26',
    '27',
    '28',
    '29',
    '30',
    '31',
    '32',
    '33',
    '34',
    '35',
    '36',
    '37',
    '38',
    '39',
    '40',
    '41',
    '42',
    '43',
    '44',
    '45',
    '46',
    '47',
    '48',
    '49',
    '50',
    '51',
    '52',
    '53',
    '54',
    '55',
    '56',
    '57',
    '58',
    '59'
  ]

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  }

  // Define colors of chart segments
  lineChartColors: Color[] = [
    //Fisrt chart - Agua
    {
      backgroundColor: 'rgba(34, 49, 63, 1)',
      borderColor: 'rgba(37, 116, 169, 1)'
    },
    //Second chart - Energy
    {
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red'
    },
    //Third chart - Gas
    {
      backgroundColor: 'rgba(38, 166, 91, 1)',
      borderColor: 'rgba(0, 230, 64, 1)'
    }
  ]

  // Set true to show legends
  lineChartLegend = true

  // Define type of chart
  lineChartType = 'line'

  lineChartPlugins = []

  // events
  chartClicked ({ event, active }: { event: MouseEvent; active: {}[] }): void {
  }

  chartHovered ({ event, active }: { event: MouseEvent; active: {}[] }): void {
  }
}
