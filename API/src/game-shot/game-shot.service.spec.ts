import { Test, TestingModule } from '@nestjs/testing';
import { GameShotService } from './game-shot.service';

describe('GameShotService', () => {
  let service: GameShotService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GameShotService],
    }).compile();

    service = module.get<GameShotService>(GameShotService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
