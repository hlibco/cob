import { ApiModelProperty } from '@nestjs/swagger';

export class UpdateResponseVm {
  @ApiModelProperty()
  public readonly ok: boolean;

  constructor(bool: boolean) {
    this.ok = bool;
  }
}
