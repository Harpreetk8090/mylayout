import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'layout';
  date= new Date();
  currentDate:any;
 constructor(private datePipe: DatePipe){
  this.currentDate = this.datePipe.transform(new Date(), 'dd/MM/yyyy');
 }
 ngOnInit(): void {
   
 }
}
