import { FacebookFilled, InstagramFilled, TikTokFilled } from "@ant-design/icons";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-800 text-white">
            <div className="container mx-auto py-12 px-4">
                <div className="grid md:grid-cols-4 gap-4">
                    <div>
                        <div className="text-2xl uppercase mb-4">
                            Đồ câu Phố Cảng
                        </div>
                        <div className="text-slate-300 mb-2">
                            Tiệm đồ câu nhỏ xinh tại Hải Phòng, chuyên cung cấp các loại dụng cụ câu cá chất lượng cao.
                        </div>
                        <ul className="mb-4">
                            <li>Địa chỉ: Tổ dân phố 3, phường Thiên Hương, TP. Thủy Nguyên, Hải Phòng</li>
                            <li>Điện thoại: +84 762.559.696</li>
                            <li>Email: defzone.net@gmail.com</li>
                        </ul>
                        <div className="flex space-x-4 text-2xl">
                            <a href="#">
                                <FacebookFilled />
                            </a>
                            <a href="#">
                                <InstagramFilled />
                            </a>
                            <a href="#">
                                <TikTokFilled />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 text-center py-4">
                &copy; 2025 Tiệm đồ câu Phố Cảng
            </div>
        </footer>
    );
};

export default Footer;