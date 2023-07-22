import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class GlobalAuthService {
  private accessKey = ''

  storeAccessKey(accessKey: string) {
    this.accessKey = accessKey
    console.log(`Stored AccessKey ${this.accessKey}`)
  }

  getAccessKey() {
    return this.accessKey
  }
}
