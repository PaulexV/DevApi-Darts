"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerService = void 0;
const common_1 = require("@nestjs/common");
let PlayerService = class PlayerService {
    constructor() {
        this.players = [];
    }
    findAll() {
        return this.players;
    }
    findOne(id) {
        const player = this.players.find((player) => player.id === id);
        if (!player) {
            throw new common_1.NotFoundException('Player not found.');
        }
        return player;
    }
    create(player) {
        const nameExists = this.players.some((item) => item.name === player.name);
        if (nameExists) {
            throw new common_1.UnprocessableEntityException('Player name already exists.');
        }
        const maxId = Math.max(...this.players.map((player) => player.id), 0);
        const id = maxId + 1;
        const newPlayer = Object.assign(Object.assign({}, player), { id });
        this.players.push(newPlayer);
        return newPlayer;
    }
    delete(id) {
        const index = this.players.findIndex((player) => player.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('player not found.');
        }
        this.players.splice(index, 1);
    }
    update(id, player) {
        const index = this.players.findIndex((player) => player.id === id);
        if (index === -1) {
            throw new common_1.NotFoundException('Player not found.');
        }
        const nameExists = this.players.some((item) => item.name === player.name && item.id !== id);
        if (nameExists) {
            throw new common_1.UnprocessableEntityException('Player name already exists.');
        }
        const newPlayer = Object.assign(Object.assign({}, player), { id });
        this.players[index] = newPlayer;
        return newPlayer;
    }
};
PlayerService = __decorate([
    (0, common_1.Injectable)()
], PlayerService);
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map