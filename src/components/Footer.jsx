import { Link } from "react-router-dom";



function Footer() {
    return (
        <div className='font-custom bg-black p-10 md:p-6'>
            <div className="md:flex md:flex-row md:justify-between">
            <div className="md:mr-8">
                <h1 className="font-bold text-white"> Adewale O. Obadina </h1>
            </div>

            <div className='font-bold text-primaryGreen flex flex-col md:flex-row my-6 md:my-0 md:mr-8'>
                <Link to="/" exact="true" className='pt-6 md:pt-0 md:pr-4'> Home  </Link>
                <Link to="/about" className='pt-6 md:pt-0 md:pr-4 ' > About </Link>
                <Link to="/research" className='pt-6 md:pt-0 md:pr-4 '> Research </Link>
                <Link to="/publications" className='pt-6 md:pt-0 '> Publication </Link>
            </div>

            <div className="flex flex-row md:pl-0">
                <img src="/fa-brands_researchgate.svg" alt="Researchgate logo" className="pr-4" />
                <img src="/Facebook.svg" alt="Facebook Logo" className="pr-4" />
                <img src="/X.svg" alt="X logo" className="pr-4" />
                <img src="/LinkedIn.svg" alt="LinkedIn logo" />
            </div>
            </div>
            <hr className="my-8"></hr>
            <div className="md:flex md:flex-row-reverse md:justify-around">
                

                <div className="flex flex-row text-white text-center text-sm">
                    <a className="pr-8" href="#">Privacy Policy</a>
                    <a className="pr-8" href="#">Terms of Service</a>
                    <a href="#">Cookies Settings</a>
                </div>

                <h6 className="text-white text-center text-base pt-6 md:pt-0 md:text-left ">2023. All right reserved.</h6>
            </div>

        </div>
    );
}

export default Footer;