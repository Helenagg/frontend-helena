import { _DELETE_POST, _EXPORT_POST, _EXPORT_POSTS, _UPDATE_POST } from '../resources/ApiUrls';
import MyAxiosInstance from '../utils/MyAxiosInstance';


const getPosts = () => MyAxiosInstance.get(_EXPORT_POSTS());
const updatePost = (id: number) => MyAxiosInstance.post(_UPDATE_POST(id));
const deletePost = (id: number) => MyAxiosInstance.post(_DELETE_POST(id));
const getPost = (id: number) => MyAxiosInstance.get(_EXPORT_POST(id));

const postConsts = { getPosts, updatePost, deletePost, getPost };

export default postConsts;
