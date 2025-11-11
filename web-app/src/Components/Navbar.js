import navstyle from './Navbar.module.css';
function Navbar(){


    return(
        <>
        <div  className={navstyle.Nav}>
         <nav>
         <span className={navstyle.logo}>Luxe Haven</span>
            <ul className={navstyle.list}>
              
                
                <li><input></input><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/search-icon-svg-download-png-470386.png?f=webp&w=256' alt='search'></img></li>
                <li><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/home-icon-svg-download-png-6742605.png?f=webp&w=256' alt='home'></img></li>
                  <li><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/account-icon-svg-download-png-2731920.png?f=webp&w=256' alt='profile'></img></li>
                <li><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/heart-icon-svg-download-png-12404566.png?f=webp&w=256'alt='order'></img></li>
                <li><img src='https://cdn.iconscout.com/icon/premium/png-512-thumb/bag-icon-svg-download-png-10140913.png?f=webp&w=256' alt='cart'></img></li>
    
            </ul>
    
         </nav>
        </div>
        </>
    )
}


export default Navbar;