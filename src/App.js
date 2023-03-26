import './App.css';
import NavBar from './NavBar';
import SideBar from './SideBar';
import { useEffect,useState } from 'react';
import Warning from './Warning';
function App() {
var i=0;
  const [text , SeTtext]=useState(null)
  const [Check , SeTcheck]=useState(null)
  const [img1 , SeTimg]=useState("https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-default-avatar-profile-icon-vector-social-media-user-image-vector-illustration-227787227.jpg")
  const [name , SeTname]=useState(null)
  const [location , SeTLocation]=useState(null)
  const [email1, SeTemail]=useState(null)
  const [last, SeTlast]=useState(null)
  const [follow, SeTfollow]=useState(null)
  const [follower, SeTfollower]=useState(null)
  const [link, SeTlink]=useState(null)
  const [barname, SeTbarname]=useState(null)
  const [company, SeTcompany]=useState(null)
  const [id, SeTid]=useState(null)
  const [org, SeTorg]=useState(null)
  const [warn, SeTwarn]=useState(false)
  const [msg, SeTmsg]=useState(false)
  const [ok, SeTok]=useState(false)
  const [bio, SeTbio]=useState(null)
  const Search=(event)=>{
    SeTtext(event.target.value)
    console.log(text)
  }
  var url="https://api.github.com/users/";
  const plus=()=>{
    // SeTcheck(null)
    SeTcheck(url+text)
    console.log(Check)
    var a=text
    var b=a.split(" ").join('')
    
  }
  // console.log(img,follow,follower,last)
  useEffect(()=>{
    // console.log(img,follow,follower,last)
    // SeTwarn(false)

    fetch(url+text)
    .then((res)=>{
      return res.json();
    })

    .then((data)=>{
      
      // console.log(data.message)
      if(data.message!=='Not Found'&& text!==null)
      {
        SeTimg(data.avatar_url)
        SeTname(data.name)
        SeTLocation(data.location)
        SeTemail(data.email)
        // console.log(email1)
        SeTlast('Last Seen : '+data.updated_at)
        SeTfollow(data.following)
        SeTfollower(data.followers)
        SeTlink(data.followers_url)
        var a=data.name;
        var b=a.slice(0,a.indexOf(" "));
        SeTbarname("Hello "+b)
        SeTbio(data.bio)
        SeTid(data.id)
        SeTcompany(data.company)
        SeTorg(data.organizations_url)
        if(email1==null)
        {
          SeTemail('No Email')

        }
        else if(company===null)
        {
          SeTcompany("No Organnization")
        }
        else if(org===null)
        {
          SeTok(true)
          SeTorg("http://localhost:3000/")

        }
        else if(bio===null)
        {
          SeTbio('No Bio')
        }

        // console.log(data)
      }
      else if(data.message==='Not Found'){
        SeTmsg(data.message)
        SeTwarn(true)
      }
    })
  },[Check])
  return (
    <>
      <div className='all'>
        <SideBar />
        <NavBar Search={Search} again={plus} name={name} location={location} email={email1} lastlogin={last} folllow={follow} folllower={follower} link={link} barname={barname} bio={bio} org={org} id={id} company={company} navimg={img1} img1={img1} ok={ok}/>

      </div>
      {warn&& <Warning msg={msg}/>}
    </>
  );
}

export default App;
