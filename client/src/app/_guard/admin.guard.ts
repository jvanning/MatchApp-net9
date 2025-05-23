import { CanActivateFn } from '@angular/router';
import { AccountsService } from '../_services/accounts.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export const adminGuard: CanActivateFn = (route, state) => {
  const accountService = inject(AccountsService);
  const toastr =  inject(ToastrService);

  if (accountService.roles().includes('Admin') || accountService.roles().includes('Moderator'))
  {
    return true;
  } else {
    toastr.error('You cannot enter this area');
    return false;
  }
};
