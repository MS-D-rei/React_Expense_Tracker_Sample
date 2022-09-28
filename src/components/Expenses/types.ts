export interface Expense {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface ExpenseChartData {
  label: string;
  value: number
}