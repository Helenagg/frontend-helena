import { _DELETE_POST, _EXPORT_POST, _UPDATE_POST } from "../resources/ApiUrls";
import MyAxiosInstance from "../utils/MyAxiosInstance";

const getPost = () => MyAxiosInstance.get(_EXPORT_POST());
const updatePost = (id: number) => MyAxiosInstance.post(_UPDATE_POST(id));
const deletePost = (id: number) => MyAxiosInstance.post(_DELETE_POST(id));

const postConsts = { getPost, updatePost, deletePost };

export default postConsts;
