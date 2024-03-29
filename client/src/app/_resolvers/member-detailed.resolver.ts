import { MembersService } from 'src/app/_services/members.service';
import { Member } from 'src/app/_models/members';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member>  {

    constructor(private memberService: MembersService){}

    resolve(route: ActivatedRouteSnapshot): Observable<Member>{
       return  this.memberService.getMember(route.paramMap.get('username'));
    }
    
}