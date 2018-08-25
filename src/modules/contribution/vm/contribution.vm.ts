import { ApiModelProperty } from '@nestjs/swagger';
import { Contribution } from '../contribution.entity';
import { Contributor } from '../../contributor/contributor.entity';

// interface ContributionContributor {
//   firstName: string;
//   lastName: string;
//   photoUrl: string;
// }

export class ContributionContributor {
  @ApiModelProperty()
  public firstName: string | null;

  @ApiModelProperty()
  public lastName: string | null;

  @ApiModelProperty()
  public photoUrl: string | null;

  constructor(contributor: Contributor) {
    this.firstName = contributor.firstName;
    this.lastName = contributor.lastName;
    this.photoUrl = contributor.photoUrl;
  }
}

export class ContributionVm {
  @ApiModelProperty()
  public readonly uuid: string;

  @ApiModelProperty()
  public readonly amount: number;

  @ApiModelProperty()
  public readonly contributor: ContributionContributor;

  @ApiModelProperty({ type: String, format: 'date-time' })
  public readonly createdAt: Date;

  constructor(contribution: Contribution) {
    const contributor = contribution.contributor;

    this.uuid = contribution.uuid;
    this.amount = contribution.amount;
    this.createdAt = contribution.createdAt;
    this.contributor = new ContributionContributor(contributor);
  }
}
