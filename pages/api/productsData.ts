import { NextApiRequest, NextApiResponse } from "next";

interface ProductsData {
  id: number;
  name: string;
  status: string;
  price: number;
  totalSales: number;
  createdAt: string;
  imageUrl: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const data: ProductsData[] = [
    {
      id: 1,
      name: "Iphone 16",
      status: "Draft",
      price: 499.99,
      totalSales: 25,
      createdAt: "2023-07-12T10:42:00Z",
      imageUrl:
        "https://www.apple.com/newsroom/images/2024/09/apple-introduces-iphone-16-and-iphone-16-plus/article/geo/Apple-iPhone-16-hero-geo-240909_inline.jpg.large.jpg",
    },
    {
      id: 2,
      name: "Google Play Gift Card",
      status: "Active",
      price: 129.99,
      totalSales: 100,
      createdAt: "2023-10-18T15:21:00Z",
      imageUrl:
        "https://giftnix-product-images.s3.us-west-2.amazonaws.com/icd/10-google-play-digital-gift-card-email-delivery-2x",
    },
    {
      id: 3,
      name: "Robux",
      status: "Active",
      price: 39.99,
      totalSales: 50,
      createdAt: "2023-11-29T08:15:00Z",
      imageUrl: "https://i.ebayimg.com/images/g/IBIAAOSwkKxk4r9A/s-l1600.jpg",
    },
    {
      id: 4,
      name: "iPhone 14 Pro",
      status: "Active",
      price: 999.99,
      totalSales: 500,
      createdAt: "2024-01-15T10:00:00Z",
      imageUrl:
        "https://mediam.istudio.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/i/p/iphone_14_pro_deep_purple_pdp_image_position-1a_deep_purple_color_sea.jpg",
    },
    {
      id: 5,
      name: "AirPods Pro 2",
      status: "Active",
      price: 249.99,
      totalSales: 300,
      createdAt: "2024-02-10T11:30:00Z",
      imageUrl:
        "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111851_sp880-airpods-Pro-2nd-gen.png",
    },
    {
      id: 6,
      name: "MacBook Pro 16",
      status: "Active",
      price: 2399.99,
      totalSales: 150,
      createdAt: "2024-03-01T09:00:00Z",
      imageUrl:
        "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111339_sp818-mbp13touch-silver-select-202005.png",
    },
    {
      id: 7,
      name: "Apple Watch Ultra",
      status: "Draft",
      price: 799.99,
      totalSales: 50,
      createdAt: "2024-04-20T12:00:00Z",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MYG03ref_FV98_VW_34FR+watch-case-44-aluminum-midnight-nc-se_VW_34FR+watch-face-44-aluminum-midnight-se_VW_34FR?wid=752&hei=720&bgc=fafafa&trim=1&fmt=p-jpg&qlt=80&.v=OUh6OFdFVEJxVkF6SUo5TWxpTE50MG5TeWJ6QW43NUFnQ2V4cmRFc1VnWWxvMTNVeXVWaTk0Ui9PSEVKVVU0dzN2QVRTWW5kR2Jad3ptYU8zZ21EUWZmQXlUU2xCQ2pTN3lrcDE0UU1hK0ZpRFN2VTEyRk9ZNEFubk9kM01kUmIySDNGVkFuTWJDdzY3LzhwNXhBeGdqanlpa2c4cm9CV25oRTZ3N0FCaUk1SHU3NmZyQzBTVVZ5ZWlSanV5V2tOdkZ1emhkYWNycmJka1dOU01FKzNBdFRUV0g5d1FoYmhBY0FhQ1ZnNFdFRFI2SjAxL1NHYWFLQ2hLdGdQSUw4bw==",
    },
    {
      id: 8,
      name: "iPad Pro 12.9",
      status: "Active",
      price: 1199.99,
      totalSales: 200,
      createdAt: "2024-05-15T14:45:00Z",
      imageUrl:
        "https://mediam.istudio.store/media/catalog/product/cache/3b7e899159f673788675d87d1d929a98/i/p/ipad-pro-5g-12-9-cellular-space-gray-002.jpg",
    },
    {
      id: 9,
      name: "AirTag",
      status: "Active",
      price: 29.99,
      totalSales: 700,
      createdAt: "2024-06-10T10:30:00Z",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/airtag-double-select-202104_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1617761672000",
    },
    {
      id: 10,
      name: "HomePod Mini",
      status: "Archived",
      price: 99.99,
      totalSales: 400,
      createdAt: "2024-07-22T11:00:00Z",
      imageUrl:
        "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/homepod-select-202210_FMT_WHH?wid=640&hei=600&fmt=jpeg&qlt=90&.v=1670557209437",
    },
  ];

  res.status(200).json(data);
}
