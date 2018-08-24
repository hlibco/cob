import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  ValidationPipe,
  HttpStatus,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { CreateResponseVm, DeleteResponseVm } from '../global/vm';
import { CreateContributionDto } from './dto/create.contribution.dto';
import { ContributionService } from './contribution.service';
import { ContributionVm } from './vm/contribution.vm';
@ApiUseTags('contributions')
@Controller('/contributions')
export class ContributionController {
  constructor(private contributionService: ContributionService) {}

  @Post()
  @ApiOperation({ title: 'Create Contribution' })
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Contribution Created.',
    type: CreateResponseVm,
  })
  async create(
    @Body(new ValidationPipe()) createContributionDto: CreateContributionDto,
  ): Promise<CreateResponseVm> {
    // @TODO Sanitize createContributionDto
    const contribution = await this.contributionService.create(
      createContributionDto,
    );
    return new CreateResponseVm(contribution);
  }

  @Get()
  @ApiOperation({ title: 'List All Contributions' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Contributions Found or Empty List.',
    isArray: true,
    type: ContributionVm,
  })
  async find(): Promise<ContributionVm[]> {
    const contributions = await this.contributionService.find();
    return contributions.map(item => new ContributionVm(item));
  }

  @Delete('/:uuid')
  @ApiOperation({ title: 'Delete Contribution' })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Contribution Deleted.',
    type: DeleteResponseVm,
  })
  async remove(@Param('uuid') uuid: string): Promise<DeleteResponseVm> {
    await this.contributionService.remove(uuid);
    return new DeleteResponseVm(true);
  }
}
