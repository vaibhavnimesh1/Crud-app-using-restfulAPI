import { BG_IMG } from '../utils/constant'

const BackgroundImage = () => {
  return (
    <div className="absolute ">
    <img className=" h-screen w-screen object-cover" src={BG_IMG} alt="background-img" />
  </div>
  )
}

export default BackgroundImage