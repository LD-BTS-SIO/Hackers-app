import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IHacker } from '../models/IHacker';

@Injectable({
  providedIn: 'root'
})
export class ManagerHackerService {
  private hackers: IHacker[] = [];
  editHackerEvent = new BehaviorSubject<IHacker | null>(null);

  constructor() {
    // Récupérer les hackers depuis le local storage lors de l'initialisation du service
    const hackersFromStorage = localStorage.getItem('hackers');
    if (hackersFromStorage) {
      this.hackers = JSON.parse(hackersFromStorage);
    }
  }

  addHacker(hacker: IHacker) {
    this.hackers.push(hacker);
    this.updateLocalStorage();
  }

  getHackers(): IHacker[] {
    return this.hackers.slice();
  }

  editHacker(hacker: IHacker) {
    this.editHackerEvent.next(hacker);
  }

  private updateLocalStorage() {
    localStorage.setItem('hackers', JSON.stringify(this.hackers));
  }
}
