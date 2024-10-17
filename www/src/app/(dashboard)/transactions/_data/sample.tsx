export type Transaction = {
  id: string;
  merchant: string;
  amount: number;
  category: "food" | "utility" | "entertainment" | "other";
  account: any;
  accountId: string;
  date?: string;
};

export const Transactions: Transaction[] = [
  {
    id: "1",
    merchant: "McDonalds",
    amount: 10.0,
    category: "food",
    account: {
      id: "1",
      name: "Chase",
    },
    accountId: "1",
    date: "2021-01-01",
  },
  {
    id: "2",
    merchant: "Netflix",
    amount: 15.0,
    category: "entertainment",
    account: {
      id: "1",
      name: "Chase",
    },
    accountId: "1",
    date: "2021-01-01",
  },
  {
    id: "3",
    merchant: "Apple",
    amount: 1000.0,
    category: "utility",
    account: {
      id: "2",
      name: "Bank of America",
    },
    accountId: "2",
    date: "2021-01-01",
  },
  {
    id: "4",
    merchant: "Amazon",
    amount: 50.0,
    category: "other",
    account: {
      id: "2",
      name: "Bank of Jamaica",
    },
    accountId: "2",
    date: "2021-01-01",
  },
];
