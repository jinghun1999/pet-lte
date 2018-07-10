import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {BranchService} from '../../../services';
import {Result} from '../../../models';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.css']
})
export class MemberComponent implements OnInit {

  id: string;
  data: Result;

  constructor(
    private activatedRoute: ActivatedRoute,
    private branchService: BranchService) {
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    setTimeout(() => this.getMembers());
  }

  getMembers(): void {
    this.branchService.getMembers(this.id)
      .subscribe(res => this.data = res);
  }
}
