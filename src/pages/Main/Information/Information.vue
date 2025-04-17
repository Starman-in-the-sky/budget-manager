<template>
  <div class="information">
    <div class="information__content">
      <div class="title size32">Кошелёк</div>
      <div class="information__bottom">
        <div
            v-for="(item, index) in blocks"
            :key="index"
            class="information__block"
        >
          <div class="information__block-title">{{ item.label }}</div>
          <div v-if="item.value !== undefined" class="information__block-content">
            <a-icon
              type="credit-card"
              theme="twoTone"
              two-tone-color="#1DA57A"
              class="information__block-content-icon"
            />
            <div class="information__block-content-value">
              {{ item.value }}{{ currencySign }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';

@Component
export default class Information extends Vue {
  @Getter('main/getBalance')
  userBalance!: number;

  @Getter('user/getCurrencySign')
  currencySign!: string;

  get blocks() {
    return [
      { label: 'Баланс', value: this.userBalance },
      { label: 'Счёт №1' },
      { label: 'Счёт №2' },
    ];
  }
}
</script>

<style scoped lang="scss">
.information {
  display: flex;
  height: 300px;
  width: 100%;
  border-radius: 15px;
  background-color: $secondary-color;
  padding: 24px;

  &__content {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;
  }

  &__bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
    gap: 16px;
  }

  &__block {
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 15px;
    padding: 16px;
    width: 100%;

    &-title {
      font-size: 18px;
      font-weight: 600;
      color: $font-primary-color;
    }

    &-content {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      gap: 24px;
      color: $font-primary-color;
      font-size: 32px;
      font-weight: 600;
      width: 100%;
      height: 100%;

      &-value {
        margin-bottom: 10px;
      }
    }
  }
}
</style>