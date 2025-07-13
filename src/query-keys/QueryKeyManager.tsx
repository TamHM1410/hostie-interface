import type { QueryKeyTypes } from "./QueryKeyTypes";
import type { baseFilterRequest } from "../types/filterRequest";

export const QueryKeyManager = (type: QueryKeyTypes, label?: string | null) => {
  const genericKeys = {
    pattern: () => [`${type}`],
    page: ({
      pageNumber,
      pageRows,
      filterRequest,
    }: baseFilterRequest | any) => [
      `${type}`,
      `-Ward-` + label,
      `-Page-` +
        `-Pn/${pageNumber}` +
        `-Pr/${pageRows}` +
        `-Fr/${filterRequest ? JSON.stringify(filterRequest) : ""}`,
    ],
    list: ({ simple, filterRequest = {} }: baseFilterRequest | any) => [
      `${type}`,
      `-List-S/${simple}`,
      `-Fr/${filterRequest ? JSON.stringify(filterRequest) : ""}`,
    ],
    detail: ({ id }: { id: number }) => [`${type}`, `-Detail-I/${id}`],
  };

  return {
    genericKeys,
  };
};
