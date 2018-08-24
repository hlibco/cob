import { Repository, getManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Contribution } from './contribution.entity';
import { CreateContributionDto } from './dto/create.contribution.dto';
import { Contributor } from '../contributor/contributor.entity';

@Injectable()
export class ContributionService {
  constructor(
    @InjectRepository(Contribution)
    private readonly contributionRepository: Repository<Contribution>,
  ) {}

  async create(
    createContributionDto: CreateContributionDto,
  ): Promise<Contribution> {
    let contribution: Contribution;

    await getManager().transaction(async transactionalEntityManager => {
      const contributor = new Contributor();
      contributor.firstName = createContributionDto.contributor.firstName;
      contributor.lastName = createContributionDto.contributor.lastName;
      contributor.photoUrl = createContributionDto.contributor.photoUrl;
      await transactionalEntityManager.save(contributor);

      contribution = new Contribution();
      contribution.amount = createContributionDto.amount;
      contribution.contributor = contributor;
      await transactionalEntityManager.save(contribution);
    });
    return contribution;
  }

  async find(
    criteria?: Partial<Contribution>,
    limit = 12,
    offset = 0,
  ): Promise<Contribution[]> {
    return this.contributionRepository.find({
      where: {
        deletedAt: null,
        ...criteria,
      },
      skip: offset,
      take: limit,
    });
  }

  async remove(uuid: string) {
    return await getManager()
      .createQueryBuilder()
      .update(Contribution)
      .set({ deletedAt: new Date() })
      .where('uuid = :uuid', { uuid })
      .execute();
  }
}
