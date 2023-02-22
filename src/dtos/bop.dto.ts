import { IsString } from 'class-validator';

export class CreateBOPDTO {

  @IsString()
  public name: string;

  @IsString()
  public date: string;

  @IsString()
  public venue: string;

}
