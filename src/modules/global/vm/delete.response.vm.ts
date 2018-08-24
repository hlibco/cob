import { ApiModelProperty } from '@nestjs/swagger';

export class DeleteResponseVm {
  @ApiModelProperty()
  public readonly ok: boolean;

  constructor(bool: boolean) {
    this.ok = bool;
  }
}
