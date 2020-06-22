import { prop, modelOptions } from '@typegoose/typegoose';
import { ApiProperty } from '@nestjs/swagger';

@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
})
export class Product {
  @ApiProperty({ description: '产品名称', example: 'pro_name' })
  @prop()
  pro_name: string;

  @ApiProperty({ description: '产品图片', example: 'pro_pic' })
  @prop()
  pro_pic: string;
}
