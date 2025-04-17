<template>
  <div class="operations">
    <div class="operations-header">
      <div class="title size32">История</div>
      <a-button
        type="primary"
        class="ui-button-primary operations-header__button"
        size="large"
        @click="openCreateModal"
      >
        Добавить
      </a-button>
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
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Filters from "@/pages/Operations/Filters/Filters.vue";
import OperationsHistory from "@/pages/Operations/OperationsHistory.vue";
import { State } from "vuex-class";
import { IOperation } from "@/store/history/state";
import Modal from "@/pages/Operations/Modal/Modal.vue";

@Component({
  components: { Modal, OperationsHistory, Filters }
})
export default class Operations extends Vue {
  @State(state => state.history.operations as unknown)
  readonly operations!: IOperation[];

  filteredOperations: IOperation[] = [];
  modalVisible = false;
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

  closeModal() {
    this.modalVisible = false;
  }

  handleSubmit(operation: IOperation) {
    if (this.selectedOperation) {
      this.$store.commit('history/updateOperation', operation);
    } else {
      this.$store.commit('history/addOperation', operation);
    }
    this.closeModal();
  }

  handleDelete(operation: IOperation) {
    console.log("Удаляем:", operation);
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
    &__button {
      border-radius: 15px;
    }
  }
}
</style>