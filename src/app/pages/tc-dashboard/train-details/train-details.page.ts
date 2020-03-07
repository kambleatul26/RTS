import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';


@Component({
  selector: 'app-train-details',
  templateUrl: './train-details.page.html',
  styleUrls: ['./train-details.page.scss'],
})
export class TrainDetailsPage implements OnInit {
  trainId;
  trainDet;
  coaches;
  coachData;


  coachColour = 'yellow';

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }


  ngOnInit() {
    this.dataService.presentLoading('Please Wait...');
    this.trainId = this.route.snapshot.queryParamMap.get('trainId');
    console.log(this.trainId);

    this.dataService.getTrainDetail(this.trainId).subscribe(data => {
      this.trainDet = data;
      this.coaches = this.trainDet.coaches;
      this.coachData = [this.coaches[0]];
      console.log(this.coachData);
      this.dataService.loading.dismiss();
    });
  }



  onSelectCoach(num) {
    this.coachData = this.coaches.filter(coach => coach.name === num);
    console.log(this.coachData);
  }

  checkBooked(seat) {
    if (seat.occupied) {
      this.coachColour = 'green';
    } else {
      this.coachColour = 'yellow';
    }
  }
}
