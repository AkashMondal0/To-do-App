import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineIcon,
  Typography,
  TimelineHeader,
  IconButton,
} from "@material-tailwind/react";
import {
  BellIcon,
  ArchiveBoxIcon,
  CurrencyDollarIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { Fragment } from "react";

export default function TodoCard({ item, index, AppState }) {
  // console.log(item)
  return (
    <TimelineItem className="h-28 my-5 mx-2 w-80">
      <TimelineConnector className="!w-[78px]" />
      <TimelineHeader className="px-5 relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5 justify-between">
        <div className="flex items-center gap-2">
          <TimelineIcon className="p-3" variant="ghost">
            <BellIcon className="h-5 w-5" />
          </TimelineIcon>
          <div>
            <Typography variant="h6" color="blue-gray">
              {item.title}
            </Typography>
            <Typography variant="small" color="gray" className="font-normal">
              {item.message}
            </Typography>
          </div>
        </div>
        <TrashIcon className="h-6 w-6 cursor-pointer" onClick={() => {
          AppState.DELETE_TODO(item)
        }} />
      </TimelineHeader>
    </TimelineItem>
  );
}