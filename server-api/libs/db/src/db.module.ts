import { Module, Global } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
import { User } from './models/user.model';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

const models = TypegooseModule.forFeature([User, Category, Product]);

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot(
      'mongodb://netren:open1234@192.168.101.101:27017/stock?authSource=admin',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      },
    ),
    models,
  ],
  providers: [DbService],
  exports: [DbService, models],
})
export class DbModule {}
