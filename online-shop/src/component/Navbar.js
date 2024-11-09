import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const menuList = ['여성','Divided','남성','신생아/유아','아동','H&M Home','Sale','지속가능성']
    return (
        <div>
            <div className='login-button'>
                <FontAwesomeIcon icon={faUser} />
                <div> 로그인 </div>
            </div>

            <div className='nav-section'>
                <img
                    width={100}
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ExBRfl1tbwJQJkK8ggXFHmrGMP24ZLmGDA&s' />
            </div>

            <div className='menu-area'>
                    <ul className='menu-list'>
                        {menuList.map((menu)=> (
                            <li>{menu}</li>
                        ))}
                    </ul>

                <div className='input-search'>
                    <FontAwesomeIcon icon={faSearch} />
                    <input type='text' placeholder='제품검색'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;