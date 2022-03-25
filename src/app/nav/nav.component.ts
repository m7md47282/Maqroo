import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.sass']
})
export class NavComponent implements OnInit {
  width!: number;
  left!: number;
  opacity: number = 0;

  nav = [
    {
      title: "Home",
      route: "/home",
    },
    {
      title: "Explor",
      route: "/explor",
    },
    {
      title: "Followers",
      route: "/followers",
    },
    {
      title: "Library",
      route: "/library",
    },
  ]

  constructor() {
  }

  getOffset = (event: any) => {
    this.left = event.srcElement.offsetLeft;
    this.width = event.srcElement.offsetWidth;
    this.opacity = 1;
  }

  goOff = () => {
    this.opacity = 0;
    this.left = 0;
    this.width = 0;
  }

  ngOnInit(): void {
  }

}
