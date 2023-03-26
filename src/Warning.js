import React from 'react'

export default function Warning(props) {
  const close=()=>{
    document.getElementsByClassName('Warning_Outline')[0].style.display="none"
  }
  return (
    <div className='Warning_Outline'>
        <div className='Basic_Warning'>
            <div className='Warning_First_Portion'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScq-vbhh37A0bPWwZKHsedu_pvAdydKV1Rp1wRtaL7_PurAyp3i3a6VyTJ5cF_0QibFAk&usqp=CAU' className='Close_Pic' alt='pic' onClick={close}/>
            </div>
            <div className='Warning_Second_Portion'>
                {props.msg}
            </div>
        </div>
    </div>
  )
}
