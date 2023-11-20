import React from "react";
import ReactDOM, { createRoot }  from "react-dom/client";

const Header = ()=>{
return(
<div className="header">
<div className="logo-container">
<img className="logo" alt="foodapplogo" src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-app-icon-food-explorer-design-template-8ae900e41ccbc0a2e1b48a85d239e389_screen.jpg?ts=1585237320"/>
</div>
<div className="nav-items">
<ul>
<li>Home</li>
<li>About Us</li>
<li>Contact Us</li>
<li>Cart</li>
</ul>
</div>
</div>
)
};

const restaurantLists =[
    {
      info: {
        id: "717982",
        name: "Burger King",
        cloudinaryImageId: "aa77cb6fce4d94f3ad4b4e7fb42782db",
        locality: "Lotus Park 3",
        areaName: "Ambegaon",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "717982",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "166",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "467580",
        name: "Baskin Robbins - Ice Cream Desserts",
        cloudinaryImageId: "85ccae4e3576f9330af102c46ca85395",
        locality: "Bharti Vihar",
        areaName: "Katraj",
        costForTwo: "₹250 for two",
        cuisines: ["Desserts", "Ice Cream"],
        avgRating: 4.6,
        veg: true,
        feeDetails: {
          restaurantId: "467580",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "5588",
        avgRatingString: "4.6",
        totalRatingsString: "50+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "461939",
        name: "Fried Chicken Destination",
        cloudinaryImageId: "rzxyoujbwyalfwksxol7",
        locality: "Vastunagar ",
        areaName: "Bibvewadi",
        costForTwo: "₹200 for two",
        cuisines: ["North Indian"],
        avgRating: 3.9,
        feeDetails: {
          restaurantId: "461939",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "245841",
        avgRatingString: "3.9",
        totalRatingsString: "1K+",
        promoted: true,
        adTrackingId:
          "cid=9194051~p=3~eid=0000018b-d2c9-4558-6e1d-ac9900ff0307~srvts=1700048487768~45995",
        sla: {
          deliveryTime: 29,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "29 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-16 02:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "24075",
        name: "Cafe Momos",
        cloudinaryImageId: "alv5bura2gt24wmibqmr",
        locality: "Bharti Vidyapeeth",
        areaName: "Katraj",
        costForTwo: "₹200 for two",
        cuisines: ["Beverages"],
        avgRating: 4.1,
        feeDetails: {
          restaurantId: "24075",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "18860",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=9108788~p=2~eid=0000018b-d2c9-4558-6e1d-ac9800ff025a~srvts=1700048487768~45995",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 1.6,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "1.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "255149",
        name: "Firangi Bake",
        cloudinaryImageId: "tengdwsfnqs29t8nwfwv",
        locality: "Datta nagar chowk",
        areaName: "Ambegaon Bk",
        costForTwo: "₹400 for two",
        cuisines: [
          "Pizzas",
          "Pastas",
          "Italian",
        ],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "255149",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "3952",
        avgRatingString: "4.3",
        totalRatingsString: "100+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "24 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    shortDescription: "options available",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    description: "",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "50% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "37467",
        name: "Subway",
        cloudinaryImageId: "1ace5fa65eff3e1223feb696c956b38b",
        locality: "Chandrabhaga Nagar Rd",
        areaName: "Katraj",
        costForTwo: "₹350 for two",
        cuisines: ["Healthy Food", "Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 4.2,
        feeDetails: {
          restaurantId: "37467",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "2",
        avgRatingString: "4.2",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "53754",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Pune Satara Road",
        areaName: "Katraj",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.8,
        feeDetails: {
          restaurantId: "53754",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "721",
        avgRatingString: "3.8",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.5,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "1.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-16 03:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "669709",
        name: "Kwality Walls Frozen Dessert",
        cloudinaryImageId: "7de701fb433cb9905744d05ccd0736c1",
        locality: "Utkarsh Society",
        areaName: "Bibwewadi",
        costForTwo: "₹200 for two",
        cuisines: ["Ice Cream", "Desserts"],
        avgRating: 4.4,
        veg: true,
        feeDetails: {
          restaurantId: "669709",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "582",
        avgRatingString: "4.4",
        totalRatingsString: "20+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 1.2,
          serviceability: "SERVICEABLE",
          slaString: "28 mins",
          lastMileTravelString: "1.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textExtendedBadges: {},
            textBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "255148",
        name: "Oven Story Pizza - Standout Toppings",
        cloudinaryImageId: "f986df6f1a1fcf2ff24d2eaf44d570a7",
        locality: "Datta nagar chowk",
        areaName: "Ambegaon Bk",
        costForTwo: "₹400 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "255148",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "3534",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "23-31 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "782004",
        name: "Burger Battel",
        cloudinaryImageId: "dfd90931f1a600bda63c8614a9570ace",
        locality: "Khanapur",
        areaName: "Bibwewadi",
        costForTwo: "₹158 for two",
        cuisines: ["Burgers", "Snacks", "Pizzas"],
        veg: true,
        feeDetails: {
          restaurantId: "782004",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "465348",
        avgRatingString: "NEW",
        promoted: true,
        adTrackingId:
          "cid=9349282~p=4~eid=0000018b-d2c9-4558-6e1d-ac9a00ff047e~srvts=1700048487768~45995",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 2,
          serviceability: "SERVICEABLE",
          slaString: "31 mins",
          lastMileTravelString: "2.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        isNewlyOnboarded: true,
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "255150",
        name: "Sweet Truth",
        cloudinaryImageId: "4a3b48488e3aa9bda13efd8cfcd95284",
        locality: "Datta nagar chowk",
        areaName: "Ambegaon Bk",
        costForTwo: "₹450 for two",
        cuisines: ["Snacks", "Bakery", "Desserts", "Beverages"],
        avgRating: 4.3,
        feeDetails: {
          restaurantId: "255150",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "4444",
        avgRatingString: "4.3",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 19,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "19 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "255151",
        name: "The Good Bowl",
        cloudinaryImageId: "0b3356a88b6fc5966c452c4c9b1b5e4a",
        locality: "Datta nagar chowk",
        areaName: "Ambegaon Bk",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "North Indian",
          "Pastas"
        ],
        avgRating: 4,
        feeDetails: {
          restaurantId: "255151",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3200,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3200,
        },
        parentId: "7918",
        avgRatingString: "4.0",
        totalRatingsString: "500+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 0.9,
          serviceability: "SERVICEABLE",
          slaString: "20 mins",
          lastMileTravelString: "0.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 23:59:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },
    {
      info: {
        id: "24127",
        name: "Kalyan Bhel",
        cloudinaryImageId: "n4ggreyxvmcyaahscobd",
        locality: "Bharti Vidyapeeth Road",
        areaName: "Katraj",
        costForTwo: "₹100 for two",
        cuisines: ["Street Food", "Chaat", "Snacks"],
        avgRating: 4.1,
        veg: true,
        feeDetails: {
          restaurantId: "24127",
          fees: [
            {
              name: "BASE_DISTANCE",
              fee: 3400,
            },
            {
              name: "BASE_TIME",
            },
            {
              name: "ANCILLARY_SURGE_FEE",
            },
          ],
          totalFee: 3400,
        },
        parentId: "532",
        avgRatingString: "4.1",
        totalRatingsString: "10K+",
        promoted: true,
        adTrackingId:
          "cid=9204261~p=1~eid=0000018b-d2c9-4558-6e1d-ac9700ff017c~srvts=1700048487768~45995",
        sla: {
          deliveryTime: 21,
          lastMileTravel: 1.3,
          serviceability: "SERVICEABLE",
          slaString: "21 mins",
          lastMileTravelString: "1.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2023-11-15 22:45:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹100",
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
      },
    },{
      "info": {
        "id": "40165",
        "name": "Relax Pure Veg",
        "cloudinaryImageId": "ttkx6fslg6r0nvnhb9sa",
        "locality": "Sahakar Nagar",
        "areaName": "Parvati",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Maharashtrian",
          "Chinese"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "40165",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6800
        },
        "parentId": "10067",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=9265874~p=1~eid=0000018b-e1a7-b09b-0e62-b02f00d30112~srvts=1700297945243~96727",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 6.4,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "6.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-18 16:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                  }
                }
              ]
            },
            "textExtendedBadges": {},
            "textBased": {}
          }
        },
        "accessibility": {
          "altText": "Relax Pure Veg, serving North Indian, Maharashtrian, Chinese and more, will be delivered in 27 min, costs ₹300 for two, ₹150 off above ₹399 for this restaurant",
          "altTextCta": "open"
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "swiggy://menu?restaurant_id=40165",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },{
      "info": {
        "id": "156120",
        "name": "The Good Bowl",
        "cloudinaryImageId": "0b3356a88b6fc5966c452c4c9b1b5e4a",
        "locality": "Karve Road",
        "areaName": "Karve Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Pastas"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "156120",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3300
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3300
        },
        "parentId": "7918",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 18,
          "lastMileTravel": 1.5,
          "serviceability": "SERVICEABLE",
          "slaString": "18 mins",
          "lastMileTravelString": "1.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-18 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "textBased": {},
            "imageBased": {},
            "textExtendedBadges": {}
          }
        },
        "accessibility": {
          "altText": "The Good Bowl, serving Biryani, North Indian, Pastas and more, will be delivered in 18 min, costs ₹400 for two, ₹150 off above ₹399 for this restaurant",
          "altTextCta": "open"
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "swiggy://menu?restaurant_id=156120",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    },{
      "info": {
        "id": "83296",
        "name": "PK Biryani House",
        "cloudinaryImageId": "pzg64dwsbfozjxxrjf4c",
        "locality": "Narayan Peth",
        "areaName": "Deccan Gymkhana",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Mughlai",
          "Hyderabadi",
          "Indian"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "83296",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 6800
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 6800
        },
        "parentId": "3260",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=9266070~p=2~eid=0000018b-e1a7-b09b-0e62-b03000d30213~srvts=1700297945243~96727",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 6.2,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "6.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-11-18 16:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textExtendedBadges": {},
            "textBased": {}
          }
        },
        "accessibility": {
          "altText": "PK Biryani House, serving Biryani, Maharashtrian, North Indian and more, will be delivered in 33 min, costs ₹400 for two, ₹150 off above ₹399 for this restaurant",
          "altTextCta": "open"
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹150 OFF",
          "subHeader": "ABOVE ₹399",
          "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {},
      "cta": {
        "link": "swiggy://menu?restaurant_id=83296",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
      }
    }
  ];

const RestaurantCardComponent = (props)=>{
    const {restaurantData} = props;
    const {name,cloudinaryImageId,avgRating,costForTwo,areaName,cuisines} = restaurantData?.info;
    const {header} = restaurantData.info.aggregatedDiscountInfoV3;
    const { slaString } = restaurantData.info.sla;
    return(
<div className="restaurant-list">
<div className="place">
<div className="list-item">
<div className="item-content">
<div className="top-image">
<img className="res-img" alt="Res-image" src={'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/'+ cloudinaryImageId}>
</img>
</div>
</div>
<div className="place-name-div">
<div className="name">{name}</div>
<div className="food-list">{cuisines.join(' , ')}</div>
</div>
<div className="info-div">
    <div className="ratings"><span>{avgRating} stars</span></div>
    <div className="dot">.</div>
    <h5><span><i class="ri-star-fill"></i></span>{header}</h5>
    <div className="time">{slaString}</div>
    <div className="dot">.</div>
    <div className="price">{costForTwo}</div>
</div>
<div className="address">
<span className="sNAfh">{areaName}</span>
</div>
</div>
</div>
</div>
    )
};

const Body = ()=>{
return(
<div className="body">
<div className="search-container">
<input type="text" placeholder="Satisfy your hunger now!" id="searchInp"/>
<button id="searchBtn">Search</button>
</div>
<div className="restaurant-container">
    {restaurantLists.map((restaurant)=>(
        <RestaurantCardComponent key={restaurant.info.id} restaurantData={restaurant}/>
    ))};    
</div>
</div>
)
};


const Footer = ()=>{
    return(
        <div className="footer">
             <div className="footer-content">
<div className="points">Company
<ul>
    <li className="footer-li"><a href="">About</a></li>
    <li className="footer-li"><a href="">Team</a></li>
    <li className="footer-li"><a href="">FoodExplorer Blog</a></li>
    <li className="footer-li"><a href="">Bug Bounty</a></li>
    <li className="footer-li"><a href="">FoodExplorer One</a></li>
    <li className="footer-li"><a href="">FoodExplorer Corporate</a></li>
    <li className="footer-li"><a href="">FoodExplorer Instamart</a></li>
</ul>
</div>
<div className="points">Contact
<li className="footer-li"><a href="">Help & Suppor</a></li>
    <li className="footer-li"><a href="">Partner with us</a></li>
    <li className="footer-li"><a href="">Ride with us</a></li>
    </div>
<div className="points">Legal
<li className="footer-li"><a href="">Terms & Conditions</a></li>
    <li className="footer-li"><a href="">Refund & Cancellation</a></li>
    <li className="footer-li"><a href="">Privacy Policy</a></li>
    <li className="footer-li"><a href="">Cookie Policy</a></li>
    <li className="footer-li"><a href="">Offer Terms</a></li>
    <li className="footer-li"><a href="">Phishing & Fraud</a></li>
    </div>
</div>
            <div className="footer-contact"> 
             <div className="copyrights">All rights reserved. © 2023 yash-ad / FoodExplorer</div>
             </div>
        </div>
    )
};


const AppLayout = ()=>{
    return(
<div id="App-container">
<Header/>
<Body/>
<Footer/>
</div>
    )
};



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>)