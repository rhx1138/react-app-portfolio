function About () {
    return (
        <>
        <div className="">
        <div className="px-10">
          <h1 className="text-5xl font-mono">Developer and designer</h1>
          <p className="text-lg text-gray-600 font-mono">Freelancer providing services for web development and design content needs.<br></br>
          Please see my projects.</p>
        </div>
        <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={`${process.env.PUBLIC_URL}/propic1bg.png`} layout="fill" objectFit="cover" />
        </div>
        </div>
        
      </>
    ) 
}

export default About
