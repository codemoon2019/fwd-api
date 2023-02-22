import { Model, ModelObject } from 'objection';
import { RecruitmentFormData } from '@interfaces/recruitment.interface';

export class Recruitments extends Model implements RecruitmentFormData {
  id!: number;
  first_name!: string;
  middle_name!: string;
  last_name!: string;
  suffix!: string;
  mobile_number!: string;
  email!: string;
  province!: string;
  city!: string;
  isPlanToAttend!: string;
  bop!: string;
  isRecruit!: string;
  recruiter!: string;
  branch!: string;

  static tableName = 'recruits'; // database table name
  static idColumn = 'id'; // id column name
}

export type RecruitmentsShape = ModelObject<Recruitments>;