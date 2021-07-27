import React from 'react'
import './SideNav.css'

export default function SideNav() {
    const menus = [
        { to: '/r/popular', text: "Popular"},
        { to: '/r/all', text: "All"},
        { to: '/r/random', text: "Random"}
    ]
    const sublinks = [
        "askreddit",
        "worldnews",
        "videos",
        "funny",
        "todayilearned",
        "pics",
        "gaming",
        "movies",
        "news",
        "gifs",
        "aww",
        "mildlyinteresting",
        "showerthoughts",
        "television",
        "jokes",
        "science",
        "soccer",
        "internetisbeautiful",
        "dataisbeautiful"

    ]
    return (
        <div className="sidenav">
            <div className="sidenav_logo" >
                <img src="https://www.vectorico.com/download/social_media/Reddit-Icon.jpg"/>
            </div>
            <div className="sidenav_search" >
                <input type="text" name="search" placeholder="search" />
                <i className="fas fa-search"></i>
            </div>
            <div className="sidenav_links" >
                <ul className="sidenav_menu" >
                    {menus.map(menu => (
                        <li><a href={menu.to}>{menu.text}</a></li>

                    ))}
                </ul>
                <br />
                <ul className="sidenav_sublinks">
                        {sublinks.map(sublink => (
                            <li><a href={`/r/${sublink}`}>{sublink}</a></li>
                        ))}
                </ul>

            </div>
      
        </div>
    )
}