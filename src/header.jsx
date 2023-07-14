import { CgProfile } from 'react-icons/cg'

function Header() {
    return ( 
            <header id="header" className='col-12 row justify-content-end shadow' style={{backgroundColor:"rgb(125, 177, 177)"}}>
                <div className='col-2 h5 justify-content-center mt-3 mb-3 text-light'>Ali Alami<CgProfile /></div>
            </header>
        
     );
}

export default Header;

