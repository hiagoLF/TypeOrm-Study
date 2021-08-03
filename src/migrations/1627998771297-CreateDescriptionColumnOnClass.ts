import { MigrationInterface, QueryRunner } from 'typeorm';

export default class CreateDescriptionColumnOnClass1627998771297
  implements MigrationInterface {
  name = 'CreateDescriptionColumnOnClass1627998771297';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "class" ADD "description" character varying NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "class" DROP COLUMN "description"`);
  }
}
