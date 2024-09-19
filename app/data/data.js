// create and sell nfts data image
import icon1 from '../components/CreateSellNft/image/icon1.png';
import icon2 from '../components/CreateSellNft/image/icon2.png';
import icon3 from '../components/CreateSellNft/image/icon3.png';
import icon4 from '../components/CreateSellNft/image/icon4.png';
// trending card data image
import smallImage1 from '../components/TrendingCategories/image/smallimge1.png';
import smallImage2 from '../components/TrendingCategories/image/smallimge2.png';
import smallImage3 from '../components/TrendingCategories/image/smallimge3.png';
import smallImage4 from '../components/TrendingCategories/image/smallimge4.png';
import smallImage5 from '../components/TrendingCategories/image/smallimge5.png';
import smallImage6 from '../components/TrendingCategories/image/smallimge6.png';
import smallImage7 from '../components/TrendingCategories/image/smallimge7.png';
import smallImage8 from '../components/TrendingCategories/image/smallimge8.png';
import smallImage9 from '../components/TrendingCategories/image/smallimge9.png';
import largeImage1 from '../components/TrendingCategories/image/largeimage1.png';
import largeImage2 from '../components/TrendingCategories/image/largeimage2.png';
import largeImage3 from '../components/TrendingCategories/image/largeimage3.png';



// create and sell nfts data
export const cardsData = [
    {
        id: 1,
        image: icon1,
        background:"bg-[#F2A217]",
        title: "Set up your wallet",
        description: "Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. "
    },
    {
        id: 2,
        image: icon2,
        background:"bg-[#62C184]",
        title: "List them for sale",
        description: "Choose between auctions, fixed-price lists, and discount-price lists. You choose how you want to sell your NFT. "
    },
    {
        id: 3,
        image: icon3,
        background:"bg-[#4679FF]",
        title: "Create your collection",
        description: "Click My Collections and set up your collection. Add social links, a description, profile  banner images, and set a secondary . "
    },
    {
        id: 4,
        image: icon4,
        background:"bg-[#AF60ED]",
        title: "Add your NFTs",
        description: "Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats. "
    }
];

// trending card data 
export const trendingData = [
    {
        id:1,
        largeImg: largeImage1,
        smallImg1:smallImage1,
        smallImg2:smallImage2,
        smallImg3:smallImage3,
        name:'Guy Hawkins',
        title:'Creative Art collection',
        ethNum:0.03168
    },
    {
        id:2,
        largeImg: largeImage2,
        smallImg1:smallImage4,
        smallImg2:smallImage5,
        smallImg3:smallImage6,
        name:'Robert Fox',
        title:'Colorful Abstract Painting',
        ethNum:0.34268
    },
    {
        id:3,
        largeImg: largeImage3,
        smallImg1:smallImage7,
        smallImg2:smallImage8,
        smallImg3:smallImage9,
        name:'Jacob Jones',
        title:'Modern Art collection',
        ethNum:0.64268
    },
];


