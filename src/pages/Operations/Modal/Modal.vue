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
        <a-input v-model="form.label" size="large"/>
      </a-form-item>

      <a-form-item label="Описание">
        <a-input v-model="form.description" size="large"/>
      </a-form-item>

      <a-form-item label="Дата и время">
        <a-date-picker
          v-model="formDate"
          show-time
          format="DD-MM-YYYY HH:mm:ss"
          size="large"
          style="width: 100%"
        />
      </a-form-item>

      <a-form-item label="Сумма">
        <a-input-number
          v-model="form.value"
          style="width: 100%"
          size="large"
        />
      </a-form-item>

      <a-form-item label="Тип">
        <a-select v-model="form.type" size="large">
          <a-select-option value="Доход">Доход</a-select-option>
          <a-select-option value="Расход">Расход</a-select-option>
        </a-select>
      </a-form-item>

      <a-form-item label="Категория">
        <a-select
          v-model="form.category.name"
          placeholder="Выберите категорию"
          size="large"
        >
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
          v-model="formTags"
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

      <a-button type="primary" @click="handleSubmit" class="ui-button-primary">
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

  originalOperationCopy: IOperation | null = null;

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

  get formDate(): Moment | null {
    if (!this.form.eventDateTime) {
      return null;
    }

    const date = moment(this.form.eventDateTime, 'DD-MM-YYYY HH:mm:ss', true);
    return date.isValid() ? date : null;
  }

  set formDate(date: Moment | null) {
    this.form.eventDateTime = date ? date.format('DD-MM-YYYY HH:mm:ss') : undefined;
  }

  get isEditMode() {
    return !!this.operation;
  }

  get formTags(): string[] {
    return this.form.tags
        .map(tag => tag.name)
        .filter((name): name is string => !!name);
  }

  set formTags(tagNames: string[]) {
    this.form.tags = this.allTags.filter(
        tag => tag.name && tagNames.includes(tag.name)
    );
  }

  @Watch('operation', { immediate: true, deep: true })
  onOperationChanged(newOperation: IOperation | null) {
    if (newOperation) {
      this.originalOperationCopy = JSON.parse(JSON.stringify(newOperation));
      this.form = JSON.parse(JSON.stringify(newOperation));
    } else {
      this.resetForm();
    }
  }

  handleCancel() {
    if (this.originalOperationCopy) {
      this.form = JSON.parse(JSON.stringify(this.originalOperationCopy));
    } else {
      this.resetForm();
    }
    this.$emit('cancel');
  }

  handleSubmit() {
    this.$emit('submit', this.form);
    this.resetForm();
    this.originalOperationCopy = null;
  }

  handleDelete() {
    this.$store.commit('history/deleteOperation', this.form);
    this.$emit('delete', this.form);
    this.resetForm();
    this.originalOperationCopy = null;
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
