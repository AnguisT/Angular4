import {Component, Input, OnInit} from '@angular/core';
import {PropertyService} from "../../service/property-service";
import {Country} from "../../shared/country";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {
  @Input() countries: Country;
  private sub: any;

  constructor(private _properService: PropertyService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      let id = +params['id'];
      console.log(id);
      this._properService.getOneCountry(id).subscribe(res => this.countries = res);
    });
    console.log(this.countries);
  }

}
