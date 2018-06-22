import { Component, OnInit } from '@angular/core';
import { ElectronService } from '../../providers/electron.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  badgeCount = new FormControl(0);

  ngOnInit() {
    this.badgeCount.valueChanges.subscribe(value => {
      this.electron.ipcRenderer.send('update-badge-count', {
        count: +value
      });
    });
  }

  constructor(private electron: ElectronService) {}
}
