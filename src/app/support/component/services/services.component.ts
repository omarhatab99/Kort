import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  serviceType?: any;

  constructor(private router: ActivatedRoute) {
    this.router.paramMap.subscribe(param => this.serviceType = param.get('service'))
  }
}
