import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = [
    {
  icon: 'assets/icons/Cable.png',
      title: 'Amplify Insights',
      text: 'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.'
    },
    {
  icon: 'assets/icons/Earth.png',
      title: 'Control Your Global Presence',
      text: 'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.'
    },
    {
  icon: 'assets/icons/Account.png',
      title: 'Remove Language Barriers',
      text: 'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.'
    },
        {
  icon: 'assets/icons/Chart.png',
      title: 'Visualize Growth',
      text: 'Generate precise, visually compelling reports that illustrate your growth trajectories across all regions.'
    }
  ];

  constructor() { }

  ngOnInit(): void {}
}
