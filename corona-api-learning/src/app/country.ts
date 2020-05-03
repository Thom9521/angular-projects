export class Country {
  data: [
    {
      coordinates: {
        latitude: number;
        longitude: number;
      };
      number: String;
      code: String;
      population: String;
      updated_at: String;
      today: {
        deaths: number;
        confirmed: number;
      };
      latest_data: {
        deaths: number;
        confirmed: number;
        recovered: number;
        critical: number;
        calculated: {
          death_rate: number;
          recovery_rate: number;
          recovered_vs_death_ratio: number;
          cases_per_million_population: number;
        };
      };
    }
  ];
}
