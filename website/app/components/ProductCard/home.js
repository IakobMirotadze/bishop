import Link from "next/link";
import func from "../../../util/helpers/func";
import { useSelector } from "react-redux";
import Price from "../Price";
import { Button } from "antd";
import { IMG_URL } from "../../../../config";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Default = ({ data = null, className }) => {
   const { settings } = useSelector(({ settings }) => settings);
   const getVariantPrice = (data) => {
      if (data.length > 0) {
         const newData = data.sort((a, b) => {
            return a.price - b.price;
         });
         return (
            <span>
               <Price data={newData[0].price} /> -
               <Price data={newData[data.length - 1].price} />
            </span>
         );
      }
   };
   const allImgData = data?.allImages?.sort((a, b) => a.order - b.order);
   const img = allImgData[0] ? IMG_URL + allImgData[0].image : "/images/nofoto.jpg";

   return (
      <div className={className} key={data._id}>
         <div className=" relative float-left h-full cursor-pointer ">
            <Link href={"/product/" + data.seo}>
               <div className="w-full float-left">
                  <div className="relative flex items-center"
                       style={{maxHeight: 150, minHeight:150, minWidth: 200, maxWidth: 200}}
                  >
                     <span
                        className={`${func.getDiscount(data) ? "visible" : "invisible"
                        } absolute z-10 top-0 mt-2 text-xs float-left py-1 px-2 bg-red-600 text-white`}
                     >
                        {settings.price_type
                           ? "%" + Number(func.getDiscount(data)).toFixed(0)
                           : Number(func.getDiscount(data)).toFixed(0) + "%"}{" "}
                discount
                     </span>
                     <LazyLoadImage
                        className="w-full bg-cover bg-center  rounded-l-lg group-hover:scale-110 transition-all"
                        src={img}
                        alt={data.title}
                        style={{maxHeight: 150}}
                     />


                     <ul className="product-links">
                        {/* <li><a href="#" data-tip="Add to Wishlist"><HeartOutlined /></a></li>
                  <li><a href="#" data-tip="Quick View"><EyeOutlined /></a></li>
                */}
                     </ul>
                  </div>
                  <div className=" float-left">
                     {/* <ul className="rating">
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="fas fa-star"></li>
                      <li className="far fa-star"></li>
                      <li className="far fa-star"></li>
                  </ul>
              */}
                     <div className=" flex-col flex text-md  relative  ">
                        <h3 className="w-full float-left h-10 font-semibold  overflow-hidden px-1 mt-2    ">
                           {data.title}
                        </h3>
                       <div className="text-md h-12 z-10 relative flex items-center">
                       <h3 className="text-red-500 pl-1 font-semibold pr-2">
                         {data.type ? (
                           getVariantPrice(data.variant_products)
                         ) : (
                           <Price data={data.price} />
                         )}
                       </h3>
                       {!data.type ? (
                         <h4 className="text-gray-500 line-through font-semibold text-xs  w-full float-left ">

                           <>
                             {" "}
                             {data.before_price != 0 ? (
                               <Price data={data.before_price} />
                             ) : (
                               ""
                             )}
                           </>
                         </h4>
                       ): (
                         "")}
                     </div>

                     </div>
                  </div>
               </div>
            </Link>
         </div>
      </div>
   );
};

export default Default;
