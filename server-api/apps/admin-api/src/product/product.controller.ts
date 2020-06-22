import { Controller } from '@nestjs/common';
import { Product } from '@libs/db/models/product.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose';
import { Crud } from 'nestjs-mongoose-crud';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Product,
})
@Controller('product')
@ApiTags('产品列表')
export class ProductController {
  constructor(
    @InjectModel(Product)
    private readonly model: ReturnModelType<typeof Product>,
  ) {}
}
