function Projects () {
    return (
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
    )
}

export default Projects