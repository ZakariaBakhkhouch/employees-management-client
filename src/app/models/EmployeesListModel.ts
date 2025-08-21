import { BaseResponse } from "./BaseResponse";
import { Employee } from "./Employee";
import { PaginationResponse } from "./Pagination";

// Combined response for Employees
export interface EmployeeListModel extends BaseResponse {
  data: PaginationResponse<Employee>;
}