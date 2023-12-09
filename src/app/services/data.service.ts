import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  saveData(key: string, data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  getData(key: string): any {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  }

}
