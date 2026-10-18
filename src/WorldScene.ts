import Phaser from 'phaser';

export class WorldScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;

  constructor() {
    super('World');
  }

  create() {
    const ground = this.add.rectangle(640, 700, 1280, 40, 0x4caf50);
    this.physics.add.existing(ground, true);

    this.player = this.add.rectangle(200, 500, 32, 48, 0x3d6ee8);
    this.physics.add.existing(this.player);
    this.physics.add.collider(this.player, ground);
  }
}
