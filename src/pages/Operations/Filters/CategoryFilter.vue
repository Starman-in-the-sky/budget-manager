<template>
  <a-select
    placeholder="Категория"
    class="filter"
    size="large"
    show-search
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
import { Getter } from 'vuex-class';
import { TCategory } from "@/core/models";

@Component({})
export default class CategoryFilter extends Vue {
  @Getter('main/getAllCategories')
  allCategories!: TCategory[];
}
</script>

<style scoped lang="scss">

</style>