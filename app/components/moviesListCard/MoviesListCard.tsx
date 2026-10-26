import {type FC} from "react";
import type {IMovie} from "../../models/IMovie.ts";
import styles from './MoviesListCard.module.css'
import PosterPreview from "../posterPreview/PosterPreview.tsx";
import MovieInfo from "../movieInfo/MovieInfo.tsx";

type MovieTypeProps = {
    movie: IMovie,
    compact?: boolean
}

const MoviesListCard: FC<MovieTypeProps> = ({movie, compact = false}) => {

    return (
        <div className={compact ? styles.cardCompact : styles.detailsContainer}>
            <PosterPreview posterPath={movie.poster_path} title={movie.title}/>
            <MovieInfo movie={movie} compact={compact}/>
        </div>
    );
};


export default MoviesListCard;
