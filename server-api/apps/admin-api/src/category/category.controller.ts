import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { Category } from '@libs/db/models/category.model';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType, arrayProp } from '@typegoose/typegoose';
import { ApiTags } from '@nestjs/swagger';

@Crud({
  model: Category,
})
@Controller('category')
@ApiTags('产品分类')
export class CategoryController {
  constructor(
    @InjectModel(Category)
    private readonly model: ReturnModelType<typeof Category>,
  ) {}
}
