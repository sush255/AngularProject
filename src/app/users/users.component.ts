import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component,OnInit  } from '@angular/core';
import { AuthService } from '../services/auth.service';
import * as $ from 'jquery'; 

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements AfterViewInit {
  users: any[] = []; // To store the list of users

  constructor(private http: HttpClient, private authService: AuthService) {}
  ngOnInit() {
    this.loadUsers();
    // console.log('jQuery:', $); // Check if jQuery is loaded
    // console.log('DataTables:', $.fn.DataTable); // Check if DataTables function is available
  
    // $('#usersTable').DataTable(); // Initialize DataTable
  }

  ngAfterViewInit(): void {
    console.log('jQuery:', $); // This will log the jQuery object
    console.log('DataTables:', $.fn.DataTable); // This will log the DataTables function
  
    // Initialize DataTable directly
    //$('#usersTable').DataTable(); // Initialize DataTable
  }

  loadUsers() {
    this.authService.getUsers().subscribe(
      (response: any) => {
        this.users = response; // Assign the array of users to the `users` variable
        // setTimeout(() => {
        //   ($ as any).default('#usersTable').DataTable(); // Initialize DataTable
        // }, 0);
      },
      (error) => {
        console.error('Error loading users:', error);
      }
    );
  }
}