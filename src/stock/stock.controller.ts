import { Body, Controller, Get, Post, Param, UsePipes } from '@nestjs/common';
import { CreateStockDto } from './dto';
import { ChangeStringCasePipe } from 'src/pipes/change-string-case.pipe';

@Controller('stock')
export class StockController {

    @Get()
    getStock() {
        return [1, 2, 3];
    }

    @Get(':id')
    getStockById(@Param("id") stockId: number) {
        return stockId;
    }

    @Get(':id/:userId')
    getStockByIdUser(@Param("id") stockId: number, @Param("userId") userId: number) {
        return { stockId, userId };
    }

    @Post()
    @UsePipes(new ChangeStringCasePipe())
    addStock(@Body() stock: CreateStockDto) {
        console.log(stock);
    }
}
