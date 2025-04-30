import { HttpClient} from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment';
import { Member } from '../_models/member';
import { of, tap } from 'rxjs';
import { Photo } from '../_models/photo';
 

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  private http = inject(HttpClient)
  baseURL = environment.apiURL;
  members = signal<Member[]>([]);

  getMembers(){
    return this.http.get<Member[]>(this.baseURL + 'users').subscribe({
      next: members => this.members.set(members)
    });
  }

  getMember(userName: string){
    const member = this.members().find(x => x.userName == userName)
    if(member !== undefined) return of(member);

    return this.http.get<Member>(this.baseURL + 'users/' + userName)
  }

  updatemember(member: Member){

    return this.http.put(this.baseURL + 'users',member).pipe(
      tap(() => {
        this.members.update(members => members.map(m => m.userName === member.userName ? member : m))
      })
    )
  }

  setMainPhoto(photo: Photo){
    return this.http.put(this.baseURL + 'users/set-main-photo/' + photo.id, {}).pipe(
      tap(() => {
        this.members.update(members => members.map(m => {
          if (m.photos.includes(photo)) {
            m.photoUrl = photo.url
          }
          return m;
        }))
      })
    )
  }

  deletePhoto(photo: Photo){
    return this.http.delete(this.baseURL + 'users/delete-photo/' + photo.id).pipe(
    tap(() => {
      this.members.update(members => members.map(m => {
        if (m.photos.includes(photo)) {
          m.photos = m.photos.filter(x => x.id !== photo.id)
        }
        return m
      }))
    })
  )
  }
}
  
