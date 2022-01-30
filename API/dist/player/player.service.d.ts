import { Player } from './player.interface';
export declare class PlayerService {
    private players;
    logger: any;
    findAll(): Array<Player>;
    findOne(id: number): Player;
    create(player: Player): Player;
    delete(id: number): void;
    update(id: number, player: Player): Player;
}
