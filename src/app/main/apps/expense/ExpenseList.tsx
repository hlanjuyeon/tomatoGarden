import Paper from "@mui/material/Paper";
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
  monthlyTotal: number;
};

/**
    ExpenseList
 */
function ExpenseList({ expenses, monthlyTotal }: ExpenseListProps) {
  if (expenses.length === 0) {
    return (
      <div className="flex flex-col gap-12">
        <Typography className="text-lg font-semibold tracking-tight leading-6">
          登録された申請項目がありません。
        </Typography>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-12">
      <div className="flex justify-between text-left text-[#767677] font-bold ml-14 mr-16 mt-16 mb-4">
        <span>申請項目</span>
        <span>¥{monthlyTotal}</span>
      </div>
      {expenses.map((expense) => (
        <>
          <Paper
            key={expense.id}
            className="relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden"
          >
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
                  <Typography color="text.secondary" className="text-sm font-semibold">
                    {expense.regularPass.duration}
                  </Typography>
                  <Typography color="text.secondary" className="text-sm">
                    {expense.regularPass.section}
                  </Typography>
                </div>
              )}
              <Typography className="text-right font-semibold">
                ¥{expense.amount}
              </Typography>
            </div>
          </Paper>
        </>
      ))}
    </div>
  );
}

export default ExpenseList;
