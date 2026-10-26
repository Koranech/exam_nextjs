import type {FC} from "react";
import styles from './PosterPreview.module.css'
import {posterBaseUrl} from "../../constants/constants.ts";

type PosterPreviewProps = {
    posterPath: string | null,
    title: string,
    compact?: boolean
}

const PosterPreview: FC<PosterPreviewProps> = ({posterPath, title, compact = false}) => {
    const mode = compact ? styles.compact : ''
    if (!posterPath) {
        return <div className={`${styles.noPoster} ${mode}`}>No poster available</div>
    }
    return (
        <img className={`${styles.poster} ${mode}`} src={`${posterBaseUrl}${posterPath}`} alt={title}></img>
    )
}

export default PosterPreview;
