import { Model, ModelObject } from 'objection';
import { BOP } from '@interfaces/bop.interface';

export class BOPModel extends Model implements BOP {
  id!: number;
  name!: string;
  date!: string;
  venue!: string;

  static tableName = 'bop'; // database table name
  static idColumn = 'id'; // id column name
}

export type BOPShape = ModelObject<BOPModel>;