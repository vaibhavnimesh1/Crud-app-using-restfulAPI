import { useSelector } from "react-redux";
import useBackgroundVideo from "../hooks/useBackgroundVideo";

const VideoBackground = ({ Id }) => {
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  useBackgroundVideo(Id);

  // console.log(Id);
  return (
    <div className="w-full">
      <iframe
        className=" w-full h-screen object-contain "
        src={`https://www.youtube.com/embed/${trailerVideo}?&autoplay=1&mute=1&loop=0`}
        title="YouTube video player"
        frameBorder="0"
        // allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
