import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  nav = [
    {
      title: "Home",
      route:"/home",
    },
    {
      title: "Explor",
      route:"/home",
    },
    {
      title: "Followers",
      route:"/home",
    },
    {
      title: "Library",
      route:"/home",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
