/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  TypedUseSelectorHook,
  useSelector as useSelectorGeneric
} from 'react-redux'

import { Dashboard, Description, Person } from '@material-ui/icons'

import { AppState } from '../../types'
import { selectAuthedUser } from '../../store/selectors/user'
import { fetchCurrentUser } from '../../api/user'

import TopNav from '../../components/TopNav'
import SideNav from '../../components/SideNav'

import ProjectsView from '../Projects'
import ProfileView from '../Profile'
import HomeView from '../Home'

import './styles.scss'

const useSelector: TypedUseSelectorHook<AppState> = useSelectorGeneric

const routes = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: <Dashboard />,
    view: <HomeView />,
    isNavItem: true
  },
  {
    name: 'Projects',
    path: '/dashboard/projects',
    icon: <Description />,
    view: <ProjectsView />,
    isNavItem: true
  },
  {
    name: 'Profile',
    path: '/dashboard/profile',
    icon: <Person />,
    view: <ProfileView />,
    isNavItem: false
  }
]

interface Props {}

const DashboardView: React.FC<Props> = () => {
  const authedUser = useSelector(selectAuthedUser)
  const location = useLocation()

  useEffect(() => {
    if (authedUser) fetchCurrentUser(authedUser.id)
  }, [])

  return (
    <div className='dashboard'>
      <div className='wrapper'>
        <SideNav routes={routes} />

        <div className='right'>
          <TopNav routes={routes} />
          {routes.map(
            (route) =>
              route.view !== null &&
              location.pathname === route.path &&
              route.view
          )}
        </div>
      </div>
    </div>
  )
}

export default DashboardView
