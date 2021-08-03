import { MigrationInterface, QueryRunner } from 'typeorm';

export default class EncryptPassword1628002552939
  implements MigrationInterface {
  name = 'EncryptPassword1628002552939';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "key"`);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "student" ADD "key" integer NOT NULL`);
  }
}
