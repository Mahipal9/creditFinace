export interface ChartDataType {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label?: string | string[];
  data?: number[] | string[];
  backgroundColor?: string | string[];
  borderColor?: string | string[];
  fill?: boolean | number | "origin" | string;
  stack?: string;
  type?: string;
  hoverOffset?: number;
  circumference?: number;
  rotation?: number;
  spacing?: number;
}

export interface NetProfitDataset extends ChartDataset {}

export interface NetProfitChart extends ChartDataType {
  datasets: NetProfitDataset[];
}

export interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}

export interface OverviewDropdownState {
  employees: string;
  interest: string;
  totalFund: string;
  creditScore: string;
  netProfit: string;
}

export interface creditDetailsValues {
  currentLoans: string;
  interestRatio: string;
  creditScore: string;
  keyMetric: string;
}

export interface financialInformation {
  netRevenue: string;
  netProfit: string;
}

export interface LoanData {
  avatarName: string;
  bankName: string;
  interestRate: string;
  profit: string;
  sinceDate: string;
  type: string;
}

export interface currentLoans {
  currentYear: string;
}

export interface KeyMetricItem {
  icon: JSX.Element;
  Heading: string;
  subheading: string;
  type?: string;
}

export interface keyMetric {
  currentYear: string;
}

export interface SidebarItem {
  title: string;
  path: string;
  icon: JSX.Element;
  cName: string;
}

export interface DateRangeSelectorProps {
  handleDateChange: () => void;
  ranges: any;
  onDoneClick: () => void;
}

export interface MenuPopupProps {
  options: string[];
  handleOption: (option: string) => void;
  selected: string;
}

export interface DropDownOption {
  label: string;
  value: string;
}
