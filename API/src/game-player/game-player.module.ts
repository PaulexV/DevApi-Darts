import { Module } from '@nestjs/common';
import { GamePlayerController } from './game-player.controller';
import { GamePlayerService } from './game-player.service';

@Module({
  controllers: [GamePlayerController],
  providers: [GamePlayerService]
})
export class GamePlayerModule {}
