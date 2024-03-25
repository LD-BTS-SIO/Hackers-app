// hacker-form.component.ts

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ManagerHackerService } from '../../service/manager-hacker.service';
import { IHacker } from '../../models/IHacker';
import { Hacker } from '../../models/Hacker';

@Component({
  selector: 'app-hacker-form',
  templateUrl: './hacker-form.component.html',
  styleUrls: ['./hacker-form.component.css']
})
export class HackerFormComponent {
  hackerForm = new FormGroup({ 
    ip: new FormControl(''),
    country_name: new FormControl(''),
    region_name: new FormControl(''),
    city: new FormControl('')
  });

  constructor(private managerHackerService: ManagerHackerService) {}

  private hackerForm_to_hacker(): IHacker {
    return new Hacker(this.hackerForm.controls.ip.value ?? '',
    this.hackerForm.controls.country_name.value ?? '',
    this.hackerForm.controls.region_name.value ?? '',
    this.hackerForm.controls.city.value ?? '',
    )
    }

  getInfoByIP() {
    let formIp = this.hackerForm.controls.ip.getRawValue() ?? ''; 
  }
  onSubmit() { 
    const hackerData = this.hackerForm_to_hacker()

    // Récupérer les hackers existants depuis le service
    let hackers = this.managerHackerService.getHackers();

    // Ajouter le nouveau hacker à la liste
    hackers.push(hackerData);

    // Sauvegarder la liste mise à jour dans le local storage
    localStorage.setItem('badguys', JSON.stringify(hackers));

    // Mettre à jour la liste des hackers dans le service
    this.managerHackerService.editHacker(hackerData);

    // Réinitialiser le formulaire
    this.hackerForm.reset();
  }


  private hacker_to_hackerForm(hacker: IHacker): void {
    this.hackerForm.patchValue({ 
    ip: hacker.ip,
    // à compléter !
    })
    }
  clear() { 
    this.hackerForm.controls.ip.setValue("IP à renseigner") 
    console.log("cancel")
    console.log(this.hackerForm.value)
  }
  }
