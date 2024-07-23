// Type for GetUserExpensesResponse
export type GetUserExpensesResponse = {
  data: {
    [month: string]: MonthlyExpenses;
  };
  currentMonth: string;
};

// Type for MonthlyExpenses
export type MonthlyExpenses = {
  isApproved: string;
  rejectionReason?: string;
  expenseInfos: Array<ExpenseInfoWithId>;
  imgUrls: Array<ImgUrl>;
};

// Type for ExpenseInfoWithId extends ExpenseInfo
export type ExpenseInfoWithId = ExpenseInfo & {
  expId: string;
};

// Type for ExpenseInfo
export type ExpenseInfo = {
    type: string;
    date: string;
    cost: number;
    ticketInfo?: {
      startDate: string;
      endDate: string;
      route: string;
    };
};

// Type for ImgUrl
export type ImgUrl = {
  evdId: string;
  s3Url: string;
};
