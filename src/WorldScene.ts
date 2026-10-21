import Phaser from 'phaser';
import { zones } from './data/cv';

const ZONE_W = 2000
const WORLD_W = zones.length * ZONE_W;

export class WorldScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('World');
  }

  create() {
    zones.forEach((z, i) => {
      const x = i * ZONE_W;
      this.add.rectangle(x + ZONE_W / 2, 360, ZONE_W, 720, z.color);
      this.add
        .text(x + 100, 600, `${z.name}\n${z.years}`, {
          fontSize: '32px',
          color: '#16203a',
        })
        .setOrigin(0, 1);
    });

    this.physics.world.setBounds(0, 0, WORLD_W, 720);
    this.cameras.main.setBounds(0, 0, WORLD_W, 720);

    const ground = this.add.rectangle(WORLD_W / 2, 700, WORLD_W, 40, 0x37893a); // #37893a
    this.physics.add.existing(ground, true);

    this.player = this.add.rectangle(200, 500, 32, 48, 0x3d6ee8); // #3d6ee8
    this.physics.add.existing(this.player);
    const body = this.player.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);
    this.cameras.main.startFollow(this.player, true, 0.1, 0.1)

    this.physics.add.collider(this.player, ground);

    this.cursors = this.input.keyboard!.createCursorKeys();

    const platforms = [
      this.add.rectangle(600, 540, 200, 20, 0x8d6e63), // #8d6e63
      this.add.rectangle(900, 400, 200, 20, 0x8d6e63),
      this.add.rectangle(1250, 540, 200, 20, 0x8d6e63),
    ];
    platforms.forEach((p) => this.physics.add.existing(p, true));
    this.physics.add.collider(this.player, platforms);
  }

  update() {
    const body = this.player.body as Phaser.Physics.Arcade.Body;
    const { left, right } = this.cursors;
    let dir = 0;
    if (left.isDown && right.isDown) dir = left.timeDown > right.timeDown ? -1 : 1;
    else if (left.isDown) dir = -1;
    else if (right.isDown) dir = 1;
    body.setVelocityX(dir * 500);

    if (this.cursors.up.isDown && body.blocked.down) body.setVelocityY(-760);
  }
}
