import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

import { jqxInputComponent } from 'jqwidgets-ng/jqxinput';
import { jqxDateTimeInputComponent } from 'jqwidgets-ng/jqxdatetimeinput';
import { jqxButtonComponent } from 'jqwidgets-ng/jqxbuttons';
import { jqxFileUploadComponent } from 'jqwidgets-ng/jqxfileupload';

import { LaboratoryApiService } from '../laboratory-api.service';
import { ConnectionNotificationComponent } from 'projects/personal/src/app/suite/utilities/connection-notification/connection-notification.component';
import { LoadingSpinnerComponent } from 'projects/personal/src/app/suite/utilities/loading-spinner/loading-spinner.component';
import { DeleteConfirmComponent } from 'projects/personal/src/app/suite/utilities/delete-confirm/delete-confirm.component';

import { SelectPatientComponent } from '../select-patient/select-patient.component'
import { SelectDoctorComponent } from '../select-doctor/select-doctor.component'


@Component({
  selector: 'app-view-lab',
  templateUrl: './view-lab.component.html',
  styleUrls: ['./view-lab.component.css']
})
export class ViewLabComponent implements OnInit, AfterViewInit {

  constructor(
    private router: Router,
    private laboratoryApi: LaboratoryApiService,
  ) { }

  @ViewChild('labCodeReference') labCode: jqxInputComponent;
  @ViewChild('labDateReference') labDate: jqxDateTimeInputComponent;
  @ViewChild('patientNameReference') patientName: jqxInputComponent;
  @ViewChild('patientCodeReference') patientCode: jqxInputComponent;
  @ViewChild('doctorNameReference') doctorName: jqxInputComponent;
  @ViewChild('labTypeReference') labType: jqxInputComponent;
  @ViewChild('attachmentReference') attachmentUpload: jqxFileUploadComponent;

  @ViewChild('saveLabReference') saveButton: jqxButtonComponent;
  @ViewChild('deleteLabReference') deleteButton: jqxButtonComponent;

  @ViewChild('loadingSpinnerComponentReference') loadingSpinner: LoadingSpinnerComponent;
  @ViewChild('connectionNotificationComponentReference') connectionNotification: ConnectionNotificationComponent;
  @ViewChild('deleteConfirmComponentReference') deleteConfirmComponent: DeleteConfirmComponent;

  @ViewChild("selectPatientComponentReference") selectPatient: SelectPatientComponent;
  @ViewChild("selectDoctorComponentReference") selectDoctor: SelectDoctorComponent;

  navHeading: any[] = [
    { text: "All Laboratory", url: "/suite/laboratory/all-labs" },
    { text: "View Laboratory", url: "/suite/laboratory/view-lab" },
  ];

  // stores db table ids of selected patient and doctor
  // to be retreived for sending to backend
  patientIdStore: any;
  doctorIdStore: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.laboratoryApi.getSingleLab()
      .subscribe(
        res => {
          console.log(res);
          this.labCode.val(res.lab_code);
          this.labDate.val(res.lab_date);
          this.labType.val(res.lab_type);
          this.patientIdStore = res.patient.id;
          this.patientName.val(res.patient.patient_name);
          this.patientCode.val(res.patient.clinical_id);
          this.doctorIdStore = res.doctor.id;
          this.doctorName.val(res.doctor.doctor_name);
        },
        err => {
          console.log(err);
          this.connectionNotification.errorNotification.open();
        }
      )
  }

  patientSelected(patient: any){
    console.log(patient);

    this.patientName.val(patient.patient_name);
    this.patientCode.val(patient.clinical_id);
    this.patientIdStore = patient.id;
  }

  doctorSelected(doctor: any){
    console.log(doctor);

    this.doctorName.val(doctor.doctor_name);
    this.doctorIdStore = doctor.id;
  }

  // widgets
  // ----------------------------------------------------------------------------------------

  saveLab(){
    let labData = {
      hospital_id: sessionStorage.getItem('hospital_id'),
      lab_code: this.labCode.val(),
      lab_date: this.labDate.val(),
      lab_type: this.labType.val(),
      patient_id: this.patientIdStore,
      doctor_id: this.doctorIdStore
    }

    this.laboratoryApi.putLab(labData)
      .subscribe(
        res => {
          console.log(res);
          this.loadingSpinner.httpLoader.close();
        },
        err => {
          console.log(err);
          this.loadingSpinner.httpLoader.close();
          this.connectionNotification.errorNotification.open();
        }
      )

    console.log(labData);
  }

  deleteLab(){
    console.log("dude... u are gonna delete the lab?");

    this.deleteConfirmComponent.openWindow();
  }

  deleteConfirmationSelected(value: string){
    if (value == 'yes'){
      this.loadingSpinner.httpLoader.open();

      this.laboratoryApi.deleteLab()
        .subscribe(
          res => {
            console.log(res);
            this.loadingSpinner.httpLoader.close();

            this.router.navigateByUrl('/suite/laboratory/all-labs');
          },
          err => {
            console.log(err);
            this.loadingSpinner.httpLoader.close();
            this.connectionNotification.errorNotification.open();
          }
        )
    }
  }

}
