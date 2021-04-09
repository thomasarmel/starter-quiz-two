import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  /**
   * Services Documentation:
   * https://angular.io/docs/ts/latest/tutorial/toh-pt4.html
   */

   /**
    * The list of quiz.
    * The list is retrieved from the mock.
    */
  private users: User[] = [];

  /**
   * Observable which contains the list of the quiz.
   * Naming convention: Add '$' at the end of the variable name to highlight it as an Observable.
   */
  public users$: BehaviorSubject<User[]> = new BehaviorSubject(this.users);

  constructor(private http: HttpClient) {
    this.getUsers();
  }

  getUsers() {
    const urlToCall="http://localhost:9428/api/users"
    return this.http.get<User[]>(urlToCall).subscribe((tickets) => {
      this.users = tickets;
      this.users$.next(tickets);
    });
  }

  addUser(user: User) {
    // More info: https://angular.io/tutorial/toh-pt6#the-searchterms-rxjs-subject
    const urlToCall="http://localhost:9428/api/users"
    return this.http.post<User>(urlToCall, user).subscribe(
        () => {
          this.getUsers();
        },
        (error) => {
          console.log('Erreur adding user: ' + error);
        }
      );
    //this.getUsers();
    /*this.users.push(user);
    this.users$.next(this.users);*/
  }

  deleteUser(user: User) {
    let id=user
    const urlToCall="http://localhost:9428/api/users/"+user.id
    return this.http.delete(urlToCall).subscribe(
      () => {
        this.getUsers();
      },
      (error) => {
        console.log('Erreur deleting user: ' + error);
      }
    );
    /*let index = this.users.indexOf(user);
    if(index > -1) {
      this.users.splice(index, 1);
    }
    this.users$.next(this.users);*/
  }
}
