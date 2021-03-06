import React, { FC, ComponentType, SVGProps } from 'react';
import classes from './Sidebar.module.scss';
import { NavLink } from 'react-router-dom';
import { useAppRoutes } from '@/hooks/useAppRoutes';
import { RouteKeys } from '@/router';
import HomeIcon from '@/components/icons/HomeIcon';
import CommentIcon from '@/components/icons/CommentIcon';
import UsersIcon from '@/components/icons/UsersIcon';
import ProfileIcon from '@/components/icons/ProfileIcon';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

interface ILinkClassNameArgs {
  isActive: boolean;
}

const Sidebar: FC = () => {
  const [routes] = useAppRoutes();

  const iconsMap = new Map<RouteKeys, ComponentType>([
    [RouteKeys.HOME, HomeIcon],
    [RouteKeys.TOPICS, CommentIcon],
    [RouteKeys.USERS, UsersIcon],
    [RouteKeys.PROFILE, ProfileIcon]
  ]);

  const linkClassName = ({ isActive }: ILinkClassNameArgs): string => {
    return `${classes.sidebar__link} ${isActive ? classes['sidebar__link--active'] : ''}`;
  };

  return (
    <aside className={classes.sidebar}>
      <ul className={classes.sidebar__list}>
        {routes.map((route) => {
          const Icon = iconsMap.get(route.key) as ComponentType<SVGProps<SVGSVGElement>>;
          return (
            <li key={route.key}>
              <NavLink
                to={route.path}
                className={linkClassName}>
                <Icon className={classes.link__icon} />
                <span className={classes.link__text}>{route.name}</span>
              </NavLink>
            </li>
          );
        })}
      </ul>
      <WalletMultiButton />
    </aside>
  );
};

export default Sidebar;
