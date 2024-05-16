import { Component } from '@angular/core';
import { Vehical } from './vehical_model';
import { VehicalService } from './vehical-service';



@Component({
  selector: 'app-vehical',
  templateUrl: './vehical.component.html',
  styleUrls: ['./vehical.component.css']
})
export class VehicalComponent {

vehical : Vehical[];
newVehical : Vehical = new Vehical();


constructor(private vehicalService : VehicalService,){
}

ngOnInit():void{
  this.getVehicals();
}




private getVehicals(){
  this.vehicalService.getVehicals().subscribe(data =>{
    this.vehical = data;
  })
}

 saveVehical(){
  this.vehicalService.addVehical(this.newVehical).subscribe({
    next :data =>{
      console.log(data);
    },
    error:error => console.log(error)
  });
}

}
