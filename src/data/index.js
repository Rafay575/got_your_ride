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
import i10 from "../assets/image_1.png";
import i11 from "../assets/image_2.png";
import i12 from "../assets/Group_1.png";
import i13 from "../assets/Group_2.png";
import i14 from "../assets/Group_3.png";
import i15 from "../assets/Group_4.png";

// For brevity, only Place 1 is fully filled out; replicate or modify values for Place 2,3,4.
const placesData = [
  {
    id: 2,
    bookingData: {
      title: "Mt. Fuji 5th Station",
      subtitle: "Experience Japan's Premier GetYourRide Service – Ready at Your Fingertips with Just One Click!",
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
        primary: "350",
        secondary: "$500",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `Embark on an unforgettable journey with Getyourride's private Mt. Fuji tour, accompanied by an expert English-speaking driver. As you traverse the awe-inspiring landscapes of Japan, immerse yourself in the rich cultural tapestry woven around the iconic Mt. Fuji. Your knowledgeable drivers will unveil the hidden gems and historical anecdotes of the region, ensuring each moment is steeped in discovery and wonder. From serene lakeshores to charming villages nestled against the majestic backdrop of Mt. Fuji, every stop promises breathtaking vistas and unparalleled photo opportunities. Whether you're a seasoned adventurer or a first-time visitor, this exclusive tour offers a personalized and enriching experience, leaving you with cherished memories of Japan's most celebrated natural wonder. Contact Us at +96896918676`
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
    itineraryData: {
      leftColumn: {
        title: "Itinerary",
        headerItems: [
          { icon: i15, text: "Mt. Fuji 5th Station", textClass: "text-[#f1582b] pl-4 font-bold" },
          { icon: i14, text: "starting location", textClass: "pl-4 font-semibold" }
        ],
        stopsBackground: i11,
        stops: [
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" },
        
       
          { icon: i12, title: "Mt. Fuji 5th Station", duration: "(75 minutes)" }
        ]
      },
      rightImage: i10
    }
  },
  {
    id: 1,
    bookingData: {
      title: "Place 2 Title",
      subtitle: "Subtitle for place 2",
      location: "Location 2",
      reviews: "(Reviews)",
      images: [
        { src: i2, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: i3, classes: "col-span-1 w-full h-full" },
        { src: i4, classes: "col-span-1 w-full h-full" },
        { src: i1, classes: "col-span-1 w-full h-full" }
      ],
      details: [
        { icon: i5, label: "Duration", value: "8 Hours" },
        { icon: i6, label: "People", value: "2-4" },
        { icon: i7, label: "Language", value: "Japanese" },
        { icon: i8, label: "Type", value: "Cultural" }
      ],
      price: {
        fromLabel: "From",
        primary: "400",
        secondary: "$550",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `Explore the rich heritage and scenic beauty of place 2. Enjoy guided tours and authentic experiences that immerse you in local culture.`
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
          { label: "People", value: "2-4" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData: {
      leftColumn: {
        title: "Itinerary",
        headerItems: [
          { icon: i15, text: "Place 2 Landmark", textClass: "text-[#f1582b] pl-4 font-bold" },
          { icon: i14, text: "starting point", textClass: "pl-4 font-semibold" }
        ],
        stopsBackground: i11,
        stops: [
          { icon: i12, title: "Stop 1", duration: "(60 minutes)" },
          { icon: i13, title: "Stop 2", duration: "(60 minutes)" },
          { icon: i12, title: "Stop 3", duration: "(60 minutes)" },
          { icon: i12, title: "Stop 4", duration: "(60 minutes)" }
        ]
      },
      rightImage: i10
    }
  },
  // Similarly define for id: 3 and id: 4 with their respective data.
  {
    id: 3,
    bookingData: {
      title: "Place 3 Title",
      subtitle: "Subtitle for place 3",
      location: "Location 3",
      reviews: "(Reviews)",
      images: [
        { src: i3, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: i1, classes: "col-span-1 w-full h-full" },
        { src: i2, classes: "col-span-1 w-full h-full" },
        { src: i4, classes: "col-span-1 w-full h-full" }
      ],
      details: [
        { icon: i5, label: "Duration", value: "6 Hours" },
        { icon: i6, label: "People", value: "1-3" },
        { icon: i7, label: "Language", value: "English" },
        { icon: i8, label: "Type", value: "Adventure" }
      ],
      price: {
        fromLabel: "From",
        primary: "300",
        secondary: "$450",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `Experience Place 3 like never before. Discover hidden gems and enjoy personalized experiences tailored just for you.`
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
          { label: "People", value: "1-3" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData: {
      leftColumn: {
        title: "Itinerary",
        headerItems: [
          { icon: i15, text: "Place 3 Landmark", textClass: "text-[#f1582b] pl-4 font-bold" },
          { icon: i14, text: "starting point", textClass: "pl-4 font-semibold" }
        ],
        stopsBackground: i11,
        stops: [
          { icon: i12, title: "Stop 1", duration: "(45 minutes)" },
          { icon: i13, title: "Stop 2", duration: "(45 minutes)" },
          { icon: i12, title: "Stop 3", duration: "(45 minutes)" },
          { icon: i12, title: "Stop 4", duration: "(45 minutes)" }
        ]
      },
      rightImage: i10
    }
  },
  {
    id: 4,
    bookingData: {
      title: "Place 4 Title",
      subtitle: "Subtitle for place 4",
      location: "Location 4",
      reviews: "(Reviews)",
      images: [
        { src: i4, classes: "col-span-1 md:col-span-2 row-span-1 w-full h-full" },
        { src: i2, classes: "col-span-1 w-full h-full" },
        { src: i1, classes: "col-span-1 w-full h-full" },
        { src: i3, classes: "col-span-1 w-full h-full" }
      ],
      details: [
        { icon: i5, label: "Duration", value: "12 Hour" },
        { icon: i6, label: "People", value: "4-8" },
        { icon: i7, label: "Language", value: "Multilingual" },
        { icon: i8, label: "Type", value: "Luxury" }
      ],
      price: {
        fromLabel: "From",
        primary: "500",
        secondary: "$700",
        secondaryIcon: i9
      }
    },
    tripData: {
      description: {
        title: "Description",
        text: `Discover the extravagance of Place 4. Enjoy a premium experience with lavish amenities and first-class service.`
      },
      tripHighlights: {
        title: "Trip Highlights",
        subTitle: "Must-See Attractions"
      },
      includeExclude: {
        title: "Include/Exclude",
        includedItems: [
          "Luxury transport",
          "Gourmet meals",
          "Exclusive access"
        ],
        excludedItems: [
          "Personal expenses",
          "Souvenirs",
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
          { label: "Location", value: "Place 4 Location" },
          { label: "Service", value: "Luxury Experience" },
          { label: "Duration", value: "12 Hours" },
          { label: "People", value: "4-8" }
        ],
        buttonText: "Add to cart"
      }
    },
    itineraryData: {
      leftColumn: {
        title: "Itinerary",
        headerItems: [
          { icon: i15, text: "Place 4 Landmark", textClass: "text-[#f1582b] pl-4 font-bold" },
          { icon: i14, text: "starting point", textClass: "pl-4 font-semibold" }
        ],
        stopsBackground: i11,
        stops: [
          { icon: i12, title: "Stop 1", duration: "(90 minutes)" },
          { icon: i13, title: "Stop 2", duration: "(90 minutes)" },
          { icon: i12, title: "Stop 3", duration: "(90 minutes)" },
          { icon: i12, title: "Stop 4", duration: "(90 minutes)" }
        ]
      },
      rightImage: i10
    }
  }
];

export default placesData;
