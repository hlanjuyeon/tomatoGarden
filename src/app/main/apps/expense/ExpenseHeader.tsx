import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { selectMainTheme } from "@fuse/core/FuseSettings/fuseSettingsSlice";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import FullCalendar from "@fullcalendar/react";
import { DatesSetArg } from "@fullcalendar/core";
import { MutableRefObject, useEffect } from "react";
import { useSelector } from "react-redux";

type CalendarHeaderProps = {
  calendarRef: MutableRefObject<FullCalendar | null>;
  currentDate: DatesSetArg;
};

/**
 * The calendar header.
 */
function ExpenseHeader(props: CalendarHeaderProps) {
  const { calendarRef, currentDate } = props;

  const mainTheme = useSelector(selectMainTheme);
  const calendarApi = () => calendarRef.current.getApi();

  return (
	<>
    <div className="flex flex-col md:flex-row w-full p-12 justify-center z-10 container">
      <div className="flex items-center">
        <Tooltip title="先月">
          <IconButton
            aria-label="Previous"
            onClick={() => calendarApi().prev()}
          >
            <FuseSvgIcon size={20}>
              {mainTheme.direction === "ltr"
                ? "heroicons-solid:chevron-left"
                : "heroicons-solid:chevron-right"}
            </FuseSvgIcon>
          </IconButton>
        </Tooltip>
        <Typography className="hidden sm:flex text-2xl font-semibold tracking-tight whitespace-nowrap mx-16">
          {currentDate?.view.title}
        </Typography>
        <Tooltip title="来月">
          <IconButton aria-label="Next" onClick={() => calendarApi().next()}>
            <FuseSvgIcon size={20}>
              {mainTheme.direction === "ltr"
                ? "heroicons-solid:chevron-right"
                : "heroicons-solid:chevron-left"}
            </FuseSvgIcon>
          </IconButton>
        </Tooltip>
      </div>
    </div>

	</>	
  );
}

export default ExpenseHeader;
