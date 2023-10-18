import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";

const Header = () => {
    return (
        <>
        <div className='py-6'>
            <div className='text-center grid justify-center'>
            <img src={logo} alt="#" />
            <p>Journalism Without Fear or Favour</p>
            <p className="text-xl">{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>

        <div className="flex">
      <button className="btn btn-secondary">Breking News</button>
      <Marquee speed={100} pauseOnHover>
       <Link to='/' className="mr-12"> I can be a React component, multiple React components, or just some
        text......</Link>
       <Link to='/' className="mr-12"> I can be a React component, multiple React components, or just some
        text......</Link>
       <Link to='/' className="mr-12"> I can be a React component, multiple React components, or just some
        text......</Link>
      </Marquee>
    </div>
        </>
    );
};

export default Header;