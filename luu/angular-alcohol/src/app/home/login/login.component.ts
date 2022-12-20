import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../service/user.service';
import Swal from 'sweetalert2';
import {TokenStorageService} from '../../service/token-storage.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  username: string;
  userGroup: FormGroup;

  constructor(private user: UserService,
              private router: Router,
              private tokenStorageService: TokenStorageService,
              private formBuild: FormBuilder,
              private route: ActivatedRoute) {
    this.userGroup = this.formBuild.group({
        username: [''],
        password: [''],
      }
    );
  }

  ngOnInit(): void {
    this.userGroup = this.formBuild.group({
      username: [''],
      password: [''],
    });
    this.username = '';
    this.showUsername();
    // console.log(this.userGroup);
  }

  showUsername() {
    if (this.tokenStorageService.getUser() != null) {
      this.username = this.tokenStorageService.getUser().username;
    }
  }

  // logOut(): void {
  //   this.user.signOut().then(
  //     data => {
  //       this.tokenStorageService.logOut();
  //       window.location.reload();
  //     }
  //   );
  // }

  // onSubmit() {
  //   this.user.login(this.userGroup.value).subscribe();
  //   Swal.fire({
  //     position: 'center',
  //     icon: 'success',
  //     text: 'asd',
  //     title: 'Đăng nhập thành công',
  //     showConfirmButton: false,
  //     timer: 2700
  //   });
  //   this.router.navigateByUrl('');
  // }

  onSubmit() {
    this.user.login(this.userGroup.value).subscribe(
      data => {
        this.tokenStorageService.saveUserLocal(data);
        this.userGroup.reset();

        // console.log('ffff');
        // console.log(data);
        // this.username = this.tokenStorageService.getUser().username;
        Swal.fire({
          position: 'center',
          icon: 'success',
          text: 'asd',
          title: 'Đăng nhập thành công',
          showConfirmButton: false,
          timer: 2700
        });
        this.router.navigateByUrl('');
        window.location.replace('');
      },
      err => {
        console.log('abc');
        Swal.fire({
          position: 'center',
          icon: 'warning',
          title: 'Người dùng/ mật khẩu không hợp lệ. Vui lòng thử lại!',
          showConfirmButton: false,
          timer: 2000
        });
      }
    );
  }
}


