import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

class CreateContributionContributorDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly firstName: string;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly lastName: string;

  @ApiModelPropertyOptional()
  readonly photoUrl?: string;
}

export class CreateContributionDto {
  @ApiModelProperty()
  @IsNotEmpty()
  readonly contributor!: CreateContributionContributorDto;

  @ApiModelProperty()
  @IsNotEmpty()
  readonly amount!: number;
}
