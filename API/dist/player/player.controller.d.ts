import { Player } from './player.interface';
import { PlayerService } from './player.service';
export declare class PlayerController {
    private readonly playerService;
    constructor(playerService: PlayerService);
    findAll(): Array<Player>;
    findOne(id: number): Player;
    create(post: Player): Player;
    delete(id: number): void;
    update(id: number, player: Player): Player;
}
