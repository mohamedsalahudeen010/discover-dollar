import { createContext, useState } from "react"
export const StoreContext=createContext(null)


function Context(props) {


  const corousalImage=[
    {
    image:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/11cd504bbc3a1493.jpg?q=20",
    title:"image1"
    },
    {
      image:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/a86d6e688296f007.png?q=20",
      title:"image2"
      },
      {
        image:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/f39cd50df3682fa7.jpg?q=20",
        title:"image3"
        },
        {
          image:"https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/bde6b9d6cd6c62ec.jpg?q=20",
          title:"image4"
          },
]

    const product=  [
        {
          offerPrice: 8999,
          actualPrice: "13,999",
          rating: 4,
          name: "shoe",
          image: [
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
            "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
          ],
        },
        {
          offerPrice: 8799,
          actualPrice: "10,999",
          rating: 5,
          name: "shoe",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
            "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
          ],
        },
        {
          offerPrice: 899,
          actualPrice: "1,959",
          rating: 4,
          name: "shoe",
          image: [
            "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQr0o26TvhoSTuIInD4n2xzVAqkTgG29bsWTs-Cmav5yxJUt785PM4P98uCFA&usqp=CAc",
            "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192781/01/sv01/fnd/PNA/fmt/png/Uproar-Charlotte-ASG-Fade-Basketball-Shoes",
          ],
        },
        {
          offerPrice: 7999,
          actualPrice: "16,999",
          rating: 4,
          name: "shoe",
          image: [
            "https://contents.mediadecathlon.com/p1419921/72b461620e3e5ec61db942355362dd66/p1419921.jpg?f=1000x1000&format=auto",
          ],
        },
        {
          offerPrice: 6999,
          actualPrice: "11,999",
          rating: 5,
          name: "shoe",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsb24B4w1EApz5OJr0VVcqdiBs6WfFJJc1YMmceHYudxBgA6GOJxKE_zg9FjPWzO3kzPk2DXE&usqp=CAc",
          ],
        },
        {
          offerPrice: 6999,
          actualPrice: "14,999",
          rating: 4,
          name: "shoe",
          image: [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQqUnHGFIxdluacdc6VLe93DodNfawn_2jHMb22uedruJ_jDEApg4_JvCPntwpB1z-myDsdl9JSSWIuG73tk7VBtFWv4rOwMCkC5dJmyGPe5Gmh7fm6DcfJ0g&usqp=CAE",
          ],
        },
        {
          offerPrice: 8999,
          actualPrice: "12,999",
          rating: 3,
          name: "shoe",
          image: [
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQmJYStYtU8tuhWAHTkl7KQuS7XkmA0nub5JtRht_WwDcehgYYajyBaGVOxzG9Kq1TjRlwR2Rml8xyizazIDi-mkK_SI2FGX-BHDz87SRzYMOQx15p9RYUZ&usqp=CAE",
          ],
        },
        {
          offerPrice: 999,
          actualPrice: "1,999",
          rating: 5,
          name: "shoe",
          image: [
            "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR56TWmUIkw6tyPiOZKqn8X2WLAxpd6G6x2Z-Zz42jEayoLCJPRvfvCRimf79M6xQE9DI25tSRzcI-fdlGvz5n-1m90XFnOfI7SmARl0mH1JsFvoERLwMS8fUo&usqp=CAE",
          ],
        },
        {
          offerPrice: 4099,
          actualPrice: "9,900",
          rating: 4,
          name: "short",
          image: ["https://www.rei.com/media/product/145578"],
        },
        {
          offerPrice: 6990,
          actualPrice: "12,699",
          rating: 3,
          name: "short",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfPuXkPk2lTykOYTDL_iY4OfaR6v2BU-355g&usqp=CAU",
          ],
        },
        {
          offerPrice: 3599,
          actualPrice: "11,299",
          rating: 2,
          name: "short",
          image: [
            "https://contents.mediadecathlon.com/p827233/e1718060df09a80062c720d80d1fa465/p827233.jpg?f=650x650&format=auto",
          ],
        },
        {
          offerPrice: 5099,
          actualPrice: "11,950",
          rating: 4,
          name: "short",
          image: [
            "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1584574185-app001prod.jpg?crop=1.00xw:0.668xh;0,0.185xh&resize=480:*",
          ],
        },
        {
          offerPrice: 5999,
          actualPrice: "12,479",
          rating: 3,
          name: "short",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRvz5YFwmGKMNR5hGZyFYCadI6DFiJ3j9SVJQ&usqp=CAU",
          ],
        },
        {
          offerPrice: 849,
          actualPrice: "9,599",
          rating: 4,
          name: "short",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSDI_5avN5S2uzAPrj1_QLmAGJ4sMGrDWDfeQ&usqp=CAU",
          ],
        },
        {
          offerPrice: 899,
          actualPrice: "11,999",
          rating: 1,
          name: "short",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ9Grx921fH2NZcN3fbvfjLTxl03Xs0-wtpEA&usqp=CAU",
          ],
        },
        {
          offerPrice: 99,
          actualPrice: "12,599",
          rating: 3,
          name: "short",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTG6Wwhoy1oDxjxQGTiId82ODCjLSRPr0N5QQ&usqp=CAU",
          ],
        },
        {
          offerPrice: 999,
          actualPrice: "15,999",
          rating: 4,
          name: "short",
          image: [
            "https://pizu-prod-cdn-medias.s3.amazonaws.com/sys-master/s3medias1/h9d/hd3/8976171466782/11111922289http%3A/%2Fimages.salsify.com/image/upload/s--jPNYN1Ph--/bkvznldly1ywoqbdrmdb.png_540x540",
          ],
        },
        {
          offerPrice: 6999,
          actualPrice: "9,999",
          rating: 3,
          name: "skirt",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKbldj32LBhoozOmGaA-z0cywBwiE_mAzBvtCWC_Vf542bq2Vcb0G5VLL5g9xMDB4gFzecvORU&usqp=CAc",
          ],
        },
        {
          offerPrice: 8999,
          actualPrice: "13,999",
          rating: 4,
          name: "skirt",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSm153Z0TcmLUdCx7V0gxwe-lA_G00FoKCYtcLTVsJ3KJ9nwkZJU5T_-T9M2lP7i3WuM6i4UlY&usqp=CAc",
          ],
        },
        {
          offerPrice: 4999,
          actualPrice: "7999",
          rating: 2,
          name: "skirt",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRGYFs-8ivzvuklXExBSgMYMAkdo5sEhokvA&usqp=CAU",
          ],
        },
        {
          offerPrice: 6999,
          actualPrice: "9,999",
          rating: 4,
          name: "skirt",
          image: [
            "https://www.bodenimages.com/productimages/productlarge/19wxms_t0312_bpk_d06.jpg",
          ],
        },
        {
          offerPrice: 2999,
          actualPrice: "8,999",
          rating: 3,
          name: "skirt",
          image: [
            "https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/4914118/2018/6/7/5f0d25c6-0a26-4dec-815f-02a37d6cf1a41528375698888-HERENOW-Women-Skirts-4431528375698828-2.jpg",
          ],
        },
        {
          offerPrice: 4599,
          actualPrice: "7,999",
          rating: 4,
          name: "skirt",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPcxIhPZaX65KQlCPS7JdtmhqrwQMMSh3jRJEZ4dkhyzyi1-f0OoAAtgEoeNaBIM6G_2XA5g4&usqp=CAc",
          ],
        },
        {
          offerPrice: 99,
          actualPrice: "999",
          rating: 3,
          name: "skirt",
          image: [
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaNQ-MwfRTFMu5yaWr5t7_zC8d9QtUXsOz9jy1UcJIymNNHMl9hSsOO_gBc_QxZ8pzPs01ocsg&usqp=CAc",
          ],
        },
        {
          offerPrice: 5999,
          actualPrice: "10,999",
          rating: 5,
          name: "skirt",
          image: [
            "https://rukminim1.flixcart.com/image/800/960/k7285u80/skirt/x/p/n/free-bindi-purple-skirt-hukam-creation-original-imafpdauh3jkuztc.jpeg?q=50",
          ],
        },
        {
          offerPrice: 7999,
          actualPrice: "14,999",
          rating: 3,
          name: "skirt",
          image: [
            "https://rukminim1.flixcart.com/image/800/960/kar44280/skirt/m/s/b/free-ucskt05maroon-unique-choice-original-imafs9hejs7fpbah.jpeg?q=50",
          ],
        },
        {
          offerPrice: 599,
          actualPrice: "999",
          rating: 4,
          name: "skirt",
          image: [
            "https://www.bodenimages.com/productimages/productlarge/20wsum_t0496_pnk_w01.jpg",
          ],
        },
      
        {
          offerPrice: 999,
          actualPrice: "8,999",
          rating: 4,
          name: "pant",
          image: [
            "https://www.lespetits.in/pub/media/catalog/product/cache/90a79a4c6002305cc8af303e36fd8ed3/f/e/fendi-black-jeans-44953-1.jpg",
          ],
        },
        {
          offerPrice: 7899,
          actualPrice: "12,999",
          rating: 3,
          name: "pant",
          image: [
            "https://pnh-preprod.oss-ap-south-1.aliyuncs.com/20200305/3_1583409445963.2_1583409445963.jpeg?x-oss-process=style/thumb",
          ],
        }
      ];

    const [openCom, setOpenCom] = useState(false);
    const [openLand, setOpenLand] = useState(false);
    const [filteredData,setFilteredData]=useState(false)
   
    
    const baseURL="https://akj-stores.onrender.com" 

const fetchProducts=async ()=>{
  
        try {
            const response=await fetch(`${baseURL}/products`,{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
          
        } catch (error) {
            console.log(error)
            
        }
    }



const fetchProductsWithQuery=async (query)=>{
    
        try {
            const response=await fetch(`${baseURL}/products?product=${query}`,{
                method:"GET"
            })
            const data=await response.json()
            console.log(data)
           
        } catch (error) {
            console.log(error)
            
        }
    }


  return (
    <StoreContext.Provider value={{openCom,setOpenCom,openLand,setOpenLand,baseURL,filteredData,
    setFilteredData,product,corousalImage}}>
        {props.children}
    </StoreContext.Provider>
  )
}

export default Context