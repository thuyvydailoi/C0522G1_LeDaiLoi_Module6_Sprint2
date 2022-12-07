import {AlcoholType} from '../model/alcohol-type';
import {AlcoholSize} from '../model/alcohol-size';

export interface IAlcoholDto {
  id?: number;
  name?: string;
  isDelete?: boolean;
  price?: string;
  discount?: number;
  manufacturer?: string;
  image?: string;
  address?: string;
  phoneNumber?: string;
  alcoholType?: AlcoholType;
  alcoholSize?: AlcoholSize;
}
