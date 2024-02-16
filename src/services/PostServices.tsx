import { _DELETE_POST, _EXPORT_POST, _UPDATE_POST } from "../resources/ApiUrls";
import MyAxiosInstance from "../utils/MyAxiosInstance";

const getPostToken = () => MyAxiosInstance.get(_EXPORT_POST());
const updatePostToken = (id: number) => MyAxiosInstance.post(_UPDATE_POST(id));
const deletePostToken = (id: number) => MyAxiosInstance.post(_DELETE_POST(id));

const postConsts = { getPostToken, updatePostToken, deletePostToken };

export default postConsts;
