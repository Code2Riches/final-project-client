import React from "react";
import Bull from "../assets/dadbod-centaur.jpg"
import Llama from "../assets/ClayStealth.png"
import Wolf from "../assets/bstop.png"
import {
  FaGithub,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

const people = [
  {
    name: '@ClayStealth',
  
    role: 'Baller',
    imageURL: Llama,
    bio: 'He came in like a WRECKING BALL.... #%$@!',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: '@BrennanStopnik',
    role: 'Baller',
    imageURL: Wolf,
    bio: 'To Be, or NOT to be...!?',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
 {
    name: '@Code2Riches',
    role: 'Baller',
    imageURL: Bull,
    bio: 'CB talks a big game. He can easily get under your skin, if its soft... Nice guy overall!',
    githubURL: '#',
    linkedinUrl: '#',
    twitterUrl: '#',
  },
]

export default function AboutPage() {
  return (
    <div className="bg-gray-900">
      <div className="mx-auto max-w-7xl pt-16 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="pt-8 sm:pt-0 space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Dream Team</h2>
            <p className="text-xl text-gray-300">
              We Get It Done!
            </p>
          </div>
          <ul role="list" className="space-y-4 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:grid-cols-3 lg:gap-8">
            {people.map((person) => (
              <li key={person.name} className="rounded-lg bg-gray-800 py-10 px-6 text-center xl:px-10 xl:text-left">
                <div className="space-y-6 xl:space-y-10">
                  <img className="mx-auto h-40 w-40 rounded-full xl:h-56 xl:w-56" src={person.imageURL} alt="" />
                  <div className="space-y-2 xl:flex-col xl:text-center xl:items-center xl:justify-between">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3 className="text-white">
                      {/* <a href='https://github.com/ClaytonStealth'>{person.name}</a> */}
                      </h3>
                      <p className="text-indigo-400">{person.role}</p>
                    </div>
                    <div className="space-y-2 text-sm font-sm leading-4 text-justify">
                      <p className="text-white">{person.bio}</p>
                    </div>


                    <ul role="list" className="flex justify-center space-x-5">
                      
                    <li>
                        <a href={person.githubUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Twitter</span>
                          <FaGithub className="h-5 w-5" />
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">LinkedIn</span>
                          <FaLinkedin className="h-5 w-5"/>
                        </a>
                      </li>
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-300">
                          <span className="sr-only">Twitter</span>
                          <FaTwitter className="h-5 w-5"/>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}












// function AboutPage() {
//   return (
//     <div name='about' className='w-full my- pt-24 dark:bg-zinc-800'>
//       <div className='max-w-[1240px] mx-auto dark:bg-zinc-800'>
//         <div className=' text-center dark:bg-zinc-800'>
//           <h2 className=' text-5xl font-bold dark:text-gray-300'>About us</h2>
//           <p className='text-3xl py-6 text-gray-500 dark:text-gray-400'>
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat eum
//             expedita laudantium culpa dolor illum eligendi deleniti accusantium?
//           </p>
//         </div>
//         <div className=' grid md:grid-cols-3 gap-1 px-2 text-center'>
//           <div className=' border py-8 rounded-xl shadow-xl'>
//             <p className='text-6xl font-bold text-indigo-600'>100%</p>
//             <p className='text-gray-400 mt-2'>Completion</p>
//           </div>
//           <div className=' border py-8 rounded-xl shadow-xl'>
//             <p className='text-6xl font-bold text-indigo-600'>24/7</p>
//             <p className='text-gray-400 mt-2'>Delivery</p>
//           </div>
//           <div className=' border py-8 rounded-xl shadow-xl'>
//             <p className='text-6xl font-bold text-indigo-600'>100k</p>
//             <p className='text-gray-400 mt-2'>Transactions</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default AboutPage;
