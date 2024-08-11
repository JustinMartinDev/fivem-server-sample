"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.spawn = void 0;
const spawn = () => {
    const { spawnmanager } = exports;
    const spawnPos = { x: -89.07838, y: -1720.731, z: 29.16545 };
    spawnmanager.setAutoSpawnCallback(() => {
        spawnmanager.spawnPlayer({
            ...spawnPos,
            model: 'a_m_m_skater_01'
        }, () => {
            emit("chat:addMessage", {
                args: ['Welcome to the party!~']
            });
            GiveWeaponToPed(PlayerPedId(), -1074790547, 5000, false, true);
            SetEntityCanBeDamaged(GetPlayerPed(-1), false);
        });
    });
    spawnmanager.setAutoSpawn(true);
    spawnmanager.forceRespawn();
};
exports.spawn = spawn;
