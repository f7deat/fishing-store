/* eslint-disable @next/next/no-img-element */
import { LikeOutlined, MailFilled, PhoneFilled, SearchOutlined, ShoppingCartOutlined, UserOutlined } from "@ant-design/icons"
import Link from "next/link";

const Header: React.FC = () => {
    return (
        <header>
            <div className="bg-slate-900 text-white py-2 px-4">
                <div className="container mx-auto text-sm">
                    <div className="flex justify-between items-center">
                        <div>
                            <span><MailFilled /> <a href="mailto:defzone.net@gmail.com">defzone.net@gmail.com</a></span>
                            <span className="ml-4"><PhoneFilled /> +84 762.559.696</span>
                        </div>
                        <div className="flex-1 flex justify-end">
                            <div className="flex space-x-4">
                                <a href="#" className="hover:text-white">Đăng nhập</a>
                                <a href="#" className="hover:text-white">Đăng ký</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="shadow bg-white">
                <div className="container mx-auto flex justify-between items-center py-4 px-4 text-xl">
                    <div className="font-bold uppercase">
                        <Link href="/" className="text-slate-900 hover:text-blue-600">
                            <img src="https://homemarket.com.cy/media/logo/stores/1/LOGO.png" alt="Tiệm đồ câu Phố Cảng" className="h-12 inline-block mr-2" />
                        </Link>
                    </div>
                    <div className="flex-1 flex justify-center">
                        <div className="bg-slate-100 rounded-lg flex p-1">
                            <input type="search" placeholder="Tìm kiếm sản phẩm..." className="px-4 focus:outline-none text-base" />
                            <button className="bg-slate-900 text-white w-10 h-10 flex items-center justify-center rounded-lg hover:bg-slate-700 focus:outline-none"><SearchOutlined /></button>
                        </div>
                    </div>
                    <ul className="flex space-x-4">
                        <li><UserOutlined /></li>
                        <li><ShoppingCartOutlined /></li>
                        <li><LikeOutlined /></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;