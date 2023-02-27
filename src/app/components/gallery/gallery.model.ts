export interface IBreed {
  id: string;
  name: string;
}

export type ApiResponseBreeds = Array<{
  id: string;
  name: string;
  [key: string]: any;
}>;
export interface ICat {
  url: string;
  breeds: IBreed[];
}
export type ApiResponseImages = Array<{
  url: string;
  breeds: [];
}>;

export interface ICatsFilters{
  breed: string,
  amount: string
}

