import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { BaseDTO } from "../../config/base.dto";

export class UserDTO extends BaseDTO {
  @IsNotEmpty()
  @IsString()
  name!: string;

  @IsNotEmpty()
  @IsString()
  lasName!: string;

  @IsNotEmpty()
  @IsEmail()
  @IsString()
  email!: string;

  @IsNotEmpty()
  @IsString()
  password!: string;


  @IsNotEmpty()
  @IsString()
  city!: string;

  @IsNotEmpty()
  @IsString()
  province?: string;
}
