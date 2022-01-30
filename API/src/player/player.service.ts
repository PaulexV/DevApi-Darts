import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Player } from './player.interface';

@Injectable()
export class PlayerService {
  private players: Array<Player> = [];
  logger: any;

  public findAll(): Array<Player> {
    return this.players;
  }

  public findOne(id: number): Player {
    const player: Player = this.players.find((player) => player.id === id);

    if (!player) {
      throw new NotFoundException('Player not found.');
    }

    return player;
  }

  public create(player: Player): Player {
    // if the title is already in use by another player
    const nameExists: boolean = this.players.some(
      (item) => item.name === player.name,
    );
    if (nameExists) {
      throw new UnprocessableEntityException('Player name already exists.');
    }

    // find the next id for a new player
    const maxId: number = Math.max(
      ...this.players.map((player) => player.id),
      0,
    );
    const id: number = maxId + 1;

    const newPlayer: Player = {
      ...player,
      id,
    };

    this.players.push(newPlayer);

    return newPlayer;
  }

  public delete(id: number): void {
    const index: number = this.players.findIndex((player) => player.id === id);

    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('player not found.');
    }

    this.players.splice(index, 1);
  }

  public update(id: number, player: Player): Player {
    const index: number = this.players.findIndex((player) => player.id === id);

    // -1 is returned when no findIndex() match is found
    if (index === -1) {
      throw new NotFoundException('Player not found.');
    }

    // if the name is already in use by another player
    const nameExists: boolean = this.players.some(
      (item) => item.name === player.name && item.id !== id,
    );
    if (nameExists) {
      throw new UnprocessableEntityException('Player name already exists.');
    }

    const newPlayer: Player = {
      ...player,
      id,
    };

    this.players[index] = newPlayer;

    return newPlayer;
  }
}
