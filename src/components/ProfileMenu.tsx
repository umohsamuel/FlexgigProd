interface ProfileMenuItem {
    title: string;
    url: string;
}

interface ProfileMenuProps {
    items: ProfileMenuItem[]
}

const ProfileMenu: React.FC<ProfileMenuProps> = ({ items }) => {
    return (
        <ul className="p-3"> 
            {items.map((item, index) => (
                <li key={index} className="px-2 py-2 cursor-pointer hover:bg-slate-200 rounded-lg">
                    <a href={item.url}>{ item.title }</a>
                </li>
            ))}
        </ul>
    )
} 

export default ProfileMenu