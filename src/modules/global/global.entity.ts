import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  Generated,
  Column,
  BaseEntity,
} from 'typeorm';

export class GlobalEntity extends BaseEntity {
  @PrimaryGeneratedColumn({ unsigned: true })
  id: number;

  @Column({ nullable: false, length: 36 })
  @Generated('uuid')
  uuid: string;

  @CreateDateColumn()
  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @UpdateDateColumn()
  @Column({
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column({ nullable: true })
  deletedAt: Date | null;
}
