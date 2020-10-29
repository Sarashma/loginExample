import { Component } from '@angular/core';
import { first } from 'rxjs/operators';

import { User } from '@app/_models';
import { UserService } from '@app/_services';

import { Router } from '@angular/router';

import { AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'home.component.html' ,
styleUrls: ['home.component.scss']})
export class HomeComponent {
    loading = false;
    users: User[];

    constructor(private userService: UserService,private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        this.loading = true;
        this.userService.getAll().pipe(first()).subscribe(users => {
            this.loading = false;
            this.users = users;
        });
    }
    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
