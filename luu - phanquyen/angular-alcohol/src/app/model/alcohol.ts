import {AlcoholType} from './alcohol-type';
import {AlcoholSize} from './alcohol-size';

export interface Alcohol {

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
