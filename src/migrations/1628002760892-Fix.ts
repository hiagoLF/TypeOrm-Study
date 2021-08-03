import {MigrationInterface, QueryRunner} from "typeorm";

export class Fix1628002760892 implements MigrationInterface {
    name = 'Fix1628002760892'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

}
