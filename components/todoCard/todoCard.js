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
  TrashIcon,
} from "@heroicons/react/24/solid";

export default function TodoCard({ item, AppState, open, setOpen }) {



  const handleUpdate = async () => {
    setOpen({ ...open, drawerOpen: !open.drawerOpen, Action: "UPDATE TODO", data: item })
  }

  return (
    <>
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
        <div className="flex justify-center">
          <TrashIcon className="h-6 w-6 cursor-pointer mx-2" onClick={() => {
            AppState.DELETE_TODO(item)
          }} />
          <svg onClick={handleUpdate} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
          </svg>
        </div>
      </TimelineHeader>
    </TimelineItem>
    </>
  );
}