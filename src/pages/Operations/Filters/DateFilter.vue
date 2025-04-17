<template>
  <div class="date-filter">
    <a-date-picker
      v-model="dateFrom"
      show-time
      format="DD-MM-YYYY HH:mm:ss"
      placeholder="От"
      size="large"
      class="date-input"
    />
    <a-date-picker
      v-model="dateTo"
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
import { State, Mutation } from "vuex-class";
import moment, { Moment } from "moment";

@Component({})
export default class DateFilter extends Vue {
  @State((state: any) => state.history.filters.dateFrom)
  dateFromState!: string;

  @State((state: any) => state.history.filters.dateTo)
  dateToState!: string;

  @Mutation('history/changeDateFromFilter')
  changeDateFromFilter!: (value: string) => void;

  @Mutation('history/changeDateToFilter')
  changeDateToFilter!: (value: string) => void;

  get dateFrom(): Moment | null {
    return this.dateFromState ? moment(this.dateFromState, 'DD-MM-YYYY HH:mm:ss') : null;
  }
  set dateFrom(value: Moment | null) {
    const formatted = value ? value.format('DD-MM-YYYY HH:mm:ss') : '';
    this.changeDateFromFilter(formatted);
  }

  get dateTo(): Moment | null {
    return this.dateToState ? moment(this.dateToState, 'DD-MM-YYYY HH:mm:ss') : null;
  }
  set dateTo(value: Moment | null) {
    const formatted = value ? value.format('DD-MM-YYYY HH:mm:ss') : '';
    this.changeDateToFilter(formatted);
  }
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