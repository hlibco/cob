import { Column, Entity, OneToMany, JoinColumn } from 'typeorm';
import { GlobalEntity } from '../global/global.entity';
import { Contribution } from '../contribution/contribution.entity';

@Entity({ name: 'contributors' })
export class Contributor extends GlobalEntity {
  @OneToMany(() => Contribution, contribution => contribution.contributor)
  @JoinColumn()
  contributions: Promise<Contribution[]>;

  @Column({
    nullable: false,
    length: 60,
  })
  firstName: string;

  @Column({
    nullable: true,
    length: 90,
  })
  lastName: string | null;

  @Column({
    nullable: true,
  })
  photoUrl: string | null;
}
