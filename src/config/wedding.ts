export interface WeddingImage {
  /** Path relative to the `public/` folder, e.g. "/images/gallery/photo-1.jpg" */
  src: string;
  /** Descriptive alt text for screen readers and fallback display */
  alt: string;
  /** Intrinsic image width in pixels (prevents layout shift) */
  width: number;
  /** Intrinsic image height in pixels (prevents layout shift) */
  height: number;
  /** Optional CSS object-position override for responsive cropping */
  objectPosition?: string;
}

export interface ScheduleEvent {
  time: string;
  title: string;
  subtitle?: string;
  description?: string;
}

export interface NavItem {
  label: string;
  href: `#${string}`;
}

export interface EngagementGalleryCollection {
  id: string;
  kicker: string;
  heading: string;
  description: string;
  photos: WeddingImage[];
}

export interface WeddingConfig {
  siteUrl: string;
  couple: {
    firstName: string;
    firstLastName: string;
    partnerName: string;
    partnerLastName: string;
    fullNames: string;
    monogram: string;
  };
  date: string;
  isoDateTime: string;
  displayDate: string;
  displayTime: string;
  dayOfWeek: string;
  navigation: NavItem[];
  hero: {
    kicker: string;
    invitationLine: string;
    subnote: string;
    welcomeMessage: string;
  };
  countdown: {
    heading: string;
    completedHeading: string;
    completedMessage: string;
  };
  story: {
    kicker: string;
    heading: string;
    leadQuote: string;
    scriptureReference?: string;
    paragraphs: string[];
  };
  scheduleSection: {
    kicker: string;
    heading: string;
    subtitle: string;
  };
  schedule: ScheduleEvent[];
  dressCode: {
    title: string;
    description: string;
  };
  arrivalInstructions: string;
  location: {
    kicker: string;
    heading: string;
    /** Optional venue name. Leave empty ("") if you only wish to display the address. */
    venueName: string;
    region: string;
    address: string;
    street: string;
    cityStateZip: string;
    description: string;
    mapsUrl: string;
    embedMapUrl: string;
  };
  gallerySection: {
    kicker: string;
    heading: string;
    subtitle: string;
  };
  engagementGalleries: {
    proposal: EngagementGalleryCollection;
    woods: EngagementGalleryCollection;
  };
  /**
   * External RSVP URL (e.g., "https://withjoy.com/..." or "https://theknot.com/...").
   * Leave as "" until your external RSVP service is ready; the website will
   * handle it gracefully without broken links.
   */
  rsvpUrl: string;
  rsvpSection: {
    kicker: string;
    heading: string;
    message: string;
    buttonLabel: string;
    pendingNotice: string;
  };
  footer: {
    thankYouMessage: string;
  };
  images: {
    hero: WeddingImage;
    story: WeddingImage[];
    location: {
      primary: WeddingImage;
      secondary: WeddingImage;
    };
    gallery: WeddingImage[];
    openGraph: string;
  };
}

/**
 * ============================================================================
 * CENTRALIZED WEDDING CONFIGURATION
 * ============================================================================
 * Edit all text, schedule details, links, and photograph paths here.
 * To add a new gallery photo:
 *   1. Drop the image file into `public/images/gallery/`
 *   2. Add an entry with `{ src, alt, width, height }` to `wedding.images.gallery`
 */
