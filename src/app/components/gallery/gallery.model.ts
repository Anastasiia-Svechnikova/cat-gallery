export interface IBreed {
  id: string;
  name: string;
}
export interface ICat {
  url: string;
  breeds: IBreed[];
}
export interface ICatsFilters {
  breed: string;
  amount: string;
}
export type ApiResponseBreeds = Array<{
  id: string;
  name: string;
  [key: string]: any;
}>;
export type ApiResponseImages = Array<{
  url: string;
  breeds: [];
}>;
export interface InitialStateInterface {
  loading: boolean;
  data: ReadonlyArray<ICat>;
  error: '' | null;
}