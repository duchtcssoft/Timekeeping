const token = process.env.REACT_APP_TOKEN_API;
export const config = {
    headers: { Authorization: `Bearer ${token}` },
};
