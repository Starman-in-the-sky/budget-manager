<template>
  <div class="filters">
    <TypeFilter />
    <CategoryFilter />
    <TagsFilter />
    <DateFilter />
    <ValueFilter />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import TypeFilter from "@/pages/Operations/Filters/TypeFilter.vue";
import CategoryFilter from "@/pages/Operations/Filters/CategoryFilter.vue";
import TagsFilter from "@/pages/Operations/Filters/TagsFilter.vue";
import DateFilter from "@/pages/Operations/Filters/DateFilter.vue";
import ValueFilter from "@/pages/Operations/Filters/ValueFilter.vue";

@Component({
  components: { ValueFilter, DateFilter, TagsFilter, CategoryFilter, TypeFilter }
})
export default class Filters extends Vue {

}
</script>

<style scoped lang="scss">
.filters {
  height: 50px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
}
</style>