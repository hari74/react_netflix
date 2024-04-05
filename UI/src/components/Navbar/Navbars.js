


import React, { useEffect, useMemo, useRef, useState } from 'react';
import { signOut,onAuthStateChanged } from 'firebase/auth';
import './navbar.css';
import user_logo from './user_logo.png'
// import { firebaseAuth } from '../../Pages/Firebase/Firebaseconfig';
import { useNavigate } from 'react-router-dom';
import { auth } from "../Firebase/Firebaseconfig";
 import { FaQuestionCircle } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../redux/Reducer';
import Search from '../searchbar/Search';
import Slider from '../Pages/searchfilter/Searchfilter';
//  import { Link } from 'react-router-dom';
// import Search from '../components/searchbar/Search';


const Mainnav = () => {


    const search_input =useRef()
    const abc = useRef()
    const scrolling = useRef()
    const side_bar = useRef()
    const [notify,setnotify] = useState(false)
    const [user,setuser] = useState(false)
   
    
    const searchQuery = useSelector((state) => state.list.movies);
    console.log(searchQuery)

    function zoom(){
        abc.current.classList.add('stretch')
        search_input.current.focus()
        search_input.current.classList.add('expand')
    }
    function menu(){
        side_bar.current.classList.toggle('slide')
    }


    

    const navigate = useNavigate()

    const onAuthStateChanged = () => {
        signOut(auth)
            .then(() => {
                navigate('/signin');
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    

    window.onselectstart=()=>{
        abc.current.classList.remove('stretch');
        search_input.current.classList.remove('expand');
        side_bar.current.classList.remove('slide')
    };

    function abcd(){
        if(window.innerWidth<970){
            search_input.current.placeholder = 'Search'
        }
        else{
            search_input.current.placeholder = 'Titles,people,genres'
        }
    }
    window.onresize=()=>{
        abcd()
    }
    //navbar background color
    useEffect(()=>{
        const handleScroll =()=>{
          const Nav = document.getElementById('navv')
          if(window.scrollY > 0){
            Nav.style.backgroundColor='black'
          }
          else{
            Nav.style.background=' linear-gradient(black, transparent)'
          }
        }
        window.addEventListener('scroll',handleScroll)
        return()=>{
          window.removeEventListener('scroll',handleScroll)
        }
      },[])

    


// console.log(notify)


// search bar
const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');
  const handleSearch = (e) => {
    // const query = e.target.value;
    // setSearchValue(query);
    // dispatch(setSearchQuery(query));
    setSearch(e.target.value)
    // Additional logic for handling the search query...
  };

  const [Search, setSearch] = useState('')

const product = useMemo(() => {
    let index=Search.length
    return (
        searchQuery.filter((e)=> {
            return (
                e.title.substr(0,index).toLowerCase().includes(Search)||e.title.substr(0,index).includes(Search)||e.title.substr(0,index).toUpperCase().includes(Search)
            )
        })
    )
}, [searchQuery, Search])
console.log(product)



// user profile
const useremail= localStorage.getItem('userEmail');
console.log(useremail);
    return (
        <div>

            <div id='navv' className="main_nav" ref={scrolling}>


            <div className="left_main">

            <div className="main_logo">
            <img src="https://assets.nflxext.com/ffe/siteui/akira/fallback/hamburger.gif" className="netflix-header-more" alt='Menu' onClick={menu}/>
            <svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg"  aria-hidden="true" role="img" className="default-ltr-cache-1d568uk ev1dnif2" fill='#E50914'>
                                <g>
                            <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path>
                            </g>
                            </svg>
            </div>

            <ul className="left_nav">
              
               <li onClick={()=>navigate("/profile")}>Home </li>
                <li onClick={()=>navigate('/tv')}>TV Shows</li>
                <li onClick={()=>navigate('/movie')}>Movies</li>
                {/* <li>New & Popular</li> */}
                <li onClick={()=>navigate('/mylist')}>My List</li>
                <li className='browse'>Browse 
                    <div className='browse_main'>
                    <i className='fa-solid fa-sort-up'></i>
                        <div className='browse_lists'>
                            <div className="lists">
                                <p>Home</p>
                                <p>My List</p>
                            </div>
                            <div className="lists">
                                <p>Thrillers</p>
                                <p>International Movies & Tv</p>
                                <p>Action</p>
                                <p>Fantasy</p>
                                <p>Horror</p>
                                <p>Documentaries</p>
                                <p>Music & Musicals</p>
                                <p>Engilsh Films</p>
                            </div>
                            <div className="lists">
                                <p>Hindi Movies & TV</p>
                                <p>Malayalam-Language Movies</p>
                                <p>Animie</p>
                                <p>Sci-Fi</p>
                                <p>Marathi-Language Movies</p>
                                <p>Bollywood</p>
                                <p>Romance</p>
                                <p>Dramas</p>
                            </div>
                            <div className="lists">
                                <p>Children & Family</p>
                                <p>Reality, Variety & Talk Shows</p>
                                <p>Comedies</p>
                                <p>Tamil-Language Movies</p>
                                <p>Stand-up Comedy</p>
                                <p>Hollywood Movies</p>
                                <p>Made in India</p>
                            </div>
                        </div>
                    </div>
                </li>
                <li className='child'>Children</li>
                <li className='browsebylang'>Browse by Languages</li>
            </ul>
            </div>


            <div className="right_main">
                <div className="right_nav">
                    <div className="nav_search" ref={abc}>
                        <input type="search" placeholder='Titles,people,genres' ref={search_input}  onChange={handleSearch} />
                        <i className='bx bx-search' onClick={zoom}></i>
                    </div>

                    <ul className="nav_child">
                        <li>Children</li>
                    </ul>

                    {/* <div> */}
                    <div className="nav_notify" onMouseEnter={()=>setnotify(true)} onMouseLeave={()=>setnotify(false)}>
                    <div className="svg" ><svg width="22" height="22" viewBox="0 0 24 24" fill="#ffffff" xmlns="http://www.w3.org/2000/svg" className="ltr-4z3qvp e1svuwfo1" data-name="Bell" aria-labelledby=":Rlp94m:" aria-hidden="true"><path fillRule="evenodd" clipRule="evenodd" d="M13.0002 4.07092C16.3924 4.55624 19 7.4736 19 11V15.2538C20.0489 15.3307 21.0851 15.4245 22.1072 15.5347L21.8928 17.5232C18.7222 17.1813 15.4092 17 12 17C8.59081 17 5.27788 17.1813 2.10723 17.5232L1.89282 15.5347C2.91498 15.4245 3.95119 15.3307 5.00003 15.2538V11C5.00003 7.47345 7.60784 4.55599 11.0002 4.07086V2H13.0002V4.07092ZM17 15.1287V11C17 8.23858 14.7614 6 12 6C9.2386 6 7.00003 8.23858 7.00003 11V15.1287C8.64066 15.0437 10.3091 15 12 15C13.691 15 15.3594 15.0437 17 15.1287ZM8.62593 19.3712C8.66235 20.5173 10.1512 22 11.9996 22C13.848 22 15.3368 20.5173 15.3732 19.3712C15.3803 19.1489 15.1758 19 14.9533 19H9.0458C8.82333 19 8.61886 19.1489 8.62593 19.3712Z" fill="currentColor"/></svg>
   {  notify  &&     <div className="notify_main" onMouseEnter={()=>setnotify(true)} onMouseLeave={()=>setnotify(false)}>
                        <i className="fa-solid fa-sort-up" ></i>
                    <div className="notify_notify">
                        <p>No recent notifications</p>
                    </div>
                    </div> }
                    </div>
                    
                    </div>
                    {/* </div> */}

                    <div className="nav_user">

                        <div className="user_logo" onMouseEnter={()=>setuser(true)} onMouseLeave={()=>setuser(false)}>
                        <img src={user_logo} alt="userlogo" />
                        <i className="fa-solid fa-sort-down" ></i>
                        <p className='profile'>Profile</p>
                {user &&     <div className="sign_opt" onMouseEnter={()=>setuser(true)} onMouseLeave={()=>setuser(false)}>
                            <i className="fa-solid fa-sort-up"></i>
                            <div className="sign_acc">
                                <p>{useremail}</p>
                                <p><i className="fa-regular fa-user"></i> Account</p>
                                <p><FaQuestionCircle />Help center</p>
                                <p className='sign_out' onClick={onAuthStateChanged}>Sign out of Netflix</p>
                            </div>
                        </div>}
                        </div>


                        </div>

                    </div>

                </div>
            </div>

            <div className="side_bar" ref={side_bar}>

                <div className="nav_user2">
                    <img src={user_logo} alt="userlogo" />
                    <p className='profile2'>Profile</p>
                </div>
                
                <ul className="nav_list2">
                   
                    <li>Account</li>
                    <li>Help Centre</li>
                    <li>Sign out of Netflix</li>
                </ul>

                <ul className="movies_lists2">
                    <li>Home</li>
                    <li>My List</li>
                    <li>Thrillers</li>
                    <li>Hindi Movies & TV</li>
                    <li>Children & Family</li>
                    <li>International Movies & Tv</li>
                    <li>Malayalam-Language Movies</li>
                    <li>Reality, Variety & Talk Shows</li>
                    <li>Action</li>
                    <li>Animie</li>
                    <li>Comedies</li>
                    <li>Fantasy</li>
                    <li>Sci-Fi</li>
                    <li>Tamil-Language Movies</li>
                    <li>Horror</li>
                    <li>Marathi-Language Movies</li>
                    <li>Stand-up Comedy</li>
                    <li>Documentaries</li>
                    <li>Bollywood</li>
                    <li>Hollywood Movies</li>
                    <li>Music & Musicals</li>
                    <li>Romance</li>
                    <li>Made in India</li>
                    <li>Engilsh Films</li>
                    <li>Dramas</li>
                </ul>

            </div>

            <div className='filterItemBox' style={{position:'fixed',top:'0',zIndex:'9001'}}>

{Search!==''&& 
<Slider data={product}/>
}
</div>

        </div>
    );
};

export default Mainnav;



// 26370c622e0f21257dbc25703f55be5e
// api key