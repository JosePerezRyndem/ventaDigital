/* tslint:disable */
import { FilterTuple } from './filter-tuple';
import { SearchSuggestion } from './search-suggestion';
export interface QueryInfo {
  Filters?: Array<FilterTuple>;
  SortDirection?: string;
  SortField?: string;
  Suggestions?: Array<SearchSuggestion>;
  desiredPage?: number;
  pageSize?: number;
}
