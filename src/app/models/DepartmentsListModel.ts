import { BaseResponse } from "./BaseResponse";
import { Department } from "./Department";
import { PaginationResponse } from "./Pagination";

// Combined response for Departments
export interface DepartmentsListModel extends BaseResponse {
  data: PaginationResponse<Department>;
}