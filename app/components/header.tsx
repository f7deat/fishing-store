import { LikeOutlined, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"

const Header: React.FC = () => {
    return (
        <header>
            <div className="container mx-auto border-b flex justify-between items-center py-4 px-4 text-xl">
                <div className="font-bold uppercase">Phố Cảng</div>
                <ul className="flex space-x-4">
                    <li><SearchOutlined /></li>
                    <li><UserOutlined /></li>
                    <li><ShoppingCartOutlined /></li>
                    <li><LikeOutlined /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;