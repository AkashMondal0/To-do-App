import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import TodoList from "../todoList/todoList";
import CompleteTodo from "../completeTodo/completeTodo";

export default function TabView({setTab}) {

  const data = [
    {
      label: "Tasks",
      value: "Tasks",
      desc: TodoList(),
    },
    {
      label: "Complete",
      value: "Complete",
      desc: CompleteTodo(),
    }
  ];

  return (

    <Tabs value="Tasks">
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={()=>{
            // setTab(value)
          }}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
