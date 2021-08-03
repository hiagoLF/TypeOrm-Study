import {MigrationInterface, QueryRunner} from "typeorm";

export class FixAgain1628002817588 implements MigrationInterface {
    name = 'FixAgain1628002817588'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "key" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "key"`);
    }

}
