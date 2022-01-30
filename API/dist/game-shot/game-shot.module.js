"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameShotModule = void 0;
const common_1 = require("@nestjs/common");
const game_shot_controller_1 = require("./game-shot.controller");
const game_shot_service_1 = require("./game-shot.service");
let GameShotModule = class GameShotModule {
};
GameShotModule = __decorate([
    (0, common_1.Module)({
        controllers: [game_shot_controller_1.GameShotController],
        providers: [game_shot_service_1.GameShotService]
    })
], GameShotModule);
exports.GameShotModule = GameShotModule;
//# sourceMappingURL=game-shot.module.js.map