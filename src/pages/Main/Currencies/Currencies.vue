<template>
  <div class="currencies">
    <div class="title size28">Валюта</div>
    <div class="currencies-content">
      <a-input class="currencies-content__item"/>
      <a-input class="currencies-content__item"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class Currencies extends Vue {

}
</script>

<style scoped lang="scss">
.currencies {
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  height: 160px;
  width: 100%;
  border-radius: 15px;
  background-color: #fff;
  padding: 24px;
  gap: 10px;
  &-content {
    width: 100%;
    padding: 0 50px;
    display: flex;
    justify-content: space-between;
    gap: 24px;
    &__item {
      height: 60px;
      border-radius: 15px;
      border-width: 2px;
      border-color: $primary-color;
    }
  }
}
</style>