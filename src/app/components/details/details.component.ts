import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  datailsData = {};

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getDetailsData(1).subscribe((res: any) => {
      console.log('Hello world', res);
    });
  }
}
