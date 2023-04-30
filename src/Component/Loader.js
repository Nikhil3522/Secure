import Lottie from "react-lottie";
import Loading from '../assest/59965-shield-security.json';


const Loader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: Loading,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div>
            <Lottie 
                options={defaultOptions}
                height={400}
                width={400}
            />
        </div>
    )
}

export default Loader;