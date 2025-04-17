import { TCategory, TTag } from "@/core/models";

export interface IOperation {
  eventDateTime?: string,
  value?: number,
  category?: TCategory,
  type: string,
  tags: TTag[],
  label: string,
  description: string,
}

export interface IOperationByDay {
  label: string;
  day: string;
  operations: IOperation[];
}

export interface IHistoryState {
  operations: IOperation[],
  filters: IOperationsFilters,
}

export interface IOperationsFilters {
  type?: string,
  category?: TCategory,
  tags: TTag[],
  dateFrom?: string,
  dateTo?: string,
  minValue?: number,
  maxValue?: number,
}

function state(): IHistoryState {
  const savedOperations = localStorage.getItem("operations");
  const operations: IOperation[] = savedOperations
    ? JSON.parse(savedOperations)
    : [
      {
        eventDateTime: "17-04-2025 10:30:00",
        value: -1200,
        category: { name: "Продукты", icon: 'food' },
        type: "Расход",
        tags: [
          { name: "Магазин", color: "#ff4d4f" },
          { name: "Семья", color: "#52c41a" },
        ],
        label: "Покупка продуктов",
        description: "Купил продукты в Пятёрочке",
      },
      {
        eventDateTime: "17-04-2025 15:45:00",
        value: 5000,
        category: { name: "Зачисление", icon: 'wage' },
        type: "Доход",
        tags: [{ name: "Работа", color: "#1890ff" }],
        label: "Зарплата",
        description: "Аванс за апрель",
      },
      {
        eventDateTime: "16-04-2025 08:00:00",
        value: -250,
        category: { name: "Транспорт", icon: 'transport' },
        type: "Расход",
        tags: [{ name: "Метро", color: "#722ed1" }],
        label: "Поездка на метро",
        description: "Поездка в офис",
      },
      {
        eventDateTime: "15-04-2025 20:15:00",
        value: -3200,
        category: { name: "Хобби", icon: 'hobby' },
        type: "Расход",
        tags: [{ name: "Кино", color: "#eb2f96" }],
        label: "Кинотеатр",
        description: "Сходили на Дюну 2",
      },
      {
        eventDateTime: "14-04-2025 13:10:00",
        value: 180,
        category: { name: "Кофе", icon: 'food' },
        type: "Доход",
        tags: [{ name: "Трата", color: "#1890ff" }],
        label: "Кофе",
        description: "Капучино в офисе",
      },
    ];

  return {
    operations,
    filters: {
      type: undefined,
      category: undefined,
      tags: [],
      dateFrom: "",
      dateTo: "",
      minValue: undefined,
      maxValue: undefined,
    },
  };
};

export default state;