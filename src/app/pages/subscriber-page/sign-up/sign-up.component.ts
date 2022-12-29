import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/services/users.service';
import { User } from "src/app/database/models/user.model"

@Component({
  selector: 'user-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  userForm!: FormGroup;
  userPreview$!: Observable<User>;
  checked!: boolean;
  fields = [
    {
      name: 'Identité',
      items: [
        {
          label: 'identifiant *',
          input: 'username',
          type: 'text',
          required: true,
        },
        { label: 'prénom *', input: 'firstname', type: 'text', required: true },
        { label: 'nom *', input: 'lastname', type: 'text', required: true },
      ],
    },
    {
      name: 'contact',
      items: [
        {
          label: 'adresse courriel *',
          input: 'email',
          type: 'email',
          required: true,
        },
        {
          label: 'n° de téléphone *',
          input: 'phone',
          type: 'tel',
          required: true,
        },
        {
          label: 'mot de passe *',
          input: 'password',
          type: 'password',
          required: true,
        },
      ],
    },
    {
      name: 'adresse',
      items: [
        {
          label: 'libellé de voie *',
          input: 'address',
          type: 'text',
          required: true,
        },
        {
          label: "précision (bâtiment, n° d'appartement...",
          input: 'addressMoreInfo',
          type: 'text',
          required: false,
        },
        {
          label: 'code postal *',
          input: 'postalCode',
          type: 'text',
          required: true,
        },
        { label: 'ville *', input: 'city', type: 'text', required: true },
      ],
    },
    // }
  ];

  // urlRegex?: RegExp;
  emailRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private usersService: UsersService
  ) {}

  ngOnInit() {
    this.checked = false;
    // this.urlRegex =
    //   /?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.userForm = this.formBuilder.group(
      {
        username: [null, Validators.required],
        firstname: [null, Validators.required],
        lastname: [null, Validators.required],
        email: [
          null,
          [Validators.required, Validators.pattern(this.emailRegex)],
        ],
        password: [null, Validators.required],
        phone: [null, Validators.required],
        address: [null, Validators.required],
        addressMoreInfo: [null],
        postalCode: [null, Validators.required],
        city: [null, Validators.required],
      },
      { updateOn: 'blur' }
    );
    this.userPreview$ = this.userForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        id: 0,
        creationDate: new Date(),
        rootUser: false,
      }))
    );
  }

  onSubmitForm() {
    this.usersService.addUser(this.userForm.value);
    console.table(this.userForm.value);

    this.router.navigateByUrl('');
  }


}
