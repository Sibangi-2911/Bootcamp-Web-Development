import { OrderSelect } from "../orderSelect/orderSelect"
import { TaskPagination } from "../taskPagination/taskPagination"

export function FilterBar(){
  return(
    <>
    <nav className="flex flex-row justify-between">
      <TaskPagination />
      <OrderSelect />
    </nav>
    </>
  )
}