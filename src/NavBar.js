import React from 'react'
import BackGroundPic from './BackGroundPic'

export default function NavBar(props) {
    return (
        <>
            <div className='BackPic_and_NavBar'>
                <div className='NavBar_Outline'>
                    <div className='NavBar_Part1'>
                        <input placeholder='Search UserName ' className='Search' value={props.text} onChange={props.Search} />
                        <button className='Search_Button' onClick={props.again}>
                            <img className='Search_Img' alt='pic' src='https://w7.pngwing.com/pngs/715/663/png-transparent-magnifying-glass-search-magnification-zoom-increase-to-find-examine-icon-thumbnail.png' />
                        </button>
                    </div>
                    <div className='NavBar_Part2'>
                        <div className='NavBar_Part2_Inside'>
                            <div className='Bio_part1'>
                                <div className='Bell_div'>
                                    <img className='Bell_Icon' alt='pic' src='https://www.svgrepo.com/show/31480/notification-bell.svg' />
                                </div>
                                <div className='Person_Icon'>
                                    <img className='Icon' alt='pic' src={props.navimg} />
                                </div>
                            </div>
                            <div className='Bio_part2'>
                                <div className='Name'>
                                    {props.barname}
                                    <select className='Select'></select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BackGroundPic lastlogin={props.lastlogin} name={props.name} email={props.email} location={props.location} folllow={props.folllow} folllower={props.folllower} img={props.img} link={props.link} bio={props.bio} company={props.company} id={props.id} org={props.org} img1={props.img1} ok={props.ok}/>
            </div>
        </>
    )
}
