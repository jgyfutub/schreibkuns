// "use client"
import { currentUser } from '@clerk/nextjs/server';
import { auth } from '@clerk/nextjs/server';
import axios from 'axios';
export default async function Home() {
  const { userId } = auth();
  const user = await currentUser();
  // const [array, setArray] = useState([]);
  if (!userId || !user) {
    return (
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-4" style={{ textAlign: 'center' }}>SchreibKuns: Transform Your Images into Conversations</h1>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" style={{ textAlign: 'center' }}>A New Dimension in AI Interaction – Speak with Your Images, Unleash Creativity.</p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <a href="#_" className="relative inline-block text-lg group ">
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Create An Account</span>
            </span>
            <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
          </a>
        </div>
        <h2 className="text-4xl font-extrabold dark:text-white" style={{ textAlign: 'center', marginTop: 40, marginBottom: 30 }}>Welcome to SchreibKuns!!</h2>
        <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start lg:mx-96 md:mx-32 sm:mx-4" >Imagine a world where every picture tells a story, not just in silence but through dynamic conversations. At SchreibKuns, we blend the power of AI with the art of visual storytelling. Simply upload an image, and let our intelligent bot engage you in a meaningful chat based on the content, style, and emotions captured in that image.</p>
        <div className="p-8 ">
          <div className=" py-8 ">
            <h2 className="text-4xl font-extrabold dark:text-white text-center" >Why Choose SchreibKuns?</h2>
            {/* <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Why Choose SchreibKuns?</h4> */}
            {/* <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p> */}
            <div className="space-y-12 px-2 xl:px-16 mt-12 ">
              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-black px-4">
                    {/* <span className="text-4xl text-black px-4">Q.</span> */}
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                    {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-black font-bold">Image-Based Conversations</span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">Experience a unique AI interaction where the context is driven by the images you upload.</span>

                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-black px-4">
                    {/* <span className="text-4xl text-black px-4">Q.</span> */}
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                    {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-black font-bold">Tailored Responses</span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">Enjoy customized dialogues, whether your images are artistic, informative, or just for fun.</span>

                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-black px-4">
                    {/* <span className="text-4xl text-black px-4">Q.</span> */}
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                    {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-black font-bold">Intuitive and Easy</span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">Our platform is designed for everyone, from casual users to professionals seeking creative insights.</span>

                  </div>
                </div>
              </div>

              <div className="mt-4 flex">
                <div>
                  <div className="flex items-center h-16 border-l-4 border-black px-4">
                    {/* <span className="text-4xl text-black px-4">Q.</span> */}
                  </div>
                  <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                    {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                  </div>
                </div>
                <div>
                  <div className="flex items-center h-16">
                    <span className="text-lg text-black font-bold">Secure and Private</span>
                  </div>
                  <div className="flex items-center py-2">
                    <span className="text-gray-500">Your data is safe with us. We prioritize your privacy and security in every interaction.</span>

                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
        <h2 className="text-4xl font-extrabold dark:text-white text-center mb-20" >Steps to Follow</h2>
        <div className="flex  items-center justify-center bg-white px-6 md:px-60">
          <div className="space-y-6 border-l-2 border-dashed">
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-black">Step 1</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Go to chats page in the heading</p>
              </div>
            </div>
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-black">Step 2</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Click on Create new chat to create a new chat</p>

              </div>
            </div>
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-black">Step 3</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Clicking on new chat created,open it and add an image with a prompt and click send button</p>
              </div>
            </div>
            <div className="relative w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
              </svg>
              <div className="ml-6">
                <h4 className="font-bold text-black">Step 4</h4>
                <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Continue your conversation  with the AI bot while being ensured of chat storage and chat privacy</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 italic my-12" style={{ textAlign: 'center', marginBottom: 50 }}>Start your journey with SchreibKuns today. Upload an image and see where the conversation takes you!!.</p>
        </div>
        {/* <h1 className='text-4xl font-bold'>Welcome {user.firstName}</h1>
      <h1 className='text-4xl font-bold'>About the Application</h1>
      <p>SchreibKuns is an innovative application that enables users to interact with a smart AI-powered bot by simply providing an image. The app seamlessly combines advanced image recognition and natural language processing technologies to generate engaging and insightful conversations based on the visual content. Users can upload or take a photo, and the bot will analyze the image to initiate a meaningful dialogue, offering descriptions, stories, or even answering questions related to the image. SchreibKuns is perfect for creative minds, helping to spark imagination and providing unique perspectives on visual content.</p>
      <p>{messages}</p> */}
      </div>
    );
  }
  try {
    const email = user.emailAddresses[0].emailAddress
    const response2 = await axios.post('http://127.0.0.1:5000/email_entry', { email });
    const messages2 = response2.data;
  } catch (error) {
    console.error('There was an error fetching the messages!', error);
  }
  // useEffect(() => {
  return (
    <div>
      <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mt-4" style={{ textAlign: 'center' }}>SchreibKuns: Transform Your Images into Conversations</h1>
      <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400" style={{ textAlign: 'center' }}>A New Dimension in AI Interaction – Speak with Your Images, Unleash Creativity.</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a href="#_" className="relative inline-block text-lg group ">
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">Create your Chat</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </a>
      </div>
      <h2 className="text-4xl font-extrabold dark:text-white" style={{ textAlign: 'center', marginTop: 40, marginBottom: 30 }}>Welcome to SchreibKuns,{user.firstName}!!</h2>
      <p className="mb-3 text-gray-500 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start lg:mx-96 md:mx-32 sm:mx-4" >Imagine a world where every picture tells a story, not just in silence but through dynamic conversations. At SchreibKuns, we blend the power of AI with the art of visual storytelling. Simply upload an image, and let our intelligent bot engage you in a meaningful chat based on the content, style, and emotions captured in that image.</p>
      <div className="p-8 ">
        <div className=" py-8 ">
          <h2 className="text-4xl font-extrabold dark:text-white text-center" >Why Choose SchreibKuns?</h2>
          {/* <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">Why Choose SchreibKuns?</h4> */}
          {/* <p className="text-center text-gray-600 text-sm mt-2">Here are some of the frequently asked questions</p> */}
          <div className="space-y-12 px-2 xl:px-16 mt-12 ">
            <div className="mt-4 flex">
              <div>
                <div className="flex items-center h-16 border-l-4 border-black px-4">
                  {/* <span className="text-4xl text-black px-4">Q.</span> */}
                </div>
                <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                  {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                </div>
              </div>
              <div>
                <div className="flex items-center h-16">
                  <span className="text-lg text-black font-bold">Image-Based Conversations</span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-gray-500">Experience a unique AI interaction where the context is driven by the images you upload.</span>

                </div>
              </div>
            </div>

            <div className="mt-4 flex">
              <div>
                <div className="flex items-center h-16 border-l-4 border-black px-4">
                  {/* <span className="text-4xl text-black px-4">Q.</span> */}
                </div>
                <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                  {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                </div>
              </div>
              <div>
                <div className="flex items-center h-16">
                  <span className="text-lg text-black font-bold">Tailored Responses</span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-gray-500">Enjoy customized dialogues, whether your images are artistic, informative, or just for fun.</span>

                </div>
              </div>
            </div>

            <div className="mt-4 flex">
              <div>
                <div className="flex items-center h-16 border-l-4 border-black px-4">
                  {/* <span className="text-4xl text-black px-4">Q.</span> */}
                </div>
                <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                  {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                </div>
              </div>
              <div>
                <div className="flex items-center h-16">
                  <span className="text-lg text-black font-bold">Intuitive and Easy</span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-gray-500">Our platform is designed for everyone, from casual users to professionals seeking creative insights.</span>

                </div>
              </div>
            </div>

            <div className="mt-4 flex">
              <div>
                <div className="flex items-center h-16 border-l-4 border-black px-4">
                  {/* <span className="text-4xl text-black px-4">Q.</span> */}
                </div>
                <div className="flex items-center h-16 border-l-4 border-gray-400 px-4">
                  {/* <span className="text-4xl text-gray-400 px-4">A.</span> */}
                </div>
              </div>
              <div>
                <div className="flex items-center h-16">
                  <span className="text-lg text-black font-bold">Secure and Private</span>
                </div>
                <div className="flex items-center py-2">
                  <span className="text-gray-500">Your data is safe with us. We prioritize your privacy and security in every interaction.</span>

                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <h2 className="text-4xl font-extrabold dark:text-white text-center mb-20" >Steps to Follow</h2>
      <div className="flex  items-center justify-center bg-white px-6 md:px-60">
        <div className="space-y-6 border-l-2 border-dashed">
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-black">Step 1</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Go to chats page in the heading</p>
            </div>
          </div>
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-black">Step 2</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Click on Create new chat to create a new chat</p>

            </div>
          </div>
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-black">Step 3</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Clicking on new chat created,open it and add an image with a prompt and click send button</p>
            </div>
          </div>
          <div className="relative w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7 rounded-full text-black">
              <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
            </svg>
            <div className="ml-6">
              <h4 className="font-bold text-black">Step 4</h4>
              <p className="mt-2 max-w-screen-sm text-sm text-gray-500">Continue your conversation  with the AI bot while being ensured of chat storage and chat privacy</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 italic my-12" style={{ textAlign: 'center', marginBottom: 50 }}>Continue your journey with SchreibKuns today. Upload an image and see where the conversation takes you!!.</p>
      </div>
      {/* <h1 className='text-4xl font-bold'>Welcome {user.firstName}</h1>
      <h1 className='text-4xl font-bold'>About the Application</h1>
      <p>SchreibKuns is an innovative application that enables users to interact with a smart AI-powered bot by simply providing an image. The app seamlessly combines advanced image recognition and natural language processing technologies to generate engaging and insightful conversations based on the visual content. Users can upload or take a photo, and the bot will analyze the image to initiate a meaningful dialogue, offering descriptions, stories, or even answering questions related to the image. SchreibKuns is perfect for creative minds, helping to spark imagination and providing unique perspectives on visual content.</p>
      <p>{messages}</p> */}
    </div>
  )
}
