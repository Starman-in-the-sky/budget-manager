<template>
  <div class="operations">
    <div class="operations-header">
      <div class="title size32">История</div>
      <div class="operations-header__buttons">
        <a-button
            type="primary"
            class="ui-button-primary operations-header__button"
            size="large"
            @click="openCategoryModal"
        >
          Добавить категорию
        </a-button>
        <a-button
            type="primary"
            class="ui-button-primary operations-header__button"
            size="large"
            @click="openCreateModal"
        >
          Добавить
        </a-button>
      </div>
    </div>
    <Filters />
    <div class="operations-content">
      <OperationsHistory
        :operations="filteredOperations"
        @edit-operation="openEditModal"
      />
    </div>
    <Modal
      :visible="modalVisible"
      :operation="selectedOperation"
      @submit="handleSubmit"
      @cancel="closeModal"
      @delete="handleDelete"
    />
    <CategoryModal
      :visible="categoryModalVisible"
      @submit="handleCategorySubmit"
      @cancel="closeCategoryModal"
  />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Filters from "@/pages/Operations/Filters/Filters.vue";
import OperationsHistory from "@/pages/Operations/OperationsHistory.vue";
import { State } from "vuex-class";
import { IOperation } from "@/store/history/state";
import Modal from "@/pages/Operations/Modal/Modal.vue";
import CategoryModal from "@/pages/Operations/Modal/CategoryModal.vue";
import { TCategory } from "@/core/models";

@Component({
  components: { CategoryModal, Modal, OperationsHistory, Filters }
})
export default class Operations extends Vue {
  @State(state => state.history.operations as unknown)
  readonly operations!: IOperation[];

  filteredOperations: IOperation[] = [];
  modalVisible = false;
  categoryModalVisible = false;
  selectedCategory: TCategory | null = null;
  selectedOperation: IOperation | null = null;

  mounted() {
    this.filteredOperations = this.operations;
  }

  openCreateModal() {
    this.selectedOperation = null;
    this.modalVisible = true;
  }

  openEditModal(operation: IOperation) {
    this.selectedOperation = operation;
    this.modalVisible = true;
  }

  openCategoryModal() {
    this.selectedCategory = null;
    this.categoryModalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

  closeCategoryModal() {
    this.categoryModalVisible = false;
  }

  handleSubmit(operation: IOperation) {
    if (this.selectedOperation) {
      this.$store.commit('history/updateOperation', operation);
    } else {
      this.$store.commit('history/addOperation', operation);
    }
    this.closeModal();
  }

  handleCategorySubmit(category: TCategory) {
    this.$store.commit('user/addCustomCategory', category);
    this.closeCategoryModal();
  }

  handleDelete(operation: IOperation) {
    this.closeModal();
  }
}
</script>

<style lang="scss">
.operations {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    &__buttons {
      display: flex;
      flex-direction: row;
      gap: 10px;
    }
    &__button {
      border-radius: 15px;
    }
  }
}
</style>