const ImageViewer = ({profile}) =>{
    return  <img
    className="m-6 w-80"
    src={`http://localhost:4444/static/profile/${profile}`}
    alt="profile"
  />
}
export default ImageViewer;