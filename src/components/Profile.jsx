import clsx from "clsx";
import css from "./Profile.module.css";

export function Profile({ name, tag, location, stats, image }) {
  return (
    <div className={clsx(css.container)}>
      <div className={clsx(css.info)}>
        <img src={image} alt={name} width={480} className={clsx(css.image)} />
        <p className={clsx(css.userName)}>{name}</p>
        <p className={clsx(css.tag)}>@{tag}</p>
        <p className={clsx(css.location)}>{location}</p>
      </div>

      <ul className={clsx(css.stats)}>
        <li className={clsx(css.statsList)}>
          <span>Followers</span>
          <span className={clsx(css.statsNumbers)}>{stats.followers}</span>
        </li>
        <li className={clsx(css.statsList)}>
          <span>Views</span>
          <span className={clsx(css.statsNumbers)}>{stats.views}</span>
        </li>
        <li className={clsx(css.statsList)}>
          <span>Likes</span>
          <span className={clsx(css.statsNumbers)}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
