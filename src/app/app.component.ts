import { Component } from '@angular/core';
import { SourceService } from './_services/source.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PortfolioAngular';

  constructor(private sourceService: SourceService) {

  }
  ngOnInit(): void {

    this.sourceService.getIPAddress().subscribe(res => {

      this.sourceService.postSource(res.ip, this.sourceService.getBrowserName()).subscribe(res => {

        //console.log(res);

      }, err => {
        console.log(err);
      })

    }, err => {
      console.log(err);
    })


  }


}


