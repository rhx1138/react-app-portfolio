function Header () {
    return (
        <section className="">
        <nav className="p-10 mb-12 flex justify-between">
          <h1 className="text-5xl bg-cyan-300 font-Kanit">Ryan Hendrix</h1>
          <ul className="flex items-center text-xl font-Kanit">
            <li className="px-5"><a href="#">About</a></li>
            <li className="px-5"><a href="#">Projects</a></li>
            <li className="px-5"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </section>
    )
}

export default Header