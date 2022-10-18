import { Component, OnInit } from '@angular/core';

import { faSimCard } from '@fortawesome/free-solid-svg-icons';
import { faCcMastercard } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  faCcMastercard = faCcMastercard;
  faSimCard = faSimCard
  constructor() { }

  ngOnInit(): void {
  }

}
