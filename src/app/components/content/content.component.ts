import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, AfterViewInit {
  acordeonItems = [
    {
      number: '01',
      title: 'First Accordion',
      description: 'This is the first accordion description.'
    },
    {
      number: '02',
      title: 'Second Accordion',
      description: 'This is the second accordion description.'
    },
    {
      number: '03',
      title: 'Third Accordion',
      description: 'This is the third accordion description.'
    }
  ];

  constructor() { }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const animatedElements = document.querySelectorAll('.animation');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
  }
}
