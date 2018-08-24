import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contributor } from './contributor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Contributor])],
})
export class ContributorModule {}
