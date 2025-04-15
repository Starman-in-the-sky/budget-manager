import { TCategory, TTag } from "@/core/models";

export interface IOperation {
  eventDateTime: string,
  value: number | null,
  category: TCategory | null,
  tags: TTag[],
  label: string,
  description: string,
}

export interface IHistoryState {
  operations: IOperation[],
}

function state(): IHistoryState {
  return {
    operations: [],
  }
};

export default state;