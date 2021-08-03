import dotenv from 'dotenv';
import { EncryptionTransformer } from 'typeorm-encrypted';

dotenv.config();

const MyCripto = new EncryptionTransformer({
  key: `${process.env.DB_KEY}`,
  algorithm: 'aes-256-cbc',
  ivLength: 16,
  iv: process.env.DB_IV,
});

export default MyCripto;
