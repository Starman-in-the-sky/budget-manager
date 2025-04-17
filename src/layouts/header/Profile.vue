<template>
  <a-dropdown placement="bottomRight" trigger="click">
    <div class="profile-button" @click.prevent>
      <a-button
        type="primary"
        icon="user"
        size="large"
        class="ui-button-primary"
      />
    </div>

    <template #overlay>
      <div class="currency-dropdown">
        <a-radio-group v-model="selectedCurrencySign">
          <a-radio-button v-for="currency in currencies" :value="currency.sign">
            {{ currency.denomination }}
          </a-radio-button>
        </a-radio-group>
      </div>
    </template>
  </a-dropdown>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { State, Mutation } from "vuex-class";
import { TCurrency, ECurrenciesSigns } from "@/core/models";

@Component({})
export default class Profile extends Vue {
  @State(state => state.user.currency)
  currentCurrency!: TCurrency;

  @State(state => state.main.defaultCurrencies)
  currencies!: TCurrency[];

  @Mutation("user/setCurrency")
  setCurrency!: (currency: TCurrency) => void;

  get selectedCurrencySign(): ECurrenciesSigns {
    return this.currentCurrency.sign;
  }

  set selectedCurrencySign(sign: ECurrenciesSigns) {
    const selected = this.currencies.find(c => c.sign === sign);
    if (selected) {
      this.setCurrency(selected);
    }
  }
}
</script>

<style scoped lang="scss">
.profile-button {
  padding: 0 15px;
  cursor: pointer;
}

.currency-dropdown {
  padding: 10px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

  .ant-radio-button-wrapper {
    margin-bottom: 5px;
    display: block;
    border: 1px solid transparent;
    color: $primary-color;
    transition: all 0.3s ease;
    border-left: none !important;

    &:hover {
      border-color: $primary-color;
      color: $primary-color;
    }

    &.ant-radio-button-wrapper-checked {
      background-color: $primary-color;
      border-color: $primary-color;
      color: #fff;

      &:hover {
        background-color: darken($primary-color, 5%);
        border-color: darken($primary-color, 5%);
      }
    }
  }
  .ant-radio-button-wrapper:not(:first-child)::before {
    display: none !important;
  }
}
</style>
