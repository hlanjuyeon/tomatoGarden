import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

/**
    ExpenseList
 */
function ExpenseList() {
  return (
    <Paper className="relative flex flex-col flex-auto p-24 pr-12 pb-12 rounded-2xl shadow overflow-hidden">
      <div className="flex flex-col">
        <Typography className="text-lg font-semibold tracking-tight leading-6">
          2024/07/18
        </Typography>
      </div>
      <div className="flex flex-col mt-6">
        <Typography color="text.secondary" className="text-base font-semibold">
          定期券購入
        </Typography>
      </div>
      <div className="flex flex-col mt-6 place-items-end">
        <Typography color="text.secondary" className="text-left font-semibold">
          10000円
        </Typography>
      </div>
    </Paper>
  );
}

export default ExpenseList;
