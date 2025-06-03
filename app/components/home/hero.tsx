/* eslint-disable @next/next/no-img-element */
import { BarsOutlined, SlackOutlined } from "@ant-design/icons";

const HeroSection: React.FC = () => {
    return (
        <section>
            <div className="container mx-auto">
                <div className="md:flex gap-4">
                    <div className="hidden md:block w-96 bg-white">
                        <div className="p-3 border-b border-gray-200 text-slate-800 bg-slate-900 rounded-t text-white">
                            <h2 className="text-lg font-semibold"><BarsOutlined /> Danh mục sản phẩm</h2>
                        </div>
                        <ul>
                            <li className="p-4 border-b border-gray-200 hover:bg-blue-100"><SlackOutlined className="mr-2" />Cần câu</li>
                            <li className="p-4 border-b border-gray-200 hover:bg-blue-100"><SlackOutlined className="mr-2" />Mồi câu</li>
                            <li className="p-4 border-b border-gray-200 hover:bg-blue-100"><SlackOutlined className="mr-2" />Lưỡi câu</li>
                            <li className="p-4 border-b border-gray-200 hover:bg-blue-100"><SlackOutlined className="mr-2" />Phao câu</li>
                            <li className="p-4 border-b border-gray-200 hover:bg-blue-100"><SlackOutlined className="mr-2" />Dây câu</li>
                        </ul>
                    </div>
                    <div className="flex-1">
                        <img src="https://merto-be87.kxcdn.com/merto/wp-content/uploads/2024/09/slide1-demo2.jpg" alt="Hero Image" className="w-full rounded-lg h-96 object-cover" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;