

export default function Linkbox(){
    interface linkboxlink {
        href: string
        text: string
    }
    const links :linkboxlink[] = [
        {href:"https://github.com/Spudd1e", text:"Github :)"},
        {href:"https://github.com/Spudd1e/Spudd1e.github.io.git", text: "This Repo :)"}
    ]
    return (

        <ul>
            {
        links.map((item) => {
            return <li><a href={item.href} >{item.text}</a></li>
        })
    }

        </ul>
    )
}