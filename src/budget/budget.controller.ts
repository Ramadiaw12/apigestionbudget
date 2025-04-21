import { Controller, Post, Body } from '@nestjs/common';

@Controller('budget')
export class BudgetController {
    @Post('budgets')
    createBudget(@Body() body:any){
        console.log('Budget reçu;', boty);
        return {
            message: 'Budget créé',
            data: body,
        };
    }
    
}
