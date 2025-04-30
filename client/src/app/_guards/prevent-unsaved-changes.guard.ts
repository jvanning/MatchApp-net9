import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component) => {
  const toastr = inject(ToastrService);
  
  if (component.editForm?.dirty) {
    return confirm("Are you sure you want to continue, unsaved changes will be lost")
    
    
  }
  
  return true;
 
}
