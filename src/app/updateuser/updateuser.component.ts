import { Component } from '@angular/core';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
    userUpdate(data:object):void{
    console.warn(data)
  }
}
