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
const placesData = [
  {
    id: 2,
    bookingData: {
      title: "Mt. Fuji 5th Station",
      subtitle: "Tokyo to Mount Fuji with cultural sights and stunning views.",
      location: "Mt. Fuji 5th Station",
      reviews: "(Reviews)",
      images: [
        {
          src: i1,
          classes:
            "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full",
        },
        {
          src: i2,
          classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full",
        },
        { src: i3, classes: "col-span-1 w-full h-full" },
        { src: i4, classes: "col-span-1 w-full h-full" },
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" },
      ],
      price: {
        fromLabel: "From",
        primary: "408",
        secondary: "$533",
        secondaryIcon: i9,
      },
    },
    tripData: {
      description: {
        title: "Description",
        text: `Embark on a private day trip with Mount Fuji Discoveries, where you’ll explore the breathtaking beauty and cultural richness surrounding Japan’s iconic peak. Begin with panoramic views at *Chureito Pagoda, followed by a visit to the serene village of **Oshino Hakkai, home to crystal-clear ponds and traditional thatched-roof houses. Continue to the sacred **Kitaguchi Hongu Fuji Sengen Shrine* nestled in a tranquil cedar forest, and enjoy the stunning reflections of Mount Fuji at *Lake Kawaguchiko. For those seeking more adventure, optional activities include the **Hakone Ropeway* for aerial views of volcanic landscapes or a *Lake Ashi cruise* to glide across its calm waters. This customizable journey offers a perfect blend of nature, culture, and excitement, tailored to your preferences.`,
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Places covered",
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Meet and greet",
          "English-speaking driver",
          "Air-conditioned vehicle",
          "Kitaguchi-hongu Fuji",
          "with WiFi when available",
          "Hotel pickup and drop-off",
          "Driver ",
          "Air-conditioned transportation",
          "Driver",
          "Guide",
        ],
        excludedItems: [
          "Mt. Fuji 5th Station entry ticket",
          "Food and drinks",
          "Ropeway or motorboat ticket",
        ],
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
            { value: "option3", label: "2" },
          ],
        },
        tripInfo: [
          { label: "Location", value: "Mt. Fuji 5th Station" },
          { label: "Service", value: "transport + driver" },
          { label: "Duration", value: "10 Hour" },
          { label: "People", value: "1-6" },
        ],
        buttonText: "Book Now",
      },
    },
    itineraryData: [
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "13 Pickup Location Options:",
        subtitle: "Bunkyo City, Fujikawaguchiko, Itabashi",
      },

      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Chureito Pagoda",
        subtitle: "Visit, Sightseeing, Walk, Scenic Views On The Way",
        meta: "Optional, Extra fee",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Oshino Hakka",
        subtitle: "Visit, Sightseeing, Safety Briefing",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Kitaguchi-Hongu Fuji Sengen Shrine",
        subtitle:
          "Break Time, Photo Stop, Cable Car Ride, Scenic Views On The Way",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Lake Kawaguchi",
        subtitle: "Visit, Sightseeing, Safety Briefing",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Mt. Kachi Kachi Ropeway",
        subtitle:
          "Visit, Sightseeing, Walk, Scenic Drive, Scenic Views On The Way",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Oishi Park",
        subtitle: "Break Time, Photo Stop, Free Time",
      },
      {
        type: "no-line",
        icon: <FaCar />,
        title: "13 Drop-Off Locations:",
        subtitle: "Tokyo 23 wards, Ichikawa, Shinbashi, Sumida City",
      },
    ],
    options: [
      { id: "a", label: "Chureito Pagoda" },
      { id: "b", label: "Mt. Fuji 5th Station" },
      { id: "c", label: "Oshino Hakkai" },
      { id: "d", label: "Kitaguchi-hongu Fuji Sengen Shrine" },
      { id: "e", label: "Lake Kawaguchi" },
      { id: "f", label: "Mt. Kachi Kachi Ropeway" },
      { id: "g", label: "Oishi Park" },
      { id: "h", label: "Saiko Iyashi-no-Sato Nenba" },
      { id: "i", label: "Lake Ashi (Optional)" },
      { id: "j", label: "Hakone Ropeway (Optional)" },
      { id: "k", label: "Aokigahara Forest (Optional)" },
      { id: "l", label: "Lake Yamanaka (Optional)" },
      { id: "m", label: "The Hakone Open-Air Museum (Optional)" },
      { id: "n", label: "Fugaku Wind Cave (Optional)" },
    ],
  },
  {
    id: 1,
    bookingData: {
      title: " Tokyo City Tour ",
      subtitle:
        "Tokyo is Japan’s buzzing capital—where ancient temples meet futuristic skyscrapers.",
      location: "Tokyo City Tour",
      reviews: "(Reviews)",
      images: [
        {
          src: tokyo1,
          classes:
            "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full",
        },
        {
          src: tokyo2,
          classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full",
        },
        { src: tokyo3, classes: "col-span-1 w-full h-full" },
        { src: tokyo4, classes: "col-span-1 w-full h-full" },
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" },
      ],
      price: {
        fromLabel: "From",
        primary: "380",
        secondary: "$500",
        secondaryIcon: i9,
      },
    },
    tripData: {
      description: {
        title: "Description",
        text: `
Discover the magic of Tokyo with GotYourRide, your ultimate tour partner! Experience the bustling Shibuya Crossing, serene Meiji Shrine, and the historic Senso-ji Temple. Dive into the vibrant streets of Akihabara and savor fresh delicacies at Tsukiji Outer Market. Enjoy breathtaking views from Tokyo Tower and the futuristic attractions of Odaiba. Our customized tours and comfortable rides ensure an unforgettable journey through Japan’s dynamic capital. Book now and explore Tokyo like never before with GotYourRide!`,
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Must See Spots",
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
        
          "Meet and Greet",

"English-Speaking Driver",

"Air-Conditioned Vehicle",

"With WiFi When Available",
        ],
     
        excludedItems: [  " Market Purchase Expense",

          "Food and Drinks",
          
          "Tour Guide",
          
          "Ropeway or Motorboat Ticket",
          
          "Any Sort of Entry Ticket"],
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
            { value: "option3", label: "2" },
          ],
        },
        tripInfo: [
          { label: "Location", value: "Tokyo City Tour" },
          { label: "Service", value: "transport + driver" },
          { label: "Duration", value: "10 Hour" },
          { label: "People", value: "1-6" },
        ],
        buttonText: "Book Now",
      },
    },
    itineraryData: [
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "Starting Location:",
        subtitle: "You Will Get Picked Up",
      },
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "Car",
        subtitle: "(2 Hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Tsukiji Outer Market",
        subtitle: "Visit, Sightseeing, Walk, Scenic Views On The Way",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Sensoji Temple",
        subtitle: "Visit, Sightseeing",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Imperial Palace",
        subtitle: "Visit, Sightseeing, Walk, Scenic Views On The Way",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Tokyo Skytree",
        subtitle: "Visit, Sightseeing, Scenic Views",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Ginza",
        subtitle: "Shopping, Sightseeing, Free Time",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Hakuhinkan Toy Park",
        subtitle: "Visit, Entertainment, Shopping",
      },
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "You Will Return To The Starting Point",
        subtitle: "End of the tour",
      },
    ],
    options: [
      { id: "a", label: "Tsukiji Outer Market" },
      { id: "b", label: "Sensō-ji Temple" },
      { id: "c", label: "Tokyo Skytree" },
      { id: "d", label: "Tokyo Tower" },
      { id: "e", label: "Ginza" },
    ],
  },
  // Similarly define for id: 3 and id: 4 with their respective data.
  {
    id: 3,
    bookingData: {
      title: "Nagano Tour ",
      subtitle:
        "From Tokyo to Nagano: A journey from vibrant cityscapes to serene mountain escapes.",
      location: "Nagano Tour",
      reviews: "(Reviews)",
      images: [
        {
          src: nagano1,
          classes:
            "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full",
        },
        {
          src: nagano2,
          classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full",
        },
        { src: nagano3, classes: "col-span-1 w-full h-full" },
        { src: nagano4, classes: "col-span-1 w-full h-full" },
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" },
      ],
      price: {
        fromLabel: "From",
        primary: "477",
        secondary: "$562",
        secondaryIcon: i9,
      },
    },
    tripData: {
      description: {
        title: "Description",
        text: `On this full-day journey, see the great sights close to Nagano - a historic temple, a sake tasting, and snow monkeys. See the Snow Monkey Park to learn more about snow monkeys in their natural environment. Discover Zenko-ji, one of the oldest Buddhist temples in Japan.taste a restaurant close to Nagano and have a typical Japanese meal.`,
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Places covered",
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Air-Conditioned Vehicle",
          "English & Hindi Speaking Guide",
          "Private Transportation",
          "All Tolls & Taxes",
          "Bottled Water",
        ],
        excludedItems: [
          "Lunch",
          "Entry Tickets Less Than $10",
          "Enter/Admission - Jigokudani Snow Monkey Park Less Than $10",
        ],
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
            { value: "option3", label: "2" },
          ],
        },
        tripInfo: [
          { label: "Location", value: "Nagano Tour" },
          { label: "Service", value: "transport + driver" },
          { label: "Duration", value: "10 Hour" },
          { label: "People", value: "1-6" },
        ],
        buttonText: "Book Now",
      },
    },
    itineraryData: [
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "13 Pickup Location Options:",
        subtitle: "You Will Get Picked Up",
      },
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "Car",
        subtitle: "(2 Hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Zenko Ji Temple",
        subtitle: "See Details And Photo",
        duration: "(2 Hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Nishimon Yoshinoya",
        subtitle: "See Details And Photo",
        duration: "60 Minutes",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Jegokudani Snow Monkey Park",
        subtitle: "See Details And Photo",
        duration: "3 Hours",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Dazaifu Monzen Machi",
        subtitle: "See Details And Photo",
        duration: "3 Hours",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Obuse Onsen Kannon-No-Yu",
        subtitle: "See Details And Photo",
        duration: "3 Hours",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Obuse Onsen Kannon-No-Yu",
        subtitle: "See Details And Photo",
        duration: "3 Hours",
      },
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "You Will Return To The Starting Point",
        subtitle: "",
      },
    ],
    options: [
      { id: "f", label: "Zenko-ji Temple (Nagano)" },
      { id: "g", label: "Nishimon Yoshinoya (Nagano)" },
      { id: "h", label: "Jigokudani Snow Monkey Park (Yamanouchi)" },
      { id: "i", label: "Dazaifu Monzen Machi (Fukuoka)" },
      { id: "j", label: "Obuse Onsen Kannon-no-yu (Nagano)" },
      { id: "k", label: "Oshino Hakkai (Yamanashi)" },
      { id: "l", label: "Kitaguchi-hongu Fuji Sengen Shrine (Yamanashi)" },
    ],
  },
  {
    id: 4,
    bookingData: {
      title: "Nikko Tour",
      subtitle:
        "Nikko blends spiritual heritage with breathtaking nature, just a few hours from Tokyo.",
      location: "Nikko Tour",
      reviews: "(Reviews)",
      images: [
        {
          src: nikko1,
          classes:
            "col-span-1 md:col-span-2 row-span-1 md:row-span-2 w-full h-full",
        },
        {
          src: nikko2,
          classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full",
        },
        { src: nikko3, classes: "col-span-1 w-full h-full" },
        { src: nikko4, classes: "col-span-1 w-full h-full" },
      ],
      details: [
        { icon: i5, label: "Duration", value: "10 Hour" },
        { icon: i6, label: "People", value: "1-6" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" },
      ],
      price: {
        fromLabel: "From",
        primary: "423",
        secondary: "$550",
        secondaryIcon: i9,
      },
    },
    tripData: {
      description: {
        title: "Description",
        text: `Chat with your driver as you travel, and customize an itinerary focused on the Nikko sights you want to see. Tailor stops to suit your unique interests with this private experience.Start with pickup from your accommodation in the 23 Wards of Tokyo. Relax in a comfortable car as you journey through the picturesque Japanese countryside, with your private driver handling traffic and navigation. Stay connected with onboard Wi-Fi.Travel into the mountains north of Tokyo to the charming city of Nikko in Tochigi Prefecture. Enjoy free time to visit the Toshogu Shrine, exploring its 42 structures, including a stunning five-story pagoda. Experience why this area is considered a national treasure.Stop at a local restaurant where you can purchase a traditional lunch. Get recommendations on where to enjoy authentic yuba gozen (tofu skin set meal). Admire the beauty of Kegon Falls, where water cascades off a cliff into a lush landscape. `,
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Places covered",
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "English-speaking driver",
          "Airconditioned transportation",
          "Wi-fi in the vehicle",
        ],
        excludedItems: [
          " Food and drinks",
          "Guide",
          "Toshogu shrine entry ticket",
        ],
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
            { value: "option3", label: "2" },
          ],
        },
        tripInfo: [
          { label: "Location", value: "Nikko Tour" },
          { label: "Service", value: "transport + driver" },
          { label: "Duration", value: "10 Hour" },
          { label: "People", value: "1-6" },
        ],
        buttonText: "Book Now",
      },
    },
    itineraryData: [
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "Starting Location:",
        subtitle: "You Will Get Picked Up",
      },
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "Car",
        subtitle: "(2 Hours)",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Zenko Ji Temple",
        subtitle: "Visit, Sightseeing",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Nishimon Yoshinoya",
        subtitle: "Visit, Sightseeing",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Jegokudani Snow Monkey Park",
        subtitle: "Visit, Sightseeing",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Dazaifo Monzen Machi",
        subtitle: "Visit, Sightseeing, Walk",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Obuse Onsen Kannon-No-Yu",
        subtitle: "Visit, Sightseeing, Relaxation",
      },
      {
        type: "in-activity",
        icon: <FaCar />,
        title: "Obuse Onsen Kannon-No-Yu",
        subtitle: "Visit, Sightseeing, Relaxation",
      },
      {
        type: "in-transit",
        icon: <FaCar />,
        title: "You Will Return To The Starting Point",
        subtitle: "End of the tour",
      },
    ],
    options: [
      { id: "m", label: "Nikko Toshogu" },
      { id: "n", label: "Shinkyo Bridge" },
      { id: "o", label: "Kegon Falls" },
      { id: "p", label: "Nikko Futarasan Jinja" },
      { id: "q", label: "Tobu World Square" },
    ],
  },
];

