import { ReactElement } from 'react';

export interface HistoryElement {
  response: ReactElement;
  command: string;
  isBrief: boolean;
  fullCommand: string;
}
