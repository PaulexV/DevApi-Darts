import { Test, TestingModule } from '@nestjs/testing';
import { GameShotController } from './game-shot.controller';

describe('GameShotController', () => {
  let controller: GameShotController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GameShotController],
    }).compile();

    controller = module.get<GameShotController>(GameShotController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
