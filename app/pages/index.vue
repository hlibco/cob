<template>
<section>
  <h1>Contributions</h1>

  <div class="canvas">
    <div class="loading" v-if="loading">Loading...</div>
    <div class="contributions" v-else-if="contributions.length > 0">
      <div class="contribution" v-for="(contribution, index) in contributions" :key="index">
        <div class="contributor_photo">
          <div class="remove" @click="removeContribution(contribution.uuid)">x</div>
          <img :src="contribution.contributor.photoUrl || 'https://regionalseminars.od.nih.gov/neworleans2017/wp-content/uploads/2015/03/user_avatar.jpg'" />
        </div>
        <div class="contributor_name">
          {{computeName(contribution.contributor)}}
        </div>
        <div class="amount">
          ${{contribution.amount}}
        </div>
      </div>
    </div>
    <div v-else>No contributions.</div>
  </div>

  <form v-on:submit.prevent="onSubmit">
    <label class="form-label" for="firstName">
      First name:
    </label>
    <input class="form-field" name="firstName" id="firstName" v-model="contribution.contributor.firstName" />

    <label class="form-label" for="lastname">
      Last name:
    </label>
    <input class="form-field" name="lastname" id="lastname"  v-model="contribution.contributor.lastName" />

    <label class="form-label" for="photoUrl">
      Photo URL:
    </label>
    <input class="form-field" name="photoUrl" id="photoUrl"  v-model="contribution.contributor.photoUrl" />

    <label class="form-label" for="amount">
      Amount:
    </label>
    <input class="form-field" name="amount" id="amount" v-model="contribution.amount" />

    <button type="submit" @click="addContribution()">Add Contribution</button>
  </form>
</section>
</template>

<script lang="ts">
export default {
  components: {},
  data() {
    return {
      contribution: {
        amount: null,
        contributor: {
          firstName: null,
          lastName: null,
          photoUrl: null,
        },
      },
      contributions: [],
      loading: true,
    };
  },
  async created() {
    await this.getContributions();
    this.free();
  },
  methods: {
    async addContribution() {
      try {
        await this.$store.dispatch('addContribution', this.contribution);
        // Re-fetch contributions
        await this.getContributions();
      } catch (err) {
        console.log('ERRO index.vue....', err);
      }
    },
    async getContributions() {
      console.log('Fetching contributions...');
      this.busy();
      try {
        await this.$store.dispatch('getContributions', this.filters);
        this.contributions = this.$store.getters.contributions.slice(0, 6);
      } catch (err) {
        console.log('ERRO index.vue....', err);
      }
      this.free();
    },
    async removeContribution(uuid) {
      try {
        await this.$store.dispatch('removeContribution', uuid);
        this.contributions = this.$store.getters.contributions.slice(0, 6);
      } catch (err) {
        console.log('ERRO index.vue....', err);
      }
    },
    computeName(contributor) {
      return (contributor.firstName + ' ' + contributor.lastName).trim();
    },
    async busy() {
      this.loading = true;
    },
    async free() {
      this.loading = false;
    },
  },
};
</script>

<style src="./index.styl" lang="stylus"></style>
