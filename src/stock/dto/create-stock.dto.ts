import { IsString, IsNumber, IsNotEmpty } from "class-validator";

export class CreateStockDto {
    @IsString()
    name: string;

    @IsNotEmpty()
    price: number;

    stock: number;
}