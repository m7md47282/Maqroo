import { Component, OnInit } from '@angular/core';
import { faBookmark, faCompass, faHome, faUsers, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { IMenu } from './menuInterface';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.sass']
})




export class SideMenuComponent implements OnInit {
  sideMenulist: Array<IMenu> = [
    {
      title: "Home",
      route:"/home",
      icon: faHome 
    },
    {
      title: "Explor",
      route:"/home",
      icon: faCompass 
    },
    {
      title: "Followers",
      route:"/home",
      icon: faUsers 
    },
    {
      title: "Library",
      route:"/home",
      icon: faBookmark 
    },
  ]
  

  ngOnInit(): void {
    
  }

}
