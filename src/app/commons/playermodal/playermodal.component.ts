import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-playermodal',
  templateUrl: './playermodal.component.html',
  styleUrls: ['./playermodal.component.scss']
})
export class PlayermodalComponent implements OnInit {

  @Output() closePlayer = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closePlayerModal () {
    this.closePlayer.emit(false);
  }

}
