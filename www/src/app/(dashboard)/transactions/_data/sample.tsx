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
  {
    id: "8",
    merchant: "Netflix",
    amount: 15.0,
    category: "entertainment",
    account: {
      id: "5",
      name: "Citibank",
    },
    accountId: "5",
    date: "2021-04-01",
  },
  {
    id: "9",
    merchant: "Spotify",
    amount: 10.0,
    category: "entertainment",
    account: {
      id: "6",
      name: "HSBC",
    },
    accountId: "6",
    date: "2021-05-01",
  },
  {
    id: "10",
    merchant: "Uber",
    amount: 20.0,
    category: "utility",
    account: {
      id: "7",
      name: "Barclays",
    },
    accountId: "7",
    date: "2021-06-01",
  },
  {
    id: "11",
    merchant: "Lyft",
    amount: 25.0,
    category: "utility",
    account: {
      id: "8",
      name: "TD Bank",
    },
    accountId: "8",
    date: "2021-07-01",
  },
  {
    id: "12",
    merchant: "Facebook",
    amount: 30.0,
    category: "entertainment",
    account: {
      id: "9",
      name: "Capital One",
    },
    accountId: "9",
    date: "2021-08-01",
  },
  {
    id: "13",
    merchant: "Twitter",
    amount: 35.0,
    category: "entertainment",
    account: {
      id: "10",
      name: "Ally Bank",
    },
    accountId: "10",
    date: "2021-09-01",
  },
  {
    id: "14",
    merchant: "Instagram",
    amount: 40.0,
    category: "entertainment",
    account: {
      id: "11",
      name: "PNC Bank",
    },
    accountId: "11",
    date: "2021-10-01",
  },
  {
    id: "15",
    merchant: "Tiktok",
    amount: 45.0,
    category: "entertainment",
    account: {
      id: "12",
      name: "US Bank",
    },
    accountId: "12",
    date: "2021-11-01",
  },
  {
    id: "16",
    merchant: "Snapchat",
    amount: 50.0,
    category: "entertainment",
    account: {
      id: "13",
      name: "Suntrust Bank",
    },
    accountId: "13",
    date: "2021-12-01",
  },
  {
    id: "17",
    merchant: "Pinterest",
    amount: 55.0,
    category: "entertainment",
    account: {
      id: "14",
      name: "BB&T",
    },
    accountId: "14",
    date: "2022-01-01",
  },
  {
    id: "18",
    merchant: "Reddit",
    amount: 60.0,
    category: "entertainment",
    account: {
      id: "15",
      name: "Regions Bank",
    },
    accountId: "15",
    date: "2022-02-01",
  },
  {
    id: "19",
    merchant: "Youtube",
    amount: 65.0,
    category: "entertainment",
    account: {
      id: "16",
      name: "Fifth Third Bank",
    },
    accountId: "16",
    date: "2022-03-01",
  },
];
