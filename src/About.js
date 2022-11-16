function About () {
    return (
        <>
        <div className="">
        <div className="px-10">
          <h1 className="text-3xl">Developer and designer</h1>
          <p className="text-gray-600">Freelancer providing services for web development and design content needs.<br></br>
          Please see my projects.</p>
        </div>
        <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={`${process.env.PUBLIC_URL}/propic1bg.png`} layout="fill" objectFit="cover" />
        </div>
        </div>
        <div>
        <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
        <p className="text-lg py-2 leading-8">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for agencies
          and collaborated with talanted people to create digital products
          for both business and consumer use.
        </p>
      </div>
      </>
    ) 
}

export default About
