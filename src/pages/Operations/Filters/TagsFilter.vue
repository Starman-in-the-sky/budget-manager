<template>
  <a-select
    v-model="selectedTags"
    mode="multiple"
    placeholder="Тэги"
    class="filter tags-filter"
    size="large"
    show-search
  >
    <a-select-option
      v-for="tag in allTags"
      :value="tag.name"
    >
      {{ tag.name }}
    </a-select-option>
  </a-select>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Getter, Mutation, State } from 'vuex-class';
import { TTag } from "@/core/models";

@Component({})
export default class CategoryFilter extends Vue {
  @Getter('main/getAllTags')
  allTags!: TTag[];

  @State(state => state.history.filters.tags)
  filteredTags!: TTag[];

  @Mutation('history/changeTagsFilter')
  changeTagsFilter!: (tags: TTag[]) => void;

  get selectedTags(): string[] {
    return this.filteredTags.map(tag => tag.name || '');
  }

  set selectedTags(value: string[]) {
    const selected = this.allTags.filter(tag => value.includes(tag.name || ''));
    this.changeTagsFilter(selected);
  }
}
</script>

<style scoped lang="scss">
.tags-filter {
  ::v-deep .ant-select-selection--multiple {
    min-height: 40px;

    .ant-select-selection__rendered {
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;

      ul {
        display: flex;
        flex-wrap: nowrap;
        padding: 0;
        margin: 0;

        li.ant-select-selection__choice {
          flex-shrink: 0;
          white-space: nowrap;
          margin-right: 4px;
          border-radius: 15px;
        }
      }
    }
  }
}
</style>