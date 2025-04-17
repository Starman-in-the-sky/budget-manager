<template>
  <a-modal
    v-model="visible"
    :title="isEditMode ? 'Редактировать операцию' : 'Добавить операцию'"
    @ok="handleSubmit"
    @cancel="handleCancel"
    :footer="null"
    width="600px"
  >
    <a-form layout="vertical">
      <a-form-item label="Название операции">
        <a-input v-model="form.label" />
      </a-form-item>

      <a-form-item label="Описание">
        <a-input v-model="form.description" />
      </a-form-item>

      <a-form-item label="Дата и время">
        <a-date-picker
          v-model="formDate"
          show-time
          format="DD-MM-YYYY HH:mm:ss"
          style="width: 100%"
        />
      </a-form-item>

      <a-form-item label="Сумма">
        <a-input-number v-model="form.value" style="width: 100%" />
      </a-form-item>

      <a-form-item label="Тип">
        <a-select v-model="form.type">
          <a-select-option value="Доход">Доход</a-select-option>
          <a-select-option value="Расход">Расход</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Категория">
        <a-select v-model="form.category.name" placeholder="Выберите категорию">
          <a-select-option
            v-for="category in allCategories"
            :value="category.name"
          >
            {{ category.name }}
          </a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Теги">
        <a-select
          v-model="form.tags"
          mode="multiple"
          placeholder="Выберите теги"
          class="tags-filter"
          size="large"
          show-search
        >
          <a-select-option
            v-for="tag in allTags"
            :key="tag.name"
            :value="tag.name"
          >
            {{ tag.name }}
          </a-select-option>
        </a-select>
      </a-form-item>
    </a-form>

    <div style="text-align: right; margin-top: 24px">
      <a-button @click="handleCancel" style="margin-right: 8px">
        Отмена
      </a-button>

      <a-button
        v-if="isEditMode"
        type="danger"
        @click="handleDelete"
        style="margin-right: 8px"
      >
        Удалить
      </a-button>

      <a-button type="primary" @click="handleSubmit">
        {{ isEditMode ? 'Сохранить изменения' : 'Создать операцию' }}
      </a-button>
    </div>
  </a-modal>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import moment, { Moment } from 'moment';
import { IOperation } from '@/store/history/state';
import { TCategory, TTag } from "@/core/models";
import { Getter } from "vuex-class";

@Component
export default class OperationModal extends Vue {
  @Prop({ default: false })
  visible!: boolean;

  @Prop({ default: null })
  operation!: IOperation | null;

  form: IOperation = {
    eventDateTime: undefined,
    value: undefined,
    category: { name: '', icon: '' },
    type: '',
    tags: [],
    label: '',
    description: '',
  };

  @Getter('main/getAllCategories')
  allCategories!: TCategory[];

  @Getter('main/getAllTags')
  allTags!: TTag[];

  get formDate(): Moment {
    return moment(this.form.eventDateTime, 'DD-MM-YYYY HH:mm:ss');
  }

  set formDate(date: Moment) {
    this.form.eventDateTime = date.format('DD-MM-YYYY HH:mm:ss');
  }

  get isEditMode() {
    return !!this.operation;
  }

  @Watch('operation', { immediate: true, deep: true })
  onOperationChanged(newOperation: IOperation | null) {
    if (newOperation) {
      this.form = JSON.parse(JSON.stringify(newOperation));
    } else {
      this.resetForm();
    }
  }

  handleCancel() {
    this.resetForm();
    this.$emit('cancel');
  }

  handleSubmit() {
    this.$emit('submit', this.form);
    this.resetForm();
  }

  handleDelete() {
    this.$store.commit('history/deleteOperation', this.form);
    this.$emit('delete', this.form);
    this.resetForm();
  }

  resetForm() {
    this.form = {
      eventDateTime: undefined,
      value: undefined,
      category: { name: '', icon: '' },
      type: '',
      tags: [],
      label: '',
      description: '',
    };
  }
}
</script>

<style scoped lang="scss">
.filter {
  width: 100%;
}

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