export const wedding: WeddingConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://ethanandchrissy.com",

  couple: {
    firstName: "Ethan",
    firstLastName: "Cannelongo",
    partnerName: "Chrissy",
    partnerLastName: "Langelier",
    fullNames: "Ethan & Chrissy",
    monogram: "E & C",
  },

  date: "2027-05-21",
  isoDateTime: "2027-05-21T16:30:00-04:00",
  displayDate: "May 21, 2027",
  displayTime: "4:30 PM",
  dayOfWeek: "Friday",

  navigation: [
    { label: "Our Story", href: "#our-story" },
    { label: "Schedule", href: "#schedule" },
    { label: "Location", href: "#location" },
    { label: "Gallery", href: "#gallery" },
  ],

  hero: {
    kicker: "We're Getting Married",
    invitationLine: "Invite You to Celebrate Our Wedding",
    subnote: "Dinner & Reception to Follow",
    welcomeMessage:
      "We are so excited to celebrate our wedding with the family and friends who have been part of our lives. It would mean so much to have you there.",
  },

  countdown: {
    heading: "Counting Down to May 21",
    completedHeading: "We're Married!",
    completedMessage:
      "Thank you for celebrating with us and being part of the beginning of our marriage.",
  },

  story: {
    kicker: "A Little About Us",
    heading: "Our Story",
    leadQuote:
      "“For I know the plans I have for you,” declares the Lord, “plans to prosper you and not to harm you, plans to give you hope and a future.”",
    scriptureReference: "Jeremiah 29:11",
    paragraphs: [
      "We first met in November 2024 at our church in Middletown, Delaware, where Chrissy was serving as maid of honor at her sister's wedding. We talked afterward about our experiences in missions and our interest in traveling. Although our conversation was brief, we both remembered each other. Several months later, we unexpectedly reconnected at a young adult gathering at church. As we started talking again, we realized we had already met. This time, we had the opportunity to get to know each other more, and Ethan knew he wanted to pursue her.",

      "Some of our favorite memories have come from the little surprises we've planned for each other, especially on our birthdays. One of our favorites was when Chrissy surprised Ethan with a day exploring Washington, D.C. and a letter telling him she loved him. It was the first time we said those words to each other. Through the beautiful and difficult seasons alike, we've learned to pray for one another, extend grace, and continually encourage each other to grow closer to Christ. We're often in awe of how God has redeemed our individual stories and brought us together. It's a gift we never want to take for granted.",

      "After ten months of dating, Ethan planned a surprise proposal at a special park, with Chrissy's closest friends waiting nearby. Inspired by a memory jar Chrissy had made for him, Ethan secretly added one final memory: the moment he proposed. After reading her a letter and asking her to marry him, their friends came out to celebrate. It was such a special evening, and one we'll always remember. We're looking forward to May 21, 2027, when we get to celebrate with the people we love and begin married life together. We're so thankful for all God has done to bring us here, and excited for what lies ahead.",
    ],
  },

  scheduleSection: {
    kicker: "Friday, May 21, 2027",
    heading: "Wedding Day",
    subtitle:
      "We're looking forward to celebrating with you. Here's what the afternoon and evening will look like.",
  },

  schedule: [
    {
      time: "4:30 PM",
      title: "Wedding Ceremony",
      subtitle: "The Exchange of Vows",
      description:
        "Join us as we exchange our vows and begin our marriage, surrounded by family and friends.",
    },
    {
      time: "5:30 PM",
      title: "Dinner & Reception",
      subtitle: "Food, Speeches & Celebration",
      description:
        "Stay and celebrate with us after the ceremony with dinner, speeches, and time together.",
    },
  ],

  dressCode: {
    title: "Semi-Formal Attire",
    description:
      "We invite you to celebrate with us in semi-formal attire! For ladies, we recommend cocktail, midi, or maxi dresses. For gentlemen, a suit or dress pants with a button-down shirt and blazer are appropriate. Ties are optional. As our celebration will take place outdoors, we recommend comfortable footwear such as block heels, wedges, or dressy flats.",
  },

  arrivalInstructions:
    "Please plan to arrive 15–20 minutes before the ceremony so you have time to find your seat and get settled before we begin.",

  location: {
    kicker: "Where to Join Us",
    heading: "The Wedding Location",
    venueName: "",
    region: "Airville, Pennsylvania",
    address: "303 E Telegraph Rd, Airville, PA 17302",
    street: "303 E Telegraph Rd",
    cityStateZip: "Airville, PA 17302",
    description:
      "We'll be celebrating together in the countryside of Airville, Pennsylvania. You'll find the address and directions below. We look forward to seeing you there!",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=303+E+Telegraph+Rd,+Airville,+PA+17302",
    embedMapUrl:
      "https://www.google.com/maps?q=303+E+Telegraph+Rd,+Airville,+PA+17302&output=embed",
  },

  gallerySection: {
    kicker: "THE DAY WE GOT ENGAGED",
    heading: "Our Engagement",
    subtitle:
      "A few photos from the day we got engaged and celebrated with family and friends.",
  },

  engagementGalleries: {
    proposal: {
      id: "our-engagement",
      kicker: "THE DAY WE GOT ENGAGED",
      heading: "Our Engagement",
      description:
        "A few photos from the day we got engaged and celebrated with family and friends.",
      photos: [
        {
          src: "/images/gallery/photo-10.jpg",
          alt: "Ethan and Chrissy standing beneath a large blooming tree before the proposal",
          width: 2000,
          height: 1334,
        },
        {
          src: "/images/gallery/photo-10-1.jpg",
          alt: "Ethan and Chrissy sitting together on a sunlit hillside beneath a large flowering tree",
          width: 8192,
          height: 5464,
        },
        {
          src: "/images/gallery/photo-11.jpg",
          alt: "Ethan down on one knee proposing to Chrissy on a sunlit hillside",
          width: 2000,
          height: 1334,
        },
        {
          src: "/images/gallery/photo-12.jpg",
          alt: "Ethan placing the engagement ring on Chrissy's finger",
          width: 2000,
          height: 1334,
        },
        {
          src: "/images/gallery/photo-13.jpg",
          alt: "Ethan and Chrissy embracing on the picnic blanket after getting engaged",
          width: 2000,
          height: 1334,
        },
        {
          src: "/images/gallery/photo-14.jpg",
          alt: "Friends and family running across the green hill to celebrate the engagement",
          width: 2000,
          height: 1334,
        },
        {
          src: "/images/gallery/photo-15.jpg",
          alt: "Chrissy laughing and holding up her engagement ring with Ethan beside her",
          width: 2000,
          height: 1334,
        },
        {
          src: "/images/gallery/photo-16.jpg",
          alt: "Ethan and Chrissy smiling at golden hour holding a bouquet of white hydrangeas",
          width: 2000,
          height: 1334,
        },
      ],
    },
    woods: {
      id: "in-the-woods",
      kicker: "OUR ENGAGEMENT PHOTOS",
      heading: "In the Woods",
      description:
        "A collection of photos from our engagement session in the woods.",
      photos: [
        {
          src: "/images/gallery/photo-1.jpg",
          alt: "Ethan and Chrissy embracing in golden sunlight overlooking the river and autumn foliage",
          width: 2000,
          height: 1125,
        },
        {
          src: "/images/gallery/photo-2.jpg",
          alt: "Warm portrait of Ethan and Chrissy smiling together in an autumn field",
          width: 1125,
          height: 2000,
        },
        {
          src: "/images/gallery/photo-3.jpg",
          alt: "Ethan lifting Chrissy in his arms among tall forest pines",
          width: 1125,
          height: 2000,
        },
        {
          src: "/images/gallery/photo-3-1.jpg",
          alt: "Close-up of Ethan and Chrissy holding hands in the autumn woods with Chrissy resting her hand on Ethan's arm showing her engagement ring",
          width: 4608,
          height: 2592,
        },
        {
          src: "/images/gallery/photo-4.jpg",
          alt: "Ethan kissing Chrissy on the forehead in a warm autumn field",
          width: 2000,
          height: 1125,
        },
        {
          src: "/images/gallery/photo-5.jpg",
          alt: "Ethan and Chrissy walking hand in hand down a leaf-covered forest path",
          width: 1125,
          height: 2000,
        },
        {
          src: "/images/gallery/photo-5-1.JPG",
          alt: "Ethan and Chrissy laughing and dancing hand in hand along a leaf-covered forest trail",
          width: 2592,
          height: 4608,
        },
        {
          src: "/images/gallery/photo-6.jpg",
          alt: "Ethan and Chrissy gazing at each other in golden evening light",
          width: 1125,
          height: 2000,
        },
        {
          src: "/images/gallery/photo-7.jpg",
          alt: "Ethan carrying Chrissy beside the shimmering river surrounded by fall leaves",
          width: 2000,
          height: 1125,
        },
        {
          src: "/images/gallery/photo-8.jpg",
          alt: "Ethan and Chrissy running across a wide autumn meadow at dusk",
          width: 2000,
          height: 1125,
        },
        {
          src: "/images/gallery/photo-8-1.JPG",
          alt: "Ethan embracing Chrissy from behind in an open autumn meadow as she leans back smiling up at him",
          width: 4608,
          height: 2592,
        },
        {
          src: "/images/gallery/photo-9.jpg",
          alt: "Ethan and Chrissy laughing together in a sunlit pine grove",
          width: 2000,
          height: 1125,
        },
      ],
    },
  },

  rsvpUrl: "https://www.zola.com/wedding/ethanandchrissy2027/rsvp",

  rsvpSection: {
    kicker: "Let Us Know",
    heading: "Will You Join Us?",
    message:
      "We would love to celebrate with you! Please let us know whether you'll be able to join us on May 21, 2027.",
    buttonLabel: "Submit Your RSVP",
    pendingNotice:
      "Our RSVP details will be available soon. Please check back for updates.",
  },

  footer: {
    thankYouMessage:
      "We're so grateful for your love and support. Thank you for being part of our lives and celebrating this special day with us.",
  },

  images: {
    hero: {
      src: "/images/hero/hero.jpg",
      alt: "Ethan and Chrissy smiling at golden hour holding a bouquet of white hydrangeas",
      width: 3840,
      height: 2160,
      objectPosition: "48% 12%",
    },

    story: [
      {
        src: "/images/story/photo-1.jpg",
        alt: "Ethan and Chrissy smiling at one another among tall pine trees in autumn light",
        width: 1800,
        height: 1012,
      },
      {
        src: "/images/story/photo-2.jpg",
        alt: "Ethan kneeling on one knee proposing to Chrissy in a sunlit meadow",
        width: 1800,
        height: 1200,
      },
      {
        src: "/images/story/photo-3.jpg",
        alt: "Chrissy laughing joyfully and showing her engagement ring while Ethan hugs her",
        width: 1800,
        height: 1200,
      },
    ],

    location: {
      primary: {
        src: "/images/location/venue.jpg",
        alt: "Ethan carrying Chrissy along a wooded autumn river trail in Pennsylvania",
        width: 2000,
        height: 1125,
      },
      secondary: {
        src: "/images/location/surroundings.jpg",
        alt: "Ethan and Chrissy running hand in hand across an open autumn meadow at sunset",
        width: 1800,
        height: 1012,
      },
    },

    gallery: [
      {
        src: "/images/gallery/photo-1.jpg",
        alt: "Ethan and Chrissy embracing in golden sunlight overlooking the river and autumn foliage",
        width: 2000,
        height: 1125,
      },
      {
        src: "/images/gallery/photo-2.jpg",
        alt: "Warm portrait of Ethan and Chrissy smiling together in an autumn field",
        width: 1125,
        height: 2000,
      },
      {
        src: "/images/gallery/photo-3.jpg",
        alt: "Ethan lifting Chrissy in his arms among tall forest pines",
        width: 1125,
        height: 2000,
      },
      {
        src: "/images/gallery/photo-3-1.jpg",
        alt: "Close-up of Ethan and Chrissy holding hands in the autumn woods with Chrissy resting her hand on Ethan's arm showing her engagement ring",
        width: 4608,
        height: 2592,
      },
      {
        src: "/images/gallery/photo-4.jpg",
        alt: "Ethan kissing Chrissy on the forehead in a warm autumn field",
        width: 2000,
        height: 1125,
      },
      {
        src: "/images/gallery/photo-5.jpg",
        alt: "Ethan and Chrissy walking hand in hand down a leaf-covered forest path",
        width: 1125,
        height: 2000,
      },
      {
        src: "/images/gallery/photo-5-1.JPG",
        alt: "Ethan and Chrissy laughing and dancing hand in hand along a leaf-covered forest trail",
        width: 2592,
        height: 4608,
      },
      {
        src: "/images/gallery/photo-6.jpg",
        alt: "Ethan and Chrissy gazing at each other in golden evening light",
        width: 1125,
        height: 2000,
      },
      {
        src: "/images/gallery/photo-7.jpg",
        alt: "Ethan carrying Chrissy beside the shimmering river surrounded by fall leaves",
        width: 2000,
        height: 1125,
      },
      {
        src: "/images/gallery/photo-8.jpg",
        alt: "Ethan and Chrissy running across a wide autumn meadow at dusk",
        width: 2000,
        height: 1125,
      },
      {
        src: "/images/gallery/photo-8-1.JPG",
        alt: "Ethan embracing Chrissy from behind in an open autumn meadow as she leans back smiling up at him",
        width: 4608,
        height: 2592,
      },
      {
        src: "/images/gallery/photo-9.jpg",
        alt: "Ethan and Chrissy laughing together in a sunlit pine grove",
        width: 2000,
        height: 1125,
      },
      {
        src: "/images/gallery/photo-10.jpg",
        alt: "Ethan and Chrissy standing beneath a large blooming tree before the proposal",
        width: 2000,
        height: 1334,
      },
      {
        src: "/images/gallery/photo-10-1.jpg",
        alt: "Ethan and Chrissy sitting together on a sunlit hillside beneath a large flowering tree",
        width: 8192,
        height: 5464,
      },
      {
        src: "/images/gallery/photo-11.jpg",
        alt: "Ethan down on one knee proposing to Chrissy on a sunlit hillside",
        width: 2000,
        height: 1334,
      },
      {
        src: "/images/gallery/photo-12.jpg",
        alt: "Ethan placing the engagement ring on Chrissy's finger",
        width: 2000,
        height: 1334,
      },
      {
        src: "/images/gallery/photo-13.jpg",
        alt: "Ethan and Chrissy embracing on the picnic blanket after getting engaged",
        width: 2000,
        height: 1334,
      },
      {
        src: "/images/gallery/photo-14.jpg",
        alt: "Friends and family running across the green hill to celebrate the engagement",
        width: 2000,
        height: 1334,
      },
      {
        src: "/images/gallery/photo-15.jpg",
        alt: "Chrissy laughing and holding up her engagement ring with Ethan beside her",
        width: 2000,
        height: 1334,
      },
      {
        src: "/images/gallery/photo-16.jpg",
        alt: "Ethan and Chrissy smiling at golden hour holding a bouquet of white hydrangeas",
        width: 8192,
        height: 5464,
      },
    ],

    openGraph: "/images/og/wedding-preview.jpg",
  },
};
