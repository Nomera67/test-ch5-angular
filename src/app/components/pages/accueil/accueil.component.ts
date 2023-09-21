import { Component, OnInit } from '@angular/core';
import { DataReceiverService } from 'src/app/services/connexion/data-receiver.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  configData: any;

  constructor(private dataService: DataReceiverService) {}

  ngOnInit(): void {
    this.dataService.getConfigData().subscribe(
      (data) => {
        this.configData = data;
        console.log(data)
      },
      (error) => {
        console.error('Erreur lors de la récupération des données. Mais elle a été tentée.')
        console.log(error)
      }
    )
  }

}
