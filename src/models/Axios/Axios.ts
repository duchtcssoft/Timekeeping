export interface AxiosProps {
  url: string;
  method: string;
  // FIXME: Don't use type any or type object here
  body?: any;
  headers?: any;
}

// FIXME: And what is src/models ?

export interface ResponseProps {
  data: object;
  pagination: object;
}
