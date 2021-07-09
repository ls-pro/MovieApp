import React from 'react'
import { unavailable, img_300 } from '../../config/config'
import './SingleContent.css';
import {Badge} from "@material-ui/core";
import ContentModal from "../ContentModel/ContentModel";

// const SingleContent = ({
//     id,
//     poster,
//     title, 
//     date,
//     media_type,
//     vote_average,
// }) => {
//     return (
//         <div className ="media">
//             <Badge badgeContent={vote_average} color={vote_average > 7 ? 'primary' : 'secondary'}/>
//             <img 
//             className = "poster"
//             src={poster ? `${img_300}/${poster}`: unavailable}
//             />
//             <b className="title">{title}</b>
//             <span className="subTitle">
//                 {media_type === "tv" ? "TV Series" : "Movie"}
//                 <span className ="subTitle">{date}</span>
//             </span>
//         </div>
//     )
// }

// export default SingleContent

// import ContentModal from "../ContentModal/ContentModal";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
}) => {
  return (
    <ContentModal media_type={media_type} id={id}>
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
