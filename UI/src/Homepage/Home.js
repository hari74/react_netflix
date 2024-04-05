import React from 'react';
import Navbars from '../components/Navbar/Navbars';

import Moviecards from "../components/redux/Moviecards";
import ReducerFile from '../components/redux/ReducerFile';
import FooterHome from '../HomepageFooter/FooterHome';
import { useSelector } from 'react-redux';
import Search from '../components/searchbar/Search';

// import FooterHome from '../HomepageFooter/FooterHome';
const Home = () => {
    // const dispatch = useDispatch();
    const select = useSelector(state => state.list);
    // console.log(select)
    const geners=select
    const show=[...geners.movies]
    console.log(show)

    const searchQuery = useSelector((state) => state.list.searchQuery);
    console.log(searchQuery)
    return (
        <div >
            <Navbars/>
           
            <ReducerFile shows={show}/>
            <Moviecards/>
         <FooterHome/>
         {/* <div className="search_c" style={{position:'fixed',top:'0PX',background:'#141414',width:'100VW',height:'100%',zIndex:'40',paddingTop:'100px'}}>
         <Search search={searchQuery} show={show}/>
         </div> */}
        </div>
    );
};

export default Home;