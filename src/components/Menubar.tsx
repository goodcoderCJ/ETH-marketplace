import {Link} from 'react-router-dom';


// creating variable for navigation links

type Nav = {
   name: string,
   path: string,
   id: number
}
const navlink : Nav[] = [{name: 'Auctions', path: '/',id:1}, {name: 'Roadmap', path: '/roadmap', id:2}, {name: 'Discover', path: '/discover', id:3},{name: 'Community', path: '/community',id:4}]


//Menu for navigation
const Menubar = () => {
// creating useNavigate variable
  

  return (
    <nav className="menubar  text-gray-300">
        <div className="nav-links flex justify-between gap-8 text-[14px]">
         {navlink.map((nav) => (<><Link to={nav.path} key={nav.id}>{nav.name}</Link></>))}
        </div>
       
       
        
    </nav>
  )
}

export default Menubar