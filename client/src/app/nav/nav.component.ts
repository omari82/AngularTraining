import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import LogRocket  from 'logrocket';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
LogRocket.init('tgll4k/datingapp');

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any={}

  constructor(public accountService: AccountService, private router: Router,
     private toastr: ToastrService) { }

  ngOnInit(): void {

  }

  login(){
    this.accountService.login(this.model).subscribe(response => {
      console.log(response);
      this.router.navigateByUrl('/members');
    })
  }


    logout(){
      this.accountService.logout();
      this.router.navigateByUrl('/');
    }

    getCurrentUser(){
      this.accountService.currentUser$.subscribe(user => {
  
      }, error => {
        console.log(error);
      })
    }
}
