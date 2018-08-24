import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contributor } from '../contributor/contributor.entity';
import { Contribution } from './contribution.entity';
import { ContributionService } from './contribution.service';
import { ContributionController } from './contribution.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Contribution, Contributor])],
  controllers: [ContributionController],
  providers: [ContributionService],
  exports: [ContributionService],
})
export class ContributionModule {}
