import { FacebookFilled, InstagramFilled, TikTokFilled } from "@ant-design/icons";

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-900 text-white">
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
                    <div>
                        <div className="text-lg font-semibold mb-4">Liên hệ</div>
                        <ul className="text-slate-300">
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Hỗ trợ khách hàng</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Gửi câu hỏi</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Phản hồi</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Trợ giúp</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-lg font-semibold mb-4">Liên kết nhanh</div>
                        <ul className="text-slate-300">
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Trang chủ</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Sản phẩm</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Giới thiệu</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Liên hệ</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Chính sách bảo mật</a>
                            </li>
                            <li className="mb-2">
                                <a href="#" className="hover:text-white">Điều khoản dịch vụ</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="text-lg font-semibold mb-4">Nhận bản tin</div>
                        <div className="text-slate-300">Đăng ký nhận bản tin để cập nhật thông tin khuyến mãi và sản phẩm mới nhất.</div>
                        <form className="mt-4">
                            <input
                                type="email"
                                placeholder="Nhập email của bạn"
                                className="w-full p-2 rounded bg-slate-800 text-white mb-2"
                            />
                            <button
                                type="submit"
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
                            >
                                Đăng ký
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="bg-slate-900 text-center py-4 border-t border-slate-700">
                &copy; 2025 All rights reserved. Tiệm đồ câu Phố Cảng
            </div>
        </footer>
    );
};

export default Footer;