import { Profile } from '../components/profile/profile';
import { Statistics } from '../components/statistics/statistics';
import user from '../data/userData.json';
import css from '../common/App.module.css';
import stats from '../data/statsData.json';


export const App = () => {
  return (
    <div className={css.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        key={user.tag}       
      />
      <Statistics
        data={stats}
        title='Upload stats'
      />
    </div>
  );
};
