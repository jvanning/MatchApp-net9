import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-tests-errors',
  standalone: true,
  imports: [],
  templateUrl: './tests-errors.component.html',
  styleUrl: './tests-errors.component.css'
})
export class TestsErrorsComponent {
  baseURL = environment;
  private http = inject(HttpClient);
  validationErrors:  string [] = [];
  
    get400Error(){
      this.http.get(this.baseURL + "buggy/bad-request").subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
    }
  
    get401Error(){
      this.http.get(this.baseURL + "buggy/auth").subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
    }
  
    get404Error(){
      this.http.get(this.baseURL + "buggy/not-found").subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
    }
  
    get500Error(){
      this.http.get(this.baseURL + "buggy/server-error").subscribe({
        next: response => console.log(response),
        error: error => console.log(error)
      })
    }
    get400ValidationError(){
      this.http.post(this.baseURL + "account/register", {}).subscribe({
        next: response => console.log(response),
        error: error => {
          console.log(error);
          this.validationErrors = error;
        }

      })
    }
  
}