export default placesData;

// itineraryData:  [
//   {
//     type: "in-transit",
//     icon: <FaCar/>,
//     title: "13 pickup location options:",
//     subtitle:
//       "Fujikawaguchiko, Itabashi City, Urayasu, Kanagawa, Bunkyo City, Ichikawa…",
//   },
//   {
//     type: "in-transit",
//     icon: <FaCar/>,
//     title: "Car",
//     duration: "(2 hours)",
//   },
//   {
//     type: "in-activity",
//     icon: <FaCar/>,
//     title: "Chureito Pagoda",
//     subtitle: "Visit, Sightseeing, Walk, Scenic views on the way (45 minutes)",
//     meta: "Optional, Extra fee",
//     subitems: [
//       {
//         icon: <FaCar/>,
//         title: "Mt. Fuji 5th Station",
//         subtitle: "Visit, Sightseeing (45 minutes)",
//         meta: "Optional, Extra fee",
//       },
//     ],
//   },
//   {
//     type: "in-activity",
//     icon: <FaCar/>,
//     title: "Oshino Hakkai",
//     subtitle: "Visit, Sightseeing, Safety briefing (45 minutes)",
//   },
//   {
//     type: "in-activity",
//     icon: <FaCar/>,
//     title: "Kitaguchi‑hongu Fuji Sengen Shrine",
//     subtitle: "Break time, Photo stop… (40 minutes)",
//   },
//   {
//     type: "in-activity",
//     icon: <FaCar/>,
//     title: "Lake Kawaguchi",
//     subtitle: "Visit, Sightseeing, Safety briefing (105 minutes)",
//   },
//   {
//     type: "in-activity",
//     icon: <FaCar/>,
//     title: "Mt. Kachi Kachi Ropeway",
//     subtitle: "Visit, Sightseeing, Walk, Scenic drive… (45 minutes)",
//   },
//   {
//     type: "in-activity",
//     icon: <FaCar/>,
//     title: "Oishi Park",
//     subtitle: "Break time, Photo stop, Free time (30 minutes)",
//     subitems: [
//       {
//         icon: <FaCar/>,
//         title: "Saiko Iyashi-no‑Sato Nenba",
//         subtitle: "Visit, Sightseeing (1 hour)",
//         meta: "Optional",
//       },
//       {
//         icon: <FaCar/>,
//         title: "Lake Ashi",
//         subtitle: "Visit, Sightseeing (30 minutes)",
//         meta: "Optional",
//       },
//       {
//         icon: <FaCar/>,
//         title: "Hakone Ropeway",
//         subtitle: "Break time, Visit, Sightseeing (1 min)",
//         meta: "Optional",
//       },
//       {
//         icon: <FaCar/>,
//         title: "Aokigahara Forest",
//         subtitle: "Pass by, Scenic views",
//         meta: "Optional",
//       },
//       {
//         icon: <FaCar/>,
//         title: "Lake Yamanaka",
//         subtitle: "Visit, Self‑guided tour (30 minutes)",
//         meta: "Optional",
//       },
//       {
//         icon: <FaCar/>,
//         title: "Hakone Open‑Air Museum",
//         subtitle: "Visit, Sightseeing, Walk (1 hour)",
//         meta: "Optional",
//       },
//       {
//         icon: <FaCar/>,
//         title: "Fugaku Wind Cave",
//         subtitle: "Break time, Free time (30 minutes)",
//         meta: "Optional",
//       },
//     ],
//   },
//   {
//     type: "in-transit",
//     icon: <FaCar/>,
//     title: "Car",
//     duration: "(2 hours)",
//   },
//   {
//     type: "no-line",
//     icon: <FaCar/>,
//     title: "13 drop‑off locations:",
//     subtitle:
//       "Fujikawaguchiko, Kanagawa, Bunkyo City, Itabashi City, Urayasu…",
//   },
// ]
