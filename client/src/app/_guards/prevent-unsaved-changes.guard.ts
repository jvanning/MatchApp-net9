import { inject } from '@angular/core';
import { CanDeactivateFn } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';

export const preventUnsavedChangesGuard: CanDeactivateFn<MemberEditComponent> = (component, currentRoute, currentState, nextState) => {
  const toastr = inject(ToastrService);
  



  if (true) {
    console.log('test')
    
    return true;
  }else{
    console.log('test')
    toastr.error('You have not saved your changes');
    return false;
 }
  
  return true;
 
}
