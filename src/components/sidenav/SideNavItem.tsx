import './SideNavItem.scss'

interface navItem {
    text : string,
    page : string
}
export default function SideNavItem(props : navItem){
    
    return (<div>
        <a className='navLink' href={props.page}><h1>{props.text}</h1></a>
    </div>)
}