import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { UserService } from '../user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { SessionSerializer } from './session.serializer';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    UserModule,
    PassportModule,
  ],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, UserService, SessionSerializer],
})
export class AuthModule {}