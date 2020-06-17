import { Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose';
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
  ],
  providers: [DbService],
  exports: [DbService],
})
export class DbModule {}
