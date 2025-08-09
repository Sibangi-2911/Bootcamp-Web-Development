import { OrderSelect } from "../orderSelect/orderSelect";
import { TaskPagination } from "../taskPagination/taskPagination";

export function FilterBar() {
  return (
    <>
      <nav className="w-full flex flex-row justify-between items-center mt-6 px-2">
        <TaskPagination />
        <OrderSelect />
      </nav>
    </>
  );
}
