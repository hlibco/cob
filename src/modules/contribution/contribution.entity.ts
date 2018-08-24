import { Column, Entity, ManyToOne, JoinColumn } from 'typeorm';
import { GlobalEntity } from '../global/global.entity';
import { Contributor } from '../contributor/contributor.entity';

@Entity({ name: 'contributions' })
export class Contribution extends GlobalEntity {
  @ManyToOne(() => Contributor, contributor => contributor.contributions, {
    eager: true,
  })
  @JoinColumn()
  contributor: Contributor;

  @Column({
    nullable: false,
    unsigned: true,
  })
  amount: number;
}
