import { prop, modelOptions, arrayProp, Ref } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from './product.model';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Category {
  @ApiProperty({ description: '分类名称', example: 'cate-name' })
  @prop()
  cate_name: string;

  @ApiProperty({ description: '分类图片', example: 'cate-pic' })
  @prop()
  cate_pic: string;

  @arrayProp({ itemsRef: 'product' })
  products: Ref<Product>[];
}
