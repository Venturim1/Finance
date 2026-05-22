export interface Account {
  id: number;
  label: string;
  value: number;
  date: string;
  type: number;
}

// Named export only. Import with: `import type { Account } from 'src/types'`
