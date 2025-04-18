<template>
  <a-modal
    v-model="visible"
    title="Добавить категорию"
    @ok="handleSubmit"
    @cancel="handleCancel"
    width="300px"
  >
    <a-input
      v-model="category.name"
      class="category"
      size="large"
    />
  </a-modal>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { TCategory } from "@/core/models";

@Component({})
export default class CategoryModal extends Vue {
  @Prop({ default: false })
  visible!: boolean;

  category: TCategory = {
    name: '',
  }

  handleCancel() {
    this.resetForm();
    this.$emit('cancel');
  }

  handleSubmit() {
    this.$emit('submit', this.category);
    this.resetForm();
  }

  resetForm() {
    this.category = {
      name: '',
    }
  }
}
</script>

<style scoped lang="scss">
.category {
  width: 100%;
}
</style>