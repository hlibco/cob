import {
  ContributionService,
  IContribution,
} from '../services/contribution.service';

export const state = () => ({
  contributions: [],
});

export const mutations = {
  setContributions(state, contributions) {
    state.contributions = contributions;
  },
};

export const actions = {
  async nuxtServerInit({ commit }, { app }) {},

  async addContribution(
    { commit, dispatch, state, rootState },
    payload: IContribution,
  ) {
    const contributionService = new ContributionService();
    return contributionService.addContribution(payload);
  },

  async getContributions({ commit, dispatch, state, rootState }) {
    const contributionService = new ContributionService();
    const contributions = await contributionService.getContributions();
    commit('setContributions', contributions);
  },

  async removeContribution({ commit, dispatch, state, rootState }, uuid) {
    const contributionService = new ContributionService();
    await contributionService.removeContribution(uuid);

    // Remove from the list of contributions (avoid re-fetching contributions)
    const contributions = JSON.parse(JSON.stringify(state.contributions));

    commit(
      'setContributions',
      contributions.filter(item => item.uuid !== uuid),
    );
  },
};

export const getters = {
  contributions(state) {
    return state.contributions;
  },
};
