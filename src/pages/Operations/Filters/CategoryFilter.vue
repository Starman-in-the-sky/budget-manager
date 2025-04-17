<template>
  <a-select
    v-model="selectedCategory"
    placeholder="Категория"
    class="filter"
    size="large"
    show-search
    allowClear
  >
    <a-select-option
      v-for="category in allCategories"
      :value="category.name"
    >
      {{ category.name }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Mutation, State } from 'vuex-class';
import { TCategory } from "@/core/models";

@Component({})
export default class CategoryFilter extends Vue {
  @Getter('main/getAllCategories')
  allCategories!: TCategory[];

  @State(state => state.history.filters.category?.name)
  currentCategoryName!: string | undefined;

  @Mutation("history/changeCategoryFilter")
  changeCategoryFilter!: (newValue: string | undefined) => void;

  get selectedCategory(): string | undefined {
    return this.currentCategoryName;
  }

  set selectedCategory(value: string | undefined) {
    this.changeCategoryFilter(value);
  }
}
</script>

<style scoped lang="scss">

</style>