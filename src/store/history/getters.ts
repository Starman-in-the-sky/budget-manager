import { GetterTree } from 'vuex';
import { IHistoryState } from './state';
import { IRootState } from '../index';
import { IOperation, IOperationByDay } from "@/store/history/state";
import moment from 'moment';

const getters: GetterTree<IHistoryState, IRootState> = {
  // Все операции, отфильтрованные по активным фильтрам
  filteredOperations: (state): IOperation[] => {
    return state.operations.filter(op => {
      const { type, category, tags, dateFrom, dateTo, minValue, maxValue } = state.filters;

      if (type && op.type !== type) return false;
      if (category && op.category?.name !== category.name) return false;
      if (tags.length && !tags.every(t => op.tags.map(tag => tag.name).includes(t.name))) return false;

      const opMoment = moment(op.eventDateTime, "DD-MM-YYYY HH:mm:ss");

      if (dateFrom && opMoment.isBefore(moment(dateFrom, "DD-MM-YYYY HH:mm:ss"))) return false;
      if (dateTo && opMoment.isAfter(moment(dateTo, "DD-MM-YYYY HH:mm:ss"))) return false;
      if (minValue !== undefined && op.value !== undefined && op.value < minValue) return false;
      if (maxValue !== undefined && op.value !== undefined && op.value > maxValue) return false;

      return true;
    });
  },

// Сгруппированные по дням отфильтрованные операции
  groupedOperationsByDay: (_, getters): IOperationByDay[] => {
    const filtered = getters.filteredOperations as IOperation[];
    const result: IOperationByDay[] = [];
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "day").startOf("day");

    filtered.forEach(op => {
      const opDate = moment(op.eventDateTime, "DD-MM-YYYY HH:mm:ss");
      const opDay = opDate.startOf("day").format("DD-MM-YYYY");

      let label = opDay;
      if (opDate.isSame(today, "day")) {
        label = "Сегодня";
      } else if (opDate.isSame(yesterday, "day")) {
        label = "Вчера";
      } else {
        const dayOfWeek = opDate.format("dddd");
        const formattedDate = opDate.format("D MMMM");
        label = `${formattedDate}, ${dayOfWeek}`;
      }

      let group = result.find(g => g.day === opDay);
      if (!group) {
        group = {
          day: opDay,
          label,
          operations: []
        };
        result.push(group);
      }

      group.operations.push(op);
    });

    result.sort((a, b) => moment(b.day, "DD-MM-YYYY").valueOf() - moment(a.day, "DD-MM-YYYY").valueOf());

    return result;
  }
};

export default getters;
