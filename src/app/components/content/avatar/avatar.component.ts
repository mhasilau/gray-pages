import {Component, OnInit} from '@angular/core';
import  { noAvatarURL } from '../../../api/api.congif'
import {UserApiService} from "../../../api/user-api.service";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit{
  userAvatar = noAvatarURL;
  constructor(private userApiService: UserApiService) {
  }
  ngOnInit() {

    this.getAvatar();
  }

  getAvatar() {
    this.userApiService.getUserData().subscribe( result => {
      console.log(result)
      this.userAvatar = result.ava;
    })
  }
}
