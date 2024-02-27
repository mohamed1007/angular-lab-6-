import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  let userSerivce = inject(UserService);
  let router = inject(Router);
  if (userSerivce.isUserLogged) {
    return true;
  } else {
    alert('please Login First');
    router.navigate(['/login']);
    return false;
  }
};
