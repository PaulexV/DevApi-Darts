import { Module } from '@nestjs/common';
import { PlayerModule } from './player/player.module';
import { GamePlayerModule } from './game-player/game-player.module';
import { GameShotModule } from './game-shot/game-shot.module';

@Module({
  imports: [PlayerModule, GamePlayerModule, GameShotModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
