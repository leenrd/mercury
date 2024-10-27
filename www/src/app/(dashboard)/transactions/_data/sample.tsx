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
    merchant: "Amazon",
    amount: 50.0,
    category: "other",
    account: {
      id: "1",
      name: "Bank of America",
    },
    accountId: "1",
    date: "2021-01-01",
  },
  {
    id: "5",
    merchant: "Google",
    amount: 5.0,
    category: "other",
    account: {
      id: "2",
      name: "Bank of Jamaica",
    },
    accountId: "2",
    date: "2021-01-01",
  },
  {
    id: "6",
    merchant: "Apple",
    amount: 100.0,
    category: "utility",
    account: {
      id: "3",
      name: "Chase Bank",
    },
    accountId: "3",
    date: "2021-02-01",
  },
  {
    id: "7",
    merchant: "Walmart",
    amount: 75.0,
    category: "food",
    account: {
      id: "4",
      name: "Wells Fargo",
    },
    accountId: "4",
    date: "2021-03-01",
  },
];
