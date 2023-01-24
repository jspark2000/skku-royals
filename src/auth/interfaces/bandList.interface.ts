export interface BandList {
  result_code: number;
  result_data: {
    bands: Band[];
  };
}

interface Band {
  name: string;
  band_key: string;
  cover: string;
  member_count: number;
}
