export interface city {
  name: string;
  viewValue: string;
}

export interface Country {
  name: string;
  viewValue: string;

  cities: city[];
}
