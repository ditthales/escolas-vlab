import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { School } from './school.interface';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  private schools: School[] = [];
  private schoolsSubject: BehaviorSubject<School[]> = new BehaviorSubject<School[]>([]);
  public schoolsObservable: Observable<School[]> = this.schoolsSubject.asObservable();

  constructor(private http: HttpClient) {
    this.fetchSchools();
  }

  private fetchSchools(params?: any): void {
    const apiUrl = 'http://157.230.55.217/api/escolas';
    const options = { params: params };
  
    this.http.get<School[]>(apiUrl, options).subscribe(
      (data) => {
        this.schools = data;
        console.log('Schools fetched successfully!');
        console.log('Schools:', this.schools);
        this.schoolsSubject.next(data);
      },
      (error) => {
        console.error('Error fetching schools:', error);
      }
    );
  }
  
  

  getItems(): School[] {
    return this.schools;
  }

  searchItems(params?: any): Promise<School[]> {
    return new Promise((resolve) => {
      this.fetchSchools(params);
      this.schoolsObservable.subscribe((schools) => {
        resolve(schools);
      });
    });
  }

  searchItemsByID(query: number): Promise<School> {
    return new Promise((resolve) => {
      this.fetchSchools({ coEntidade: query });
      this.schoolsObservable.subscribe((schools) => {
        resolve(schools[0]);
      });
    });
  }
  
  searchItemsByINEPCode(query: number): School | null {
    console.log("details: ", this.schools)

    const schoolDetails: School | undefined = this.schools.find((school) => school.coEntidade === query);

    return schoolDetails || null;
  }
}
