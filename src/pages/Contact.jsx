import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';
import DefaultButton from '../components/DefaultButton.jsx';

function Contact() {
    return (
        <div className='container'>
            <Navigation />

            <div className="bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply text-center py-40" style={{ backgroundImage: 'url(/contact.jpeg)', height: '350px' }}>
                <h3 className="mb-4 text-ag3 font-bold tracking-tight text-white md:text-ag2 xl:text-ag1"> Get in touch </h3>
                <p className="mb-8 text-ag5 font-normal text-white lg:text-xl sm:px-16  lg:px-48  md:text-center ">Creating bridges of knowledge </p>
            </div>

            <div className='my-4 mx-8 md:pl-8 xl:flex xl:flex-row xl:px-24 xl:justify-between'>
                <div className='xl:w-2/4'>
                    <div className='my-4'>
                        <h4 className='py-4 font-bold text-ag4 text-center md:text-left md:text-ag3 xl:text-ag2'>Collaborate with us <span className="text-primaryGreen" >today!</span></h4>
                        <p className='text-md md:text-ag5'>Contact us for academic inquiries or collaboration opportunities.</p>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <img src="/Email.svg" alt="email logo" className="mr-2" />
                            <p className="text-agsm p-2 md:text-agmd">E-mail: obadinaw@gmail.com</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/Phone.svg" alt="phone logo" className="mr-2" />
                            <p className="text-agsm p-2 md:text-agmd">+234-805-887-9249</p>
                        </div>
                        <div className="flex items-center">
                            <img src="/Pin.svg" alt="location logo" className="mr-2" />
                            <p className="text-agsm p-2 md:text-agmd">Federal University of Agriculture, Abeokuta, Nigeria</p>
                        </div>
                    </div>
                </div>
                <form className='my-4 xl:w-2/5 xl:flex xl:flex-col text-agsm md:text-agmd'
                    action="mailto:sanya4reel@gmail.com"
                    method="post"
                    encType="text/plain" >
                    <div className='flex flex-col'>
                        <label htmlFor="name">Name:</label>
                        <input
                            className='rounded-md  border-solid border-2 hover:border-gray-500 my-3'
                            type="text"
                            id="name"
                            name="name"
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="email">Email:</label>
                        <input
                            className='rounded-md  border-solid border-2 hover:border-gray-500 my-3'
                            type="email"
                            id="email"
                            name="email"
                            required
                        />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="message">Message:</label>
                        <textarea
                            className='rounded-md  border-solid border-2 hover:border-gray-500 my-3 h-40'
                            placeholder='Type your message...'
                            id="message"
                            name="message"
                            required
                        />
                    </div>
                    <div>
                        <DefaultButton className={'dark:bg-primaryGreen text-agsm text-white w-1/2'} buttonText={'Submit'} />
                    </div>
                </form>
            </div>


            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default Contact;