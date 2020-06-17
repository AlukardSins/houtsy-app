import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {

  constructor(private auth: AuthService, private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    Swal.fire({
      allowOutsideClick: false,
      title: 'Cargando...',
      text: 'Espere un momento por favor...',
      icon: 'info',
    });
    Swal.showLoading();
    this.auth.userProfile$.subscribe((perfil: any) => {
      if (perfil) {
        this.userService.login(perfil.email).subscribe((res: any) => {
          if(!res){
              Swal.fire({
                allowOutsideClick: false,
                title: 'Error',
                text: 'Error al ingresar, verifique su correo.',
                icon: 'error',
                showConfirmButton: true
              }).then(()=>{
                this.auth.logout();
                this.redireccionar();
              })
          }
          
          localStorage.setItem('userToken', res.data.user[0]._id);
          Swal.close();
          Swal.fire({
            allowOutsideClick: false,
            title: 'Ingreso existoso',
            text: 'Click  en continuar',
            icon: 'success',
            showConfirmButton: true,
          }).then(()=>{
            this.redireccionar();
          });
        })
      }   
    });
  }


  redireccionar(){
    this.router.navigateByUrl('/users');
  }

}
