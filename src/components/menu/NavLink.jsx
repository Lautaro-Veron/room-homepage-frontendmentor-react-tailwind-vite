const NavLink = (props) => {
    return (
        <a href="#" className="font-bold hover:">
        <span className="peer">{props.text}</span>
        <span className="block h-1 w-full scale-x-0 peer-hover:bg-pink-500 peer-hover:scale-x-100 transition-all duration-500"></span>
        </a>
    );
};

export default NavLink;