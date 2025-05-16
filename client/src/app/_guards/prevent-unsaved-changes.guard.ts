import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { ConfirmService } from '../_services/confirm.service';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  const toastr = inject(ToastrService);
  const confirmService = inject(ConfirmService);

  if (component.editForm?.dirty) {
    return confirmService.confirm() ?? false
    
    
  }
  
  return true;
 
}
