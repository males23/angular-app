import { Component, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-add-service',
  templateUrl: './add-service.component.html',
  styleUrls: ['./add-service.component.css']
})
export class AddServiceComponent implements OnInit {

  service: Service | undefined;

  ngOnInit() {
    this.service = new Service();
  }

}
