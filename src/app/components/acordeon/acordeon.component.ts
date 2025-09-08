import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-acordeon',
  templateUrl: './acordeon.component.html',
  styleUrls: ['./acordeon.component.css']
})
export class AcordeonComponent implements OnInit {
  acordeonItems = [
    {
      number: '01',
      description: 'Spot Trends in Seconds: No more digging through numbers.'
    },
    {
      number: '02',
      description: 'Get Everyone on the Same Page: Share easy-to-understand reports with your team.'
    },
    {
      number: '03',
      description: 'Make Presentations Pop: Interactive maps and dashboards keep your audience engaged.'
    },
    {
      number: '04',
      description: 'Your Global Snapshot: Get a quick, clear overview of your entire operation.'
    }
  ];

  constructor() { }

  ngOnInit(): void {}
}
