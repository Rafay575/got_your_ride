// src/data/placesData.js
import i1 from "../assets/87.png";
import i2 from "../assets/50.png";
import i3 from "../assets/shade-ysUOK8yPnt0-unsplash.png";
import i4 from "../assets/rui-hao-lim-VajtrJauWDQ-unsplash.png";
import i5 from "../assets/Group_427_1.png";
import i6 from "../assets/Group_427_2.png";
import i7 from "../assets/Group_427_3.png";
import i8 from "../assets/Group_427_4.png";
import i9 from "../assets/orange-line.png";

import nagano1 from "../assets/nagano-1.png";
import nagano2 from "../assets/nagano-2.png";
import nagano3 from "../assets/nagano-3.png";
import nagano4 from "../assets/nagano-4.png";

import tokyo1 from "../assets/tokyo-1.png";
import tokyo2 from "../assets/tokyo-2.png";
import tokyo3 from "../assets/tokyo-3.png";
import tokyo4 from "../assets/tokyo-4.png";

import nikko1 from "../assets/nikko-1.png";
import nikko2 from "../assets/nikko-2.png";
import nikko3 from "../assets/nikko-3.png";
import nikko4 from "../assets/nikko-4.png";
import { FaCar } from "react-icons/fa";
// For brevity, only Place 1 is fully filled out; replicate or modify values for Place 2,3,4.
const placesData = [
  {
    id: 2,
    bookingData: {
      title: "Mt. Fuji 5th Station",
      subtitle: "Tokyo to Mount Fuji with cultural sights and stunning views.",
      location: "Mt. Fuji 5th Station",
      reviews: "(Reviews)",
      images: [
        { src: i1, classes: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full" },
        { src: i2, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: i3, classes: "col-span-1 w-full h-full" },
        { src: i4, classes: "col-span-1 w-full h-full" }
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" }
      ],
      price: {
        fromLabel: "From",
        primary: "475",
        secondary: "$600",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `Witness the majesty of Mt. Fuji with GotYourRide, your trusted companion for an awe‑inspiring alpine adventure! Ascend to the famous 5th Station for panoramic vistas, wander the blossom‑lined shores of Lake Kawaguchi, and capture the iconic Chureito Pagoda framing Fuji’s perfect cone. Wander through ancient lava caves at Aokigahara, soak in Hakone’s open‑air onsens, and cruise across Lake Ashi beneath drifting clouds. Savor silky Hōtō noodles in quaint Fujiyoshida eateries, sip local sake at hidden breweries, and top the day with a sunset cruise that paints Fuji in blazing crimson. From private transfers and multilingual guides to fully tailored itineraries, our comfortable rides and 24 / 7 concierge ensure every moment around Japan’s sacred peak is seamless, scenic, and unforgettable. Book now and experience Mt. Fuji like never before with GotYourRide!`
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Places covered"
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Meet and greet",
          "English-speaking driver",
          "Air-conditioned vehicle",
          "Kitaguchi-hongu Fuji",
          "with WiFi when available"
        ],
        excludedItems: [
          "Mr. Fuji 5th station entry ticket",
          "Food and drinks",
          "Tour guide",
          "Ropeway or motorboat ticket",
          "Saiko iyashi no nemb village entry ticket"
        ]
      },
      booking: {
        title: "Book Your Trip",
        dropdownPlaceholder: "Select a date",
        people: {
          label: "People:",
          category: "Adult",
          subtext: "(14+ Years)",
          selectPlaceholder: "When (Date)",
          options: [
            { value: "option1", label: "0" },
            { value: "option2", label: "1" },
            { value: "option3", label: "2" }
          ]
        },
        tripInfo: [
          { label: "Location", value: "Mt. Fuji 5th Station" },
          { label: "Service", value: "car + driver" },
          { label: "Duration", value: "10 Hours" },
          { label: "People", value: "1-6" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData:  [
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "13 pickup location options:",
        subtitle:
          "Fujikawaguchiko, Itabashi City, Urayasu, Kanagawa, Bunkyo City, Ichikawa…",
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Chureito Pagoda",
        subtitle: "Visit, Sightseeing, Walk, Scenic views on the way (45 minutes)",
        meta: "Optional, Extra fee",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Mt. Fuji 5th Station",
            subtitle: "Visit, Sightseeing (45 minutes)",
            meta: "Optional, Extra fee",
          },
        ],
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oshino Hakkai",
        subtitle: "Visit, Sightseeing, Safety briefing (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Kitaguchi‑hongu Fuji Sengen Shrine",
        subtitle: "Break time, Photo stop… (40 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Lake Kawaguchi",
        subtitle: "Visit, Sightseeing, Safety briefing (105 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Mt. Kachi Kachi Ropeway",
        subtitle: "Visit, Sightseeing, Walk, Scenic drive… (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oishi Park",
        subtitle: "Break time, Photo stop, Free time (30 minutes)",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Saiko Iyashi-no‑Sato Nenba",
            subtitle: "Visit, Sightseeing (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Ashi",
            subtitle: "Visit, Sightseeing (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Ropeway",
            subtitle: "Break time, Visit, Sightseeing (1 min)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Aokigahara Forest",
            subtitle: "Pass by, Scenic views",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Yamanaka",
            subtitle: "Visit, Self‑guided tour (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Open‑Air Museum",
            subtitle: "Visit, Sightseeing, Walk (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Fugaku Wind Cave",
            subtitle: "Break time, Free time (30 minutes)",
            meta: "Optional",
          },
        ],
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "no-line",
        icon: <FaCar/>,
        title: "13 drop‑off locations:",
        subtitle:
          "Fujikawaguchiko, Kanagawa, Bunkyo City, Itabashi City, Urayasu…",
      },
    ]
   
  },
  {
    id: 1,
    bookingData: {
      title: " Tokyo City Tour ",
      subtitle: "Tokyo is Japan’s buzzing capital—where ancient temples meet futuristic skyscrapers.",
      location: "Tokyo City Tour",
      reviews: "(Reviews)",
      images: [
        { src: tokyo1, classes: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full" },
        { src: tokyo2, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: tokyo3, classes: "col-span-1 w-full h-full" },
        { src: tokyo4, classes: "col-span-1 w-full h-full" }
       
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" }
      ],
      price: {
        fromLabel: "From",
        primary: "475",
        secondary: "$600",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `Discover the magic of Tokyo with GotYourRide, your ultimate tour partner! Experience the bustling Shibuya Crossing, serene Meiji Shrine, and the historic Senso-ji Temple. Dive into the vibrant streets of Akihabara and savor fresh delicacies at Tsukiji Outer Market. Enjoy breathtaking views from Tokyo Tower and the futuristic attractions of Odaiba. Our customized tours and comfortable rides ensure an unforgettable journey through Japan’s dynamic capital. Book now and explore Tokyo like never before with GotYourRide!`
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Must See Spots"
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Guided tour",
          "Cultural show",
          "Local dining experience"
        ],
        excludedItems: [
          "Lunch",
          "Personal expenses",
          "Gratuities"
        ]
      },
      booking: {
        title: "Book Your Trip",
        dropdownPlaceholder: "Select a date",
        people: {
          label: "People:",
          category: "Adult",
          subtext: "(18+ Years)",
          selectPlaceholder: "When (Date)",
          options: [
            { value: "option1", label: "0" },
            { value: "option2", label: "1" },
            { value: "option3", label: "2" }
          ]
        },
        tripInfo: [
          { label: "Location", value: "Place 2 Location" },
          { label: "Service", value: "Guide & Transport" },
          { label: "Duration", value: "8 Hours" },
          { label: "People", value: "1-6" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData:  [
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "13 pickup location options:",
        subtitle:
          "Fujikawaguchiko, Itabashi City, Urayasu, Kanagawa, Bunkyo City, Ichikawa…",
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Chureito Pagoda",
        subtitle: "Visit, Sightseeing, Walk, Scenic views on the way (45 minutes)",
        meta: "Optional, Extra fee",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Mt. Fuji 5th Station",
            subtitle: "Visit, Sightseeing (45 minutes)",
            meta: "Optional, Extra fee",
          },
        ],
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oshino Hakkai",
        subtitle: "Visit, Sightseeing, Safety briefing (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Kitaguchi‑hongu Fuji Sengen Shrine",
        subtitle: "Break time, Photo stop… (40 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Lake Kawaguchi",
        subtitle: "Visit, Sightseeing, Safety briefing (105 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Mt. Kachi Kachi Ropeway",
        subtitle: "Visit, Sightseeing, Walk, Scenic drive… (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oishi Park",
        subtitle: "Break time, Photo stop, Free time (30 minutes)",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Saiko Iyashi-no‑Sato Nenba",
            subtitle: "Visit, Sightseeing (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Ashi",
            subtitle: "Visit, Sightseeing (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Ropeway",
            subtitle: "Break time, Visit, Sightseeing (1 min)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Aokigahara Forest",
            subtitle: "Pass by, Scenic views",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Yamanaka",
            subtitle: "Visit, Self‑guided tour (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Open‑Air Museum",
            subtitle: "Visit, Sightseeing, Walk (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Fugaku Wind Cave",
            subtitle: "Break time, Free time (30 minutes)",
            meta: "Optional",
          },
        ],
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "no-line",
        icon: <FaCar/>,
        title: "13 drop‑off locations:",
        subtitle:
          "Fujikawaguchiko, Kanagawa, Bunkyo City, Itabashi City, Urayasu…",
      },
    ]
   
  },
  // Similarly define for id: 3 and id: 4 with their respective data.
  {
    id: 3,
    bookingData: {
      title: "Nagano Tour ",
      subtitle: "From Tokyo to Nagano: A journey from vibrant cityscapes to serene mountain escapes.",
      location: "Nagano Tour",
      reviews: "(Reviews)",
      images: [
        { src: nagano1, classes: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full" },
        { src: nagano2, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: nagano3, classes: "col-span-1 w-full h-full" },
        { src: nagano4, classes: "col-span-1 w-full h-full" }
       
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" }
      ],
      price: {
        fromLabel: "From",
        primary: "475",
        secondary: "$600",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `On this full-day journey, see the great sights close to Nagano - a historic temple, a sake tasting, and snow monkeys. See the Snow Monkey Park to learn more about snow monkeys in their natural environment. Discover Zenko-ji, one of the oldest Buddhist temples in Japan.taste a restaurant close to Nagano and have a typical Japanese meal.`
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Noteworthy Spots"
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Local guide",
          "Transport",
          "Snacks"
        ],
        excludedItems: [
          "Entrance fees",
          "Meals",
          "Tips"
        ]
      },
      booking: {
        title: "Book Your Trip",
        dropdownPlaceholder: "Select a date",
        people: {
          label: "People:",
          category: "Adult",
          subtext: "(18+ Years)",
          selectPlaceholder: "When (Date)",
          options: [
            { value: "option1", label: "0" },
            { value: "option2", label: "1" },
            { value: "option3", label: "2" }
          ]
        },
        tripInfo: [
          { label: "Location", value: "Place 3 Location" },
          { label: "Service", value: "Guide & Transport" },
          { label: "Duration", value: "6 Hours" },
          { label: "People", value: "1-6" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData:  [
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "13 pickup location options:",
        subtitle:
          "Fujikawaguchiko, Itabashi City, Urayasu, Kanagawa, Bunkyo City, Ichikawa…",
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Chureito Pagoda",
        subtitle: "Visit, Sightseeing, Walk, Scenic views on the way (45 minutes)",
        meta: "Optional, Extra fee",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Mt. Fuji 5th Station",
            subtitle: "Visit, Sightseeing (45 minutes)",
            meta: "Optional, Extra fee",
          },
        ],
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oshino Hakkai",
        subtitle: "Visit, Sightseeing, Safety briefing (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Kitaguchi‑hongu Fuji Sengen Shrine",
        subtitle: "Break time, Photo stop… (40 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Lake Kawaguchi",
        subtitle: "Visit, Sightseeing, Safety briefing (105 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Mt. Kachi Kachi Ropeway",
        subtitle: "Visit, Sightseeing, Walk, Scenic drive… (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oishi Park",
        subtitle: "Break time, Photo stop, Free time (30 minutes)",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Saiko Iyashi-no‑Sato Nenba",
            subtitle: "Visit, Sightseeing (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Ashi",
            subtitle: "Visit, Sightseeing (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Ropeway",
            subtitle: "Break time, Visit, Sightseeing (1 min)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Aokigahara Forest",
            subtitle: "Pass by, Scenic views",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Yamanaka",
            subtitle: "Visit, Self‑guided tour (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Open‑Air Museum",
            subtitle: "Visit, Sightseeing, Walk (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Fugaku Wind Cave",
            subtitle: "Break time, Free time (30 minutes)",
            meta: "Optional",
          },
        ],
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "no-line",
        icon: <FaCar/>,
        title: "13 drop‑off locations:",
        subtitle:
          "Fujikawaguchiko, Kanagawa, Bunkyo City, Itabashi City, Urayasu…",
      },
    ]
   
  },
  {
    id: 4,
    bookingData: {
      title: "Nikko Tour",
      subtitle: "Nikko blends spiritual heritage with breathtaking nature, just a few hours from Tokyo.",
      location: "Nikko Tour",
      reviews: "(Reviews)",
      images: [
        { src: nikko1, classes: "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full" },
        { src: nikko2, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: nikko3, classes: "col-span-1 w-full h-full" },
        { src: nikko4, classes: "col-span-1 w-full h-full" }
       
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" }
      ],
      price: {
        fromLabel: "From",
        primary: "475",
        secondary: "$600",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `rewrite more short and unique: Pickup at your hotel or location of choice within Tokyo's 23 wards (Chuo, Chiyoda, Minato, Shibuya, Shinjuku, Toshima, Taito, Meguro, Bunkyo, Shinagawa, Nakano, Setagaya, Suginami, Ota, Kita, Arakawa, Sumida, Koto, Itabashi, Nerima, Edogawa, Katsushika, Adachi) and outside of tokyo 23 wards you have to pay extra charges it will depend on area from 5000 yen to 20000 yen. • Please add the local supplier, Travel on Peak, on WhatsApp at 0096896918676 to ensure smooth communication with the driver/guide on the day of the tour • In case of emergency call 0096896918676 on WhatsApp Please wait in the hotel lobby 10 minutes before your scheduled pickup time. Drivers will wait no longer than 60 minutes after the scheduled pickup time. Sometimes drivers could be late due to traffic conditions on highways in tokyo.`
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Must-See Attractions"
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Meet and greet",
          "English‑speaking driver",
          "Air‑conditioned vehicle",
          "Wi‑Fi when available"
        ],
        excludedItems: [
          "Market purchase expense",
          "Food and drinks",
          "Tour guide",
          "Ropeway or motorboat ticket",
          "Any sort of entry ticket"
        ]
      },
      booking: {
        title: "Book Your Trip",
        dropdownPlaceholder: "Select a date",
        people: {
          label: "People:",
          category: "Adult",
          subtext: "(18+ Years)",
          selectPlaceholder: "When (Date)",
          options: [
            { value: "option1", label: "0" },
            { value: "option2", label: "1" },
            { value: "option3", label: "2" }
          ]
        },
        tripInfo: [
          { label: "Location", value: "Place 4 Location" },
          { label: "Service", value: "Luxury Experience" },
          { label: "Duration", value: "12 Hours" },
          { label: "People", value: "1-6" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData:  [
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "13 pickup location options:",
        subtitle:
          "Fujikawaguchiko, Itabashi City, Urayasu, Kanagawa, Bunkyo City, Ichikawa…",
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Chureito Pagoda",
        subtitle: "Visit, Sightseeing, Walk, Scenic views on the way (45 minutes)",
        meta: "Optional, Extra fee",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Mt. Fuji 5th Station",
            subtitle: "Visit, Sightseeing (45 minutes)",
            meta: "Optional, Extra fee",
          },
        ],
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oshino Hakkai",
        subtitle: "Visit, Sightseeing, Safety briefing (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Kitaguchi‑hongu Fuji Sengen Shrine",
        subtitle: "Break time, Photo stop… (40 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Lake Kawaguchi",
        subtitle: "Visit, Sightseeing, Safety briefing (105 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Mt. Kachi Kachi Ropeway",
        subtitle: "Visit, Sightseeing, Walk, Scenic drive… (45 minutes)",
      },
      {
        type: "in-activity",
        icon: <FaCar/>,
        title: "Oishi Park",
        subtitle: "Break time, Photo stop, Free time (30 minutes)",
        subitems: [
          {
            icon: <FaCar/>,
            title: "Saiko Iyashi-no‑Sato Nenba",
            subtitle: "Visit, Sightseeing (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Ashi",
            subtitle: "Visit, Sightseeing (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Ropeway",
            subtitle: "Break time, Visit, Sightseeing (1 min)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Aokigahara Forest",
            subtitle: "Pass by, Scenic views",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Lake Yamanaka",
            subtitle: "Visit, Self‑guided tour (30 minutes)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Hakone Open‑Air Museum",
            subtitle: "Visit, Sightseeing, Walk (1 hour)",
            meta: "Optional",
          },
          {
            icon: <FaCar/>,
            title: "Fugaku Wind Cave",
            subtitle: "Break time, Free time (30 minutes)",
            meta: "Optional",
          },
        ],
      },
      {
        type: "in-transit",
        icon: <FaCar/>,
        title: "Car",
        duration: "(2 hours)",
      },
      {
        type: "no-line",
        icon: <FaCar/>,
        title: "13 drop‑off locations:",
        subtitle:
          "Fujikawaguchiko, Kanagawa, Bunkyo City, Itabashi City, Urayasu…",
      },
    ]
   
  }
];

export default placesData;
