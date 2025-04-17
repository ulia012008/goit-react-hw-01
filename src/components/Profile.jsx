import clsx from "clsx";
import css from "./Profile.module.css";

export function Profile({ name, tag, location, stats, image }) {
  return (
    <div>
      <div>
        <img src={image} alt={name} width={640} className="{clsx(css[image])" />
        <p>{name}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
