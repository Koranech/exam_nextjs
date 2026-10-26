import styles from './Header.module.css'
import UserInfo from "../userInfo/UserInfo.tsx";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useMoviesFilters} from "../../hooks/useMoviesFilters.ts";

const Header = () => {

    const {search: currentSearch, setFilters} = useMoviesFilters()
    const [search, setSearch] = useState<string>(currentSearch)
    const navigate = useNavigate()
    const location = useLocation()

    const handleSearch = () => {
        const value = search.trim()

        if (location.pathname === '/' || location.pathname === '/genres') {
            setFilters({search: value})
        } else {
            navigate(value ? `/?page=1&search=${encodeURIComponent(value)}` : '/')
        }
    }

    const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handleSearch()
        }
    }

    return (
        <header className={styles.header}>
            <div className={styles.leftSide}>
                <UserInfo/>
            </div>
            <nav className={styles.navigation}>
                <NavLink to={'/'} className={({isActive}) => isActive ? styles.activeLink : styles.link}>
                    Movies
                </NavLink>
                <NavLink to={'/genres'} className={({isActive}) => isActive ? styles.activeLink : styles.link}>
                    Genres
                </NavLink>
            </nav>
            <div className={styles.rightSide}>
                <input
                    type="text"
                    placeholder='Search'
                    className={styles.searchInput}
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onKeyDown={handleEnter}
                />
                <button className={styles.searchButton} onClick={handleSearch}>Search</button>
            </div>
        </header>
    );
};

export default Header;
