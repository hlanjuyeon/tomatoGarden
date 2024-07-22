import Paper from "@mui/material/Paper";
import { DatesSetArg } from "@fullcalendar/core";
import Typography from "@mui/material/Typography";

type RegularPass = {
  duration: string;
  section: string;
};

type Expense = {
  id: number;
  date: string;
  description: string;
  amount: number;
  type: string;
  regularPass?: RegularPass;
};

type ExpenseListProps = {
  expenses: Expense[];
};

/**
    ExpenseList
 */
function ExpenseList({ expenses }: ExpenseListProps ) {

  return (
    <div className="flex flex-col gap-12">
      {expenses.length === 0 ? (
        <Typography className="text-lg font-semibold tracking-tight leading-6">
          登録された申請項目がありません。
        </Typography>
      ) : (
        expenses.map((expense) => (
          <Paper key={expense.id} className="relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden">
            <div className="flex flex-col">
              <Typography className="text-lg font-semibold tracking-tight leading-6">
                {expense.date}
              </Typography>
              <Typography
                color="text.secondary"
                className="text-base font-semibold"
              >
                {expense.description}
              </Typography>
              {expense.type === "regularPass" && expense.regularPass && (
                <div className="mt-2">
                  <Typography color="text.secondary" className="text-sm">
                    {expense.regularPass.duration}
                  </Typography>
                  <Typography color="text.secondary" className="text-sm">
                    {expense.regularPass.section}
                  </Typography>
                </div>
              )}
              <Typography
                color="text.secondary"
                className="text-left font-semibold"
              >
                {expense.amount}円
              </Typography>
            </div>
          </Paper>
        ))
      )}
    </div>
  );
}

export default ExpenseList;
