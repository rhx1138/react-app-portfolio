import logo from './logo.svg';
import './App.css';


function App() {
  return (
    <div className="App">
       <main className="bg-white px-10">
      <section className="min-h-screen">
        <nav className="p-10 mb-12 flex justify-between">
          <h1 className="text-5xl bg-cyan-300 font-Kanit">Ryan Hendrix</h1>
          <ul className="flex items-center text-xl font-Kanit">
            <li className="px-5"><a href="#">About</a></li>
            <li className="px-5"><a href="#">Projects</a></li>
            <li className="px-5"><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="">
        <div className="px-10">
          <h1 className="text-3xl">Developer and designer</h1>
          <p className="text-gray-600">Freelancer providing services for web development and design content needs.<br></br>
          Please see my work below.</p>
        </div>
        <div className="mx-auto bg-gradient-to-b from-cyan-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <img src={`${process.env.PUBLIC_URL}/propic1bg.png`} layout="fill" objectFit="cover" />
        </div>
        </div>
      </section>
      <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 dark:text-white ">Portofolio</h3>
            <p className="text-lg py-2 leading-8">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for agencies
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-lg py-2 leading-8">
              I offer from a wide range of services, including brand design,
              web design and development, and content creation.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web1.jpg`}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web2.jpg`}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web3.jpg`}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web4.jpg`}
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
