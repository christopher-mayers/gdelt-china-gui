import { Injectable, Inject } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

const STORAGE_KEY = 'data';

@Injectable()
export class LocalStorageService {

  pressOrigin = [];
  cameoCode = [];
  eventLocation = [];
  otherActor = [];

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  // public storeOnLocalStorage(pressOrigin: string): void{
  //   const currentSelection = this.storage.get(STORAGE_KEY) || [];
  //   currentSelection.push({
  //     superSet: pressOrigin,
  //   });
  //   this.storage.set(STORAGE_KEY,   pressOrigin);
  //   console.log(this.storage.get(STORAGE_KEY) || 'Local storage is empty'); 
  // }
}
