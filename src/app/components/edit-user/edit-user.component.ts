import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userForm!: FormGroup;
  user: User | undefined;
  allPermissions = ['READ', 'WRITE', 'DELETE', 'ADMIN']; // ovo treba promeniti!!!!!!!

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = idParam ? parseInt(idParam, 10) : NaN;

    if (isNaN(id)) {
      this.router.navigate(['/allUsers']);
      return;
    }

    this.user = this.userService.getUser(id);
    if (!this.user) {
      this.router.navigate(['/allUsers']);
      return;
    }

    // Inicijalizacija forme
    this.userForm = this.fb.group({
      ime: [this.user.ime],
      prezime: [this.user.prezime],
      email: [this.user.email],
      dozvole: this.buildPermissionsFormArray()
    });
  }

  buildPermissionsFormArray(): FormArray<FormControl<boolean>> {
    return this.fb.array<FormControl<boolean>>(
      this.allPermissions.map(p =>
        new FormControl<boolean>(!!this.user?.dozvole.includes(p), { nonNullable: true })
      )
    );
  }


  get dozvoleControls(): FormControl<boolean>[] {
    return (this.userForm.get('dozvole') as FormArray<FormControl<boolean>>).controls;
  }

  onSubmit(): void {
    if (!this.userForm.valid || !this.user) return;

    const updatedUser: User = {
      ...this.user,
      ...this.userForm.value,
      dozvole: this.allPermissions.filter((_, i) => this.userForm.value.dozvole[i])
    };

    this.userService.update(updatedUser);
    this.router.navigate(['/allUsers']);
  }
}
