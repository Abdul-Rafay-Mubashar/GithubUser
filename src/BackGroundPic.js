import React from 'react'

export default function BackGroundPic(props) {
    return (
        <>
            <div className='Back_Pic'>
                <img src='https://img.freepik.com/free-vector/hand-painted-background-different-colors_23-2148942310.jpg' className='Back_Pic_Icon' alt='pic' />
            </div>
            <div className='Info_Chart'>
            </div>
            <div className='Info_Chart1'>
                <div className='Info_Chart_Part1'>
                    <div className='Profile_Pic'>
                        <div className='Profile_Pic_Frame'>
                            <img className='Profile_Pic_Frame_Inside' alt='pic' src={props.img1}>
                            </img>
                        </div>
                    </div>
                    <div className='Personal_Info'>
                        <div className='Personal_Info_Location_And_CD'>
                            <div className='Personal_Info_Profile'>
                                My Profile
                            </div>
                            <div className='Personal_Info_Location'>
                                {props.location}
                                <br />
                                {props.lastlogin}
                            </div>
                        </div>
                        <div className='Phone_and_Nubmber'>
                            <div className='Person_Name'>
                                {props.name}
                            </div>
                            <div className='Phone'>
                                {props.phone}
                            </div>
                        </div>
                        <div className='Phone_and_Nubmber'>
                            {props.email}
                        </div>
                        <div className='Alert'>
                            SMS Alert Activation
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1xAOLT9970PWDBtYstpvnsZ20Ig5LHVJ7j8aCg28&s' className='Alert_Pic' alt="pic" />
                        </div>
                        <div className='Phone_and_Nubmber1'>
                            <button className='Save_Button'>Save</button>
                        </div>
                    </div>
                </div>
                <div className='Info_Chart_Part11'>
                    <div className='Info_Chart_Part'>
                        <div className='Info_Chart_Part2'>
                            <div className='Account'>
                                <div className='Account_Detail'>
                                    Followers & Following
                                </div>
                            </div>

                            <div className='Following'>
                                <a href={props.link} className='Following_Com'>
                                    <div className='Follow'>
                                        Following
                                    </div>
                                    <div className='Follow_Num'>
                                        {props.folllow}
                                    </div>
                                </a>
                            </div>
                            <div className='Followers'>
                                <a href={'https://www.youtube.com/'} className='Following_Com'>
                                    <div className='Follow'>
                                        Followers
                                    </div>
                                    <div className='Follow_Num'>
                                        {props.folllower}
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='Info_Chart_Part3'>
                        <div className='Info_Chart_Part2'>
                            <div className='Account'>
                                <div className='Account_Detail'>
                                    Account Detail
                                </div>

                            </div>
                            <div className='Account_Com'>
                                <div className='Basic_Account_Component'>
                                    Company : {props.company}
                                </div>
                            </div>
                            <div className='Account_Com'>
                                <div className='Basic_Account_Component'>
                                    Account ID : {props.id}
                                </div>
                            </div>
                            <div className='Account_Com'>
                                <div className='Basic_Account_Component1'>
                                    <a href={props.org} className='Account_Amit' >
                                        Click To Visit Organnization {props.ok&&<p> No Organization</p>
                                        }
                                    </a>
                                </div>
                            </div>
                            <div className='Account_Com1'>
                                <div className='Basic_Account_Component2'>
                                    Bio : {props.bio}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
