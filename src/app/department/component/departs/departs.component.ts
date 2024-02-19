import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-departs',
  templateUrl: './departs.component.html',
  styleUrls: ['./departs.component.scss']
})
export class DepartsComponent {
  departmentId?: any;
  
  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => this.departmentId = param.get('id'))
  }
}
