import { ApiModelProperty } from '@nestjs/swagger';
import { GlobalEntity } from '../global.entity';

export class CreateResponseVm {
  @ApiModelProperty()
  public readonly uuid: string;

  constructor(entity: GlobalEntity) {
    this.uuid = entity.uuid;
  }
}
