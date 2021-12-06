export interface AxiosProps {
    url: string;
    method: string;
    body?: any;
    headers?: any;
}

export interface ResponseProps {
    data: object,
    pagination: object,
}
