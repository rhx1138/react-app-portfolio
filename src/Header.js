import {Link} from 'react-router-dom'

function Header () {
    return (
        <section className="">
        <nav className="p-10 mb-12 flex justify-between sm:flex-col md:flex-row ">
          <h1 className="text-5xl bg-teal-300 font-Kanit">Ryan Hendrix</h1>
          <ul className="flex items-center text-xl font-Kanit sm:justify-center ">
            <li className="px-5"><Link to="/">About</Link></li>
            <li className="px-5"><Link to="/projects">Projects</Link></li>
            <li className="px-5"><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </section>
    )
}

export default Header