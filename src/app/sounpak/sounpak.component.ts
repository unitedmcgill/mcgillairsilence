import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  //selector: 'app-sounpak',
  templateUrl: './sounpak.component.html',
  styleUrls: ['./sounpak.component.scss']
})
export class SounpakComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public gotoSelectorTool(){
    this.router.navigate(['/tools']);
  }

}
