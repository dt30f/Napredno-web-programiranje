import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
    users: User[] = [];
    router: Router;
    ngOnInit(): void {
      this.users = this.userService.getAll();
    }

    constructor(private userService: UserService, router: Router) {
      this.router = router;
    }

    onUserClick(id: number): void {
      this.router.navigate([`/editUser/${id}`]);
    }

}
