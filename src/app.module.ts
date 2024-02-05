import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';

//documentacion en https://docs.nestjs.com/techniques/mongodb


@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {

 
 }