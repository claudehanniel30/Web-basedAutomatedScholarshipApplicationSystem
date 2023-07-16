import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';

import { FolderPage } from './folder.page';

import { ProfileComponent } from '../profile/profile.component';

import { StatusComponent } from '../status/status.component';

import { RequirementsComponent } from '../requirements/requirements.component';

import { SubmitComponent } from '../submit/submit.component';

import { NotificationsComponent } from '../notifications/notifications.component';

import { MessagesComponent } from '../messages/messages.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from '../home/home.component';
import { ApplicantRecordsComponent } from '../applicant-records/applicant-records.component';
import { ApplicationListComponent } from '../application-list/application-list.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FolderPageRoutingModule,
    HttpClientModule,
  ],
  declarations: [
    FolderPage,
    HomeComponent,
    ProfileComponent,
    StatusComponent,
    RequirementsComponent,
    SubmitComponent,
    NotificationsComponent,
    MessagesComponent,
    ApplicantRecordsComponent,
    ApplicationListComponent,
  ],
})
export class FolderPageModule {}
