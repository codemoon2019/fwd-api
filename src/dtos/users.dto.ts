import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public password: string;

  @IsString()
  public userid: string;

  @IsString()
  public first_name: string;

  @IsString()
  public middle_name: string;

  @IsString()
  public last_name: string;
}
