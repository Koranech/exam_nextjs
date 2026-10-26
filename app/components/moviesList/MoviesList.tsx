import {type FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import styles from './MoviesList.module.css'
import {Link} from "react-router-dom";
import MoviesListCard from "../moviesListCard/MoviesListCard.tsx";


type MovieListProps = {
    movies: IMovie[],
    currentPage: number
}

const MoviesList: FC<MovieListProps> = ({movies, currentPage}) => {


    return (
        <div>
            <div className={styles.moviesGrid}>
                {
                    movies.map(movie => (
                            <Link
                                key={movie.id}
                                to={`/movies/${movie.id}`}
                                state={{fromPage: currentPage}}
                                className={styles.cardLink}>
                                    <MoviesListCard movie={movie} compact/>
                            </Link>
                        )
                    )

                }
            </div>
        </div>

    );
};

export default MoviesList;
