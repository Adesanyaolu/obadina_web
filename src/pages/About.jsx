import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

// Function to handle CV click event
function cvClick() {
  // Display a confirmation dialogue box
  const confirmed = window.confirm('Are you sure you want to proceed?');
  // Check if the user clicked "OK"
  if (confirmed) {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.href = '/obadina3.jpg'; // URL of the PDF document
    link.download = 'obadina3.jpg'; // Name of the downloaded file
    document.body.appendChild(link);

    // Trigger the click event on the anchor element to start the download
    link.click();

    // Remove the anchor element from the DOM
    document.body.removeChild(link);
  } else {
    // Logic here for when the user clicks No or cancels the dialog
  }
}

// About component
function About() {
  return (
    <div className="font-custom">
      {/* Navigation Component */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-center bg-no-repeat bg-[url('/obadina3.jpg')] bg-gray-700 bg-blend-multiply md:hidden" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="px-8 mx-auto max-w-screen-xl text-left py-24 lg:py-56 lg:px-8">
          {/* Main Heading */}
          <h3 className="mb-4 text-ag3 font-bold tracking-tight text-white md:text-ag2 xl:text-ag1">
            <span className="text-primaryGreen">Hello</span>, I’m Dr Adewale Obadina
          </h3>

          {/* Description */}
          <p className="mb-8 text-agsm font-medium text-white md:text-ag5 lg:text-xl sm:px-16 md:pl-0 lg:px-48 lg:pl-0">
            Dr Obadina isn’t just a Professor of Food Safety and Biotechnology at the Federal University of Agriculture, Abeokuta, Nigeria. He is also a visiting Professor at the Department of Biotechnology and Food Technology, University of Johannesburg, South Africa (2022 – 2027) and Adjunct Visiting Professor, Department of Microbiology, Babcock University, Nigeria.
          </p>

          {/* Button */}
          <div>
            <a href="#" onClick={cvClick} className="inline-flex justify-center items-center py-2 px-6 text-base font-medium text-center text-white bg-primaryGreen hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900 rounded-md">
              CV / Resume
            </a>
          </div>
        </div>
      </section>

         {/* Hero Section (Tablet and Desktop) */}
         <section className="bg-center bg-no-repeat bg-[url('/oba-2.jpg')] bg-gray-700 bg-blend-multiply hidden md:block" style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="px-8 mx-auto max-w-screen-xl text-left py-24 lg:py-56 lg:px-8">
          {/* Main Heading */}
          <h3 className="mb-4 text-ag3 font-bold tracking-tight text-white md:text-ag2 xl:text-ag1">
            <span className="text-primaryGreen">Hello</span>, I’m Dr Adewale Obadina
          </h3>

          {/* Description */}
          <p className="mb-8 text-agsm font-medium text-white md:text-ag5 lg:text-xl sm:px-16 md:pl-0 lg:px-48 lg:pl-0">
            Dr Obadina isn’t just a Professor of Food Safety and Biotechnology at the Federal University of Agriculture, Abeokuta, Nigeria. He is also a visiting Professor at the Department of Biotechnology and Food Technology, University of Johannesburg, South Africa (2022 – 2027) and Adjunct Visiting Professor, Department of Microbiology, Babcock University, Nigeria.
          </p>

          {/* Button */}
          <div>
            <a href="#" onClick={cvClick} className="inline-flex justify-center items-center py-2 px-6 text-base font-medium text-center text-white bg-primaryGreen hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-900 rounded-md">
              CV / Resume
            </a>
          </div>
        </div>
      </section>


      {/* Section 1 */}
      <div className='m-8 lg:px-8'>
        <h4 className='py-4 text-ag4 font-semibold text-primaryGreen xl:text-ag2'>About me</h4>
        <p className='text-agsm font-medium md:text-ag5'>
          Dr Obadina served as the Director of Biotechnology Centre from 2016 – 2019 and Head of Department, Food Science and Technology (2019 – 2021) at Federal University of Agriculture, Abeokuta, Nigeria. He was a member of Board of Director; International Union of Food Science and Technology (IUFoST) between 2020 – 2022; African Continental Association of Food Protection (ACAFP) – 2019 till date; Chair, Global Harmonization Initiative (GHI) Food Safety Education and Training Working Group (2022 – till date); member of African Union Expert on Food Safety (2021 – till date) and member of food safety experts for WHO Guideline Development Group (DGD) – Traditional Markets (2023-2025). Also, a grantee and Research Associateship Fellow of The World Academy of Sciences (TWAS) with research interest in improving the quality and safety of processed, and ready-to-eat foods. He was a visiting scholar for an EU Erasmus Mundus M.Sc. programme at Katholie University, Gent, Belgium and Dublin Institute of Technology, Ireland to teach Courses in Food Safety and Food Nutrition (2009-2010).
        </p>
      </div>

      {/* Section 2 */}
      <div className='bg-lightGreen lg:px-8'>
        <div className='m-8'>
          <h4 className='py-4 text-ag4 font-semibold text-primaryGreen xl:text-ag2'>Teaching vision</h4>
          <p className='text-agsm font-medium md:text-ag5'>
            I believe my foreign background is a conduit to a world outside the American educational experience, I can synthesize my background in classrooms with a distinctive set of pedagogical approach influenced by the U.S. tertiary education system. It is also my responsibility to challenge and support my students, in pursuit of learning goals by confronting misconceptions about crucial food science ideas and concepts, cultivate their interest in science. I belief it is also my duty  to make my class interesting and conducive for learning. I encourage students to eliminate their microbe-phobia, by introducing the benefits of microorganisms, starting with topics that are directly related to everyday food.
          </p>
        </div>
      </div>

      {/* Section 3 Table (Mobile) */}
      <div className='m-8 md:hidden'>
        <h4 className='py-4 text-ag4 font-semibold text-primaryGreen'>Education </h4>
        <hr className='py-2' />
        <p className='py-2 text-agsm font-medium'>PhD, University of Agriculture Abeokuta, 2006</p>
        <p className='py-2 text-agsm font-medium'>M.Sc., University of Agriculture Abeokuta, 2002</p>
        <p className='py-2 text-agsm font-medium'>B.Sc., University of Agriculture Abeokuta, 1998</p>
      </div>

      {/* Section 3 Table (Desktop) */}
      <div className='m-8 hidden md:block lg:px-8'>
        <h4 className='py-4 text-cm font-extrabold text-primaryGreen xl:text-ag2'>Education </h4>
        <div className='flex flex-row justify-between text-ag5 xl:text-ag3'>
          <h5>Degree</h5>
          <h5>Awarding Institution</h5>
          <h5>Date of Award</h5>
        </div>
        <hr className='mt-2 mb-4' />
        <div className='text-ag5'>
          <div className='flex flex-row justify-between py-4'>
            <p>PhD</p>
            <p>University of Agriculture, Abeokuta, Nigeria.</p>
            <p>2006</p>
          </div>
          <div className='flex flex-row justify-between pb-4'>
            <p>M.Sc.</p>
            <p>University of Agriculture, Abeokuta, Nigeria.</p>
            <p>2002</p>
          </div>
          <div className='flex flex-row justify-between'>
            <p>B.Sc.</p>
            <p>University of Agriculture, Abeokuta, Nigeria.</p>
            <p>1998</p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div className='m-8 lg:px-8'>
        <h4 className='py-4 text-ag4 font-semibold text-primaryGreen xl:text-ag2'>Awards received</h4>
        <hr className='py-2' />
        <div className='text-agsm font-medium md:text-ag5'>
          <li className='py-2'>STEP-B award to visit Department of Food Science and Nutrition, University of Maryland, USA as Visiting Scholar between July-September 2013.</li>
          <li className='py-2'>Grant Award – offered by Agropolis Foundation to attend the International Young Researchers Seminar 2010 ‘’Exploring Agricultural Research for the future: a dialogue between young researchers from the South and the North’’ and GCARD meeting, 25th – 31st March 2010 in Montpellier, France.</li>
          <li className='py-2'>International Union of Food Science and Technology (IUFoST) Young Scientist Award among seven awardees to address the World Food Scientists at the 14th World Congress of Food Science and Technology, October 19th - 23rd, 2008 in Shanghai, China.</li>
          <li className='py-2'>Grant Award - offered by The Graduate School VLAG to attend 10th International Advanced Course on &apos;Management of Microbiological Hazards in Foods&apos; in Wageningen. November 19th - 23rd, 2007.</li>
          <li className='py-2'>Travel Grant Award - offered by Moroccan Nutrition Societies to present a paper during the 1st Federated of African Nutrition Society (FANUS) conference in Quarzazate, Morocco. May 7th - 9th, 2007.</li>
          <li className='py-2'>Grant/Scholarship Award – offered by the International Committee on Food Microbiology and Hygiene (ICFMH) to present a paper during the 20th International ICFMH symposium: Food Micro 2006 “Food Safety and Food Biotechnology: Diversity and Global Impact” in Italy. August 29th – September 3rd. 2006</li>
        </div>
      </div>

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default About;
