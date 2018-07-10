import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BranchService} from '../../../services';
import {Result} from '../../../models';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  id: string;
  data: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => this.getBoard());
  }

  getBoard(): void {
    this.branchService.getBoard(this.id)
      .subscribe(res => this.data = res);
  }
}
