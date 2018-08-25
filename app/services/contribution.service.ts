import Request from '../utils/request';

export interface IContribution {
  amount: number;
  contributor: IContributor;
}
interface IContributor {
  firstName: string;
  lastName: string;
  photoUrl: string;
}

export class ContributionService {
  request: Request;
  constructor() {
    this.request = new Request();
  }

  async addContribution(payload: IContribution): Promise<{ uuid: string }> {
    const response = await this.request.post('contributions', payload);
    return response && response.data;
  }

  async getContributions(): Promise<IContribution[]> {
    const response = await this.request.get('contributions');
    return response && response.data;
  }

  async removeContribution(uuid): Promise<{ ok: boolean }> {
    const response = await this.request.delete(`contributions/${uuid}`);
    return response && response.data;
  }
}
