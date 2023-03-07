export interface Props {
  title: string;
  value: number;
  setValue: (value: number) => void;
  min: number;
  max: number;
  step: number;
  label: string;
  percentage?: boolean;
}
