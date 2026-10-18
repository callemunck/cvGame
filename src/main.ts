import Phaser from 'phaser';
import { WorldScene } from './WorldScene';

new Phaser.Game({
  type: Phaser.AUTO,
  width: 1280,
  height: 720,
  backgroundColor: '#87ceeb',
  physics: { default: 'arcade', arcade: { gravity: { x: 0, y: 1500 } } },
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH },
  scene: [WorldScene],
});
