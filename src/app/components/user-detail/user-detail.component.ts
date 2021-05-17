import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WebRequestService } from 'src/app/shared/web-request.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  userId: number;
  user: any;

  constructor(private webRequest: WebRequestService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Get user id
    this.route.params.subscribe((param: any) => {
      this.userId = param.id;
    })

    // Get user details
    this.webRequest.get(`users/${this.userId}`).subscribe((user: any) => {
      this.user = user.data;
    })
  }
}
