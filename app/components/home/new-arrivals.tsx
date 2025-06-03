/* eslint-disable @next/next/no-img-element */
import { apiProductNewArrivals } from "@/services/product";
import { IProductListItem } from "@/services/typings";
import { formatVND } from "@/utils/format";
import Link from "next/link";

const NewArrivals: React.FC = async () => {

    const response = await apiProductNewArrivals({ current: 1, pageSize: 12 });

    return (
        <section>
            <div className="container mx-auto py-8 px-4">
                <h2 className="text-2xl font-bold mb-6">Sản phẩm mới</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-2 2xl:gap-4">
                    {response.data.map((product: IProductListItem) => (
                        <div key={product.id} className="bg-white pb-2">
                            <Link href={`/product/${product.normalizedName}`} className="block hover:text-blue-500">
                                <div className="bg-slate-900 mb-2 rounded">
                                    <img src={product.thumbnail} alt={product.name} className="w-full h-48 2xl:h-52 object-cover rounded transition duration-500 hover:opacity-75" />
                                </div>
                                <h3 className="font-medium mb-1 px-2 line-clamp-2">{product.name}</h3>
                            </Link>
                            <div className="text-right text-red-500 text-sm font-semibold px-2">
                                <span className="line-through text-slate-400 mr-2">
                                    {product.price ? formatVND(product.price) : ''}
                                </span>
                                <span className="text-base">{formatVND(product.salePrice)}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewArrivals;