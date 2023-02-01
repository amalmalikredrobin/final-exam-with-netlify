import React from 'react'
import Link from 'next/link'

import {
    HomeIcon,
    HashtagIcon,
    BellIcon,
    MailIcon,
    BookmarkIcon,
    CollectionIcon,
    UserIcon,
    DotsCircleHorizontalIcon
} from "@heroicons/react/outline"

import SidebarRow from './SidebarRow'

const Sidebar = () => {
  return (
  <div className="flex flex-col col-span-2 items-center px-4 md:items-start">
    <Link href="/"><img 
    src="assets/images/twitter-logo.svg" alt="" className="h-10 w-10 m-3"/></Link>
    <Link href="/"><SidebarRow Icon={HomeIcon} title="Home" /></Link>
    <Link href="/explore"><SidebarRow Icon={HashtagIcon} title='Explore'/></Link>
    <Link href="/notifications"><SidebarRow Icon={BellIcon} title='Notifications'/></Link>
    <Link href="/messages"><SidebarRow Icon={MailIcon} title='Messages'/></Link>
    <Link href="/bookmarks"><SidebarRow Icon={BookmarkIcon} title='Bookmarks'/></Link>
    <Link href="/lists"><SidebarRow Icon={CollectionIcon} title='Lists'/></Link>
    <Link href="/profile"><SidebarRow Icon={UserIcon} title='Profile'/></Link>
    <Link href="/more"><SidebarRow Icon={DotsCircleHorizontalIcon} title='More'/></Link>
  </div> 
  )
}

export default Sidebar