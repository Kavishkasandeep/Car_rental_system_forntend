import { Component } from '@angular/core';
import { Vehical } from './vehical_model';
import { VehicalService } from './vehical-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html',
  styleUrls: ['./vehical.component.css']
})
export class VehicalComponent {

vehical : Vehical[];

constructor(private vehicalService : VehicalService,
            private router:Router){
}

ngOnInit():void{ this.getVehicals(); }


private getVehicals(){
  this.vehicalService.getVehicals().subscribe(data =>{
    this.vehical = data;
  })
}

}
