import axios from "axios";

const REACT_BACKEND_SERVER = process.env.REACT_APP_BACKEND_SERVER_URL;

const backendApi = axios.create({ baseURL: `${REACT_BACKEND_SERVER}/api/` });

export default backendApi;
