import { Typography } from "@material-tailwind/react";


const Home = () => {
  const data = Array(12).fill(0)


  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <Typography variant="h1">Organize your
            work and life, finally</Typography>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500 my-2">Become focused, organized, and calm with Todoist. The world’s #1 task manager and to-do list app</p>
        </div>
        {/* task heading */}
        <div className="my-5">
        <Typography variant="h3">Tasks</Typography>
        </div>

        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => {
            {
              return <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    {/* <TaskAltOutlinedIcon /> */}
                    <span className="text-black">
                      {index + 1}
                    </span>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
            }
          })}
        </div>

        {/* task heading */}
        <div className="my-5">
        <Typography variant="h3">Completed</Typography>
        </div>

        <div className="flex flex-wrap -m-4">
          {data.map((item, index) => {
            {
              return <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    {/* <TaskAltOutlinedIcon /> */}
                    <span className="text-black">
                      {index + 1}
                    </span>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
                  <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.</p>
                </div>
              </div>
            }
          })}
        </div>
      </div>
    </section>
  )
}

export default Home