import { IsEmail, IsString } from 'class-validator';

export class CreateRecruiterApplicationDTO {

    @IsString()
    public first_name: string;

    @IsString()
    public middle_name: string;

    @IsString()
    public last_name: string;

    @IsString()
    public suffix: string;

    @IsString()
    public mobile_number: string;

    @IsEmail()
    public email: string;

    @IsString()
    public province: string;

    @IsString()
    public city: string;

    @IsString()
    public isPlanToAttend: string;

    @IsString()
    public bop: string;

    @IsString()
    public isRecruit: string;

    @IsString()
    public recruiter: string;

    @IsString()
    public branch: string;

}