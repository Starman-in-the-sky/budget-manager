<template>
  <a-locale-provider :locale="ru_RU">
    <router-view />
  </a-locale-provider>
</template>

<script lang="ts">
import ru_RU from "ant-design-vue/es/locale/ru_RU";
import { RouterView } from "vue-router";
import { Component, Vue } from 'vue-property-decorator';
import { Action } from 'vuex-class';

@Component
export default class App extends Vue {
  ru_RU = ru_RU;

  @Action('main/getCurrencies') getCurrencies!: () => Promise<void>;

  async created() {
    try {
      await this.getCurrencies();
      console.log('Курсы валют загружены');
    } catch (e) {
      console.error('Ошибка при загрузке валют:', e);
    }
  }
}
</script>
