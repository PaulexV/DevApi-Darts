import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Player } from './player.interface';
import { PlayerService } from './player.service';

@Controller('player')
export class PlayerController {
  constructor(private readonly playerService: PlayerService) {}

  @Get()
  public findAll(): Array<Player> {
    return this.playerService.findAll();
  }

  @Get(':id')
  public findOne(@Param('id', ParseIntPipe) id: number): Player {
    return this.playerService.findOne(id);
  }

  @Post()
  public create(@Body() post: Player): Player {
    return this.playerService.create(post);
  }

  @Delete(':id')
  public delete(@Param('id', ParseIntPipe) id: number): void {
    this.playerService.delete(id);
  }

  @Put(':id')
  public update(
    @Param('id', ParseIntPipe) id: number,
    @Body() player: Player,
  ): Player {
    return this.playerService.update(id, player);
  }
}
