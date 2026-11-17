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
  isoDateTime: "2027-05-21T16:00:00-04:30",
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
    kicker: "Save the Date",
    invitationLine: "Invite You to Their Wedding Celebration",
    subnote: "Reception to Follow",
    welcomeMessage:
      "We joyfully invite you to share in our celebration of love, commitment, and the beginning of our marriage.",
  },

  countdown: {
    heading: "Counting Down to Forever",
    completedHeading: "Just Married",
    completedMessage:
      "Thank you for celebrating May 21, 2027 with us and being part of our marriage story.",
  },

  story: {
    kicker: "How It All Began",
    heading: "Our Story",
    leadQuote:
      "From the very first conversation to a golden-hour promise beneath the trees, every season together has led us here.",
    // Replace the placeholder paragraphs below with your personal relationship story:
    paragraphs: [
      "[Placeholder — How We Met] Share the story of how your paths first crossed, your earliest impressions of one another, and the moments when a simple connection began turning into something lasting.",
      "[Placeholder — Growing Together] Describe the seasons, adventures, quiet traditions, and shared milestones that shaped your relationship and made it clear you had found home in each other.",
      "[Placeholder — The Proposal & Looking Ahead] Recount the golden-hour proposal surrounded by the people you love most, and share what you are most excited for as you gather with family and friends on May 21, 2027.",
    ],
  },

  scheduleSection: {
    kicker: "May 21, 2027",
    heading: "Schedule & Guest Details",
    subtitle:
      "An afternoon of vows followed by an evening of dinner, toasts, and celebration.",
  },

  schedule: [
    {
      time: "4:30 PM",
      title: "Wedding Ceremony",
      subtitle: "Exchange of Vows",
      description:
        "We gather to exchange our wedding vows surrounded by our closest family and friends.",
    },
    {
      time: "5:30 PM",
      title: "Reception",
      subtitle: "Dinner, Toasts & Dancing",
      description:
        "Celebrate with us immediately following the ceremony with refreshments, dinner, heartfelt toasts, and dancing.",
    },
  ],

  dressCode: {
    title: "Semi-formal",
    description:
      "We kindly invite guests to dress in semi-formal attire—such as cocktail or midi dresses, dressy separates, suits, or a dress shirt and slacks with a jacket. For your comfort outdoors, we recommend block heels, wedges, or dress flats.",
  },

  arrivalInstructions:
    "Please arrive 15–20 minutes before the ceremony to allow time to find your seat and get settled before we begin.",

  location: {
    kicker: "The Setting",
    heading: "Wedding Location",
    venueName: "",
    region: "Airville, Pennsylvania",
    address: "303 E Telegraph Rd, Airville, PA 17302",
    street: "303 E Telegraph Rd",
    cityStateZip: "Airville, PA 17302",
    description:
      "Our ceremony and reception will be held in the scenic countryside of Airville, Pennsylvania. Directions and map details are provided below to make your travels effortless.",
    mapsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=303+E+Telegraph+Rd,+Airville,+PA+17302",
    embedMapUrl:
      "https://www.google.com/maps?q=303+E+Telegraph+Rd,+Airville,+PA+17302&output=embed",
  },

  gallerySection: {
    kicker: "Captured Moments",
    heading: "Engagement Gallery",
    subtitle:
      "Swipe or drag horizontally to explore photographs from our proposal and engagement portraits.",
  },

  rsvpUrl: "https://www.zola.com/wedding/ethanandchrissy2027/rsvp",

  rsvpSection: {
    kicker: "Kindly Respond",
    heading: "Celebrate With Us",
    message:
      "We would be honored to have you with us on May 21, 2027. Please let us know if you will be able to attend by submitting your RSVP below.",
    buttonLabel: "RSVP Online",
    pendingNotice:
      "Formal invitations and online RSVP details will be available shortly. Please check back soon.",
  },

  footer: {
    thankYouMessage:
      "Thank you for your love, encouragement, and presence as we begin our marriage together.",
  },

  images: {
    hero: {
      src: "/images/hero/engagement.jpg",
      alt: "Ethan and Chrissy embracing in warm golden-hour sunlight beside an autumn river",
      width: 2400,
      height: 1350,
      objectPosition: "28% 35%",
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
        width: 2000,
        height: 1334,
      },
    ],

    openGraph: "/images/og/wedding-preview.jpg",
  },
};
