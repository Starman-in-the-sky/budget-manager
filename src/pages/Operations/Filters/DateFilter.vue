<template>
  <div class="date-filter">
    <a-date-picker
      show-time
      format="DD-MM-YYYY HH:mm:ss"
      placeholder="От"
      size="large"
      class="date-input"
    />
    <a-date-picker
      show-time
      format="DD-MM-YYYY HH:mm:ss"
      placeholder="До"
      size="large"
      class="date-input"
    />
  </div>
</template>

<script lang="ts">
import {Vue, Component} from 'vue-property-decorator';

@Component({})
export default class CategoryType extends Vue {

}
</script>

<style scoped lang="scss">
.date-filter {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 318px;
}

.date-input {
  ::v-deep .ant-calendar-picker-input {
    width: 100%;
    border-radius: 15px !important;
    border: 1px solid $primary-color !important;
    transition: all 0.3s ease;
    padding: 5px 12px;
  }

  ::v-deep .ant-calendar-picker-clear,
  ::v-deep .ant-calendar-picker-icon {
    color: $primary-color;
  }

  ::v-deep .ant-calendar-picker-input:focus {
    border-color: $primary-color !important;
    box-shadow: 0 0 0 2px rgba($primary-color, 0.2) !important;
  }
}
</style>