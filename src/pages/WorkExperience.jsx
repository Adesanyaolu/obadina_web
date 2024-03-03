import Footer from '../components/Footer.jsx';
import Navigation from '../components/Navigation.jsx';

/**
 * WorkExperience component represents the page displaying Dr. Obadina's work experience.
 * It includes sections for academic experience, administrative experience, and professional/research experience.
 */

function WorkExperience() {
    return (
        <div className='container'>
            <Navigation />

            <div className="bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply text-center py-40" style={{ backgroundImage: 'url(/work.jpg)', height: '350px' }}>
                <h3 className="mb-4 text-ag3 font-bold tracking-tight text-white md:text-ag2 xl:text-ag1"> Work experience </h3>
                <p className="mb-8 text-ag5 font-normal text-white sm:px-16 md:text-center lg:text-xl   lg:px-48">Experiences Dr. Obadina gained over the years.  </p>
            </div>

            <div className='py-8'>
                {/* Work Experience 1  */}
                <div className='px-8'>
                    <h4 className='py-4 text-ag5 font-bold text-primaryGreen md:text-ag4'> Academic Experience </h4>
                    <div className='text-agsm'>
                        <li className='py-2'>
                            Professor (Food Safety and Biotechnology), Department of Food Science and Technology, Federal University of Agriculture, Abeokuta, Ogun State, Nigeria. October 2018 – Till date.
                        </li>
                        <li className='py-2'>
                            Visiting Professor, Department of Biotechnology and Food Technology, University of Johannesburg, South Africa (2022 – 2027)
                        </li>
                        <li className='py-2'>
                            Visiting Adjunct Professor, Department of Microbiology, Babcock University, Ilisan, Ogun State, Nigeria (2023 – Till date
                        </li>
                        <li className='py-2'>
                            Associate Professor (Food Science and Technology), Department of Food Science and Technology, Federal University of Agriculture, Abeokuta, Ogun State, Nigeria. October 2015 - 2018.
                        </li>
                        <li className='py-2'>
                            Senior Lecturer, Department of Food Science and Technology, Federal University of Agriculture, Abeokuta, Ogun State, Nigeria. October 2012 - 2015.
                        </li>
                        <li className='py-2'>
                            Visiting Lecturer, M.Sc. Food Science, Technology and Nutrition, Katholieke Hogeschool, Sint-Lieven, Gent, Belgium. 28th March - 03 April 2011; 19 September - 04 October 2011
                        </li>
                        <li className='py-2'>
                            Visiting Lecturer, M.Sc. Food Science, Technology and Nutrition, Dublin Institute of Technology (DIT), Dublin, Ireland, 04 April - 15 April 2011; 05 October - 19 October, 2011.
                        </li>
                        <li className='py-2'>
                            Lecturer I, Department of Food Science and Technology, Bells University of Technology, Ota, Nigeria, October 2008 - June 2009.
                        </li>
                        <li className='py-2'>
                            Lecturer II, Department of Biotechnology, Bells University of Technology, Ota, Nigeria, February 2006 - October 2008.
                        </li>
                    </div>
                </div>

                {/* Administrative Experince */}
                <div className='px-8'>
                    {/* Number 1  */}
                    <h4 className='py-4 text-ag5 font-bold text-primaryGreen md:text-ag4'> Administrative Experience
                    </h4>
                    <div className='text-agsm' >
                        <li className='py-2'>
                            Director, Biotechnology Centre, Federal University of Agriculture, Abeokuta, Nigeria April 2016 – March 2019.
                        </li>

                        <li className='py-2'>Head of Department, Food Science and Technology, Federal University of Agriculture, Abeokuta, Nigeria, August 2019 – July 2021.
                        </li>
                    </div>
                </div>

                {/* Professional / Research Experience  */}
                <div className='px-8'>
                    <h4 className='py-4 text-ag5 font-bold text-primaryGreen'> Professional / Research Experience </h4>
                    <div className='text-agsm'>
                        <li className='py-2'>
                            Member, African Union Food Safety Experts at the 53rd Session of Codex Committee on Food Hygiene (CCFH53), San Diego, USA. 27th November – 2nd December 2022
                        </li>
                        <li className='py-2'>
                            Food Safety Expert: ‘Research supporting African MSMEs to provide safe and nutritious food’ a collaborative project with Michigan State University (MSU), USA, sponsored by Bill and Melinda Gates Foundation January 2022 - December 2027.
                        </li>
                        <li className='py-2'>
                            Chairman, Global Harmonization Initiative (GHI) Food Safety Training and Education Working Group.
                        </li>
                        <li className='py-2'>
                            Member, Organizing Committee of Food Safety Conference for Africa sponsored by FAO/ACAFP/AUC. 10-11 November 2021.
                        </li>
                        <li className='py-2'>
                            Consultant/Specialist, Good Manufacturing Practices on a short-term basis to support four (4) of Feed the Future Agro-business projects in Delta, Kaduna, Benue and Kebbi States, Nigeria (January – February 2021).
                        </li>
                        <li className='py-2'>
                            Member, ECOWAS Antimicrobial Resistance Technical Working Group (AMR-TWG) 2021 till date
                        </li>
                        <li className='py-2'>
                            Member, Nigeria Antimicrobial Resistance Technical Working Group (AMR-TWG)2019 till date.
                        </li>
                        <li className='py-2'>
                            Consultant, Training and Dissemination on Aflatoxin Contamination along Maize Value Chain in Nigeria. Under USAID Feed the Future Nigeria Agricultural Policy Project (NAPP) 2019 – 2020.
                        </li>
                        <li className='py-2'>
                            Resource Person, Food Safety and Hygiene Training for Environmental Health Officers (EHOs) in different zones within Nigeria 2017- 2020.
                        </li>
                        <li className='py-2'>
                            Chairman, Technical Committee on Cocoa and Cocoa products Standards in Nigeria 2018 till Date.
                        </li>
                        <li className='py-2'>
                            Principal Investigator, Up-scaling Millet Grain Sourdough Technology and ExtrudedSnacks for Sustainable Livelihood in West Africa sponsored by M-BoSs from January 2018 - June 2019.
                        </li>
                        <li className='py-2'>
                            Principal Investigator: Physicochemical, Nutritional and Microbiological Studies of Fermented Cococyam (Lafun) a research project funded by Third World Academy of Science (TWAS) from October 2013 – April 2015
                        </li>
                        <li className='py-2'>
                            Mentor: Effect of Climate Variability on the Safety of fresh cut Vegetables in South-west Nigeria a research project sponsored by MYCOE/SERVIR Global from August 2013 - May 2014
                        </li>
                        <li className='py-2'>
                            Principal Investigator: Nutritional properties and health functionality of wholegrain millet sourdoughs (Millet adding value) a collaborative Project with Department of Food Technology, EMBRAPA, Brazil, sponsored by Africa and Brazil Initiative from January 2013 - December 2014.
                        </li>
                        <li className='py-2'>
                            Member: Cassava Growth Markets (Cassava GMarkets) a collaborative Project with Four Countries and Greenwich University/Natural Resources Institute, Chatham, UK sponsored by European Union from December 2012 - June 2016.
                        </li>
                        <li className='py-2'>
                            Food Safety Expert and Team Member: Reducing Losses from Roots and Tubers (GRATITUDE) a collaborative Project with Seven Universities and Greenwich University/Natural Resources Institute, Chatham, UK sponsored by European Union from July 2012 - December 2014.
                        </li>
                    </div>

                </div>



            </div>


            {/* Footer  */}
            <Footer />
        </div>
    )
}

export default WorkExperience;