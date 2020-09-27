import {Component, Input, OnInit} from '@angular/core';
import {DataService} from '../services/data.service';
import {Movie} from '../models/Movie';
import {User} from '../models/User';
import {Subscription} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {UserService} from '../services/user.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public movies = {};
  currentUser: User;
  currentUserSubscription: Subscription;
  users: User[] = [];

  constructor(private dataService: DataService,
              private authService: AuthService,
              private userService: UserService) {
    this.currentUserSubscription = this.authService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit(): void {
    this.loadAllUsers();
    this.dataService.getMovies().subscribe(data => this.movies = data);
  }

  ngOnDestroy(): void {
    this.currentUserSubscription.unsubscribe();
  }

  deleteUser(id: number): void {
    this.userService.delete(id).pipe(first()).subscribe(() => {
      this.loadAllUsers();
    });
  }

  private loadAllUsers(): void {
    this.userService.getAll().pipe(first()).subscribe(users => {
      this.users = users;
    });
  }
}
