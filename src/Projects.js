function Projects () {
    return (
      <>
      <div>
        <h3 className="text-3xl py-1 dark:text-black ">Portofolio</h3>
        <p className="text-lg py-2 leading-8 font-mono">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for agencies
          and collaborated with talanted people to create digital products
          for both business and consumer use.
        </p>
      </div>
        <section className="py-10">
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web1.jpg`}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web2.jpg`}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web3.jpg`}
                alt=""
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={`${process.env.PUBLIC_URL}/web4.jpg`}
                alt=""
              />
            </div>
          </div>
        </section>
        </>
    )
}

export default Projects