import Phaser from 'phaser';

export class WorldScene extends Phaser.Scene {
  private player!: Phaser.GameObjects.Rectangle;
  private cursors!: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('World');
  }

  create() {
    const ground = this.add.rectangle(640, 700, 1280, 40, 0x4caf50);
    this.physics.add.existing(ground, true);

    this.player = this.add.rectangle(200, 500, 32, 48, 0x3d6ee8);
    this.physics.add.existing(this.player);
    this.physics.add.collider(this.player, ground);

    this.cursors = this.input.keyboard!.createCursorKeys();
  }

  update() {
    const body = this.player.body as Phaser.Physics.Arcade.Body;
    const { left, right } = this.cursors;
    let dir = 0;
    if (left.isDown && right.isDown) dir = left.timeDown > right.timeDown ? -1 : 1;
    else if (left.isDown) dir = -1;
    else if (right.isDown) dir = 1;
    body.setVelocityX(dir * 500);

    if (this.cursors.up.isDown && body.blocked.down) body.setVelocityY(-700);
  }
}
