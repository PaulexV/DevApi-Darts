import { Module } from '@nestjs/common';
import { GameShotController } from './game-shot.controller';
import { GameShotService } from './game-shot.service';

@Module({
  controllers: [GameShotController],
  providers: [GameShotService]
})
export class GameShotModule {}
