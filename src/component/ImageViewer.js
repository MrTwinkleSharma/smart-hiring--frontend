import { server } from "../lib/apiList";

server
const ImageViewer = ({profile}) =>{
    return  <img
    className="m-6 w-80"
    src={`${server}/static/profile/${profile}`}
    alt="profile"
  />
}
export default ImageViewer;