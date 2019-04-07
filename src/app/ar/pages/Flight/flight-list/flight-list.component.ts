import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {Observable} from 'rxjs';
import {Flight} from '../../../../models/Flight/flight';
import {Data} from '@angular/router';
import {Country} from '../../../../models/Country/city';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
})

export class FlightListComponent implements OnInit {
  displayedColumns: string[] = ['source', 'Destination', 'Time', 'Price', 'Org', 'op'];
  dataSource: MatTableDataSource<Flight>;
  @ViewChild(MatSort) sort: MatSort;
  flights: Flight[];
  countries: Country[];
  CountryControl = new FormControl();
  sourceCity: string;
  distCity: string;
  constructor() { }

  ngOnInit() {
    this.countries = [
      {name: 'iran',  viewValue: 'ایران', cities: [{name: 'tehran', viewValue: 'تهران'} , {name: 'mashhad' , viewValue: 'مشهد'}]},
      {name: 'iraq', viewValue: 'عراق', cities: [{name: 'baqdad' , viewValue: 'بغداد'} , {name: 'arbil' , viewValue: 'اربیل'}]},

    ];

    this.flights = [];
    let f1: Flight;
    f1 = new Flight();
    f1.Source = 'tehran';
    f1.Destination = 'mashhad';
    f1.Time = 13323;
    f1.Org = 'zagros';
    f1.Price = 54545;
    this.flights.push(f1);
    this.dataSource = new MatTableDataSource(this.flights);
    this.dataSource.sort = this.sort;
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
