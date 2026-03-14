import { createContext } from "react";
import { useState } from "react";

let allItems = [
  {
    name: "Dashboard",
    description:
      "A central hub for data visualization and administrative control.",
    related: ["admin", "stats", "overview"],
  },
  {
    name: "Landing Page",
    description: "A single web page designed to convert visitors into leads.",
    related: ["marketing", "conversion", "sales"],
  },
  {
    name: "E-commerce",
    description: "Online platform for buying and selling products with ease.",
    related: ["shopping", "cart", "checkout"],
  },
  {
    name: "Logo",
    description: "A distinct symbol representing a brand's unique identity.",
    related: ["branding", "symbol", "mark"],
  },
  {
    name: "Card",
    description: "A compact UI container for grouping related information.",
    related: ["ui", "layout", "preview"],
  },
  {
    name: "Icons",
    description: "Small visual symbols used for intuitive navigation.",
    related: ["symbols", "vector", "ui"],
  },
  {
    name: "App Design",
    description:
      "Creating user-centric interfaces for mobile and desktop apps.",
    related: ["ui", "ux", "mobile"],
  },
  {
    name: "Web Design",
    description: "The process of planning and styling websites for browsers.",
    related: ["frontend", "layout", "responsive"],
  },
  {
    name: "Logo Design",
    description: "The art of creating scalable brand marks and identities.",
    related: ["vector", "identity", "creative"],
  },
  {
    name: "Animation",
    description: "Using motion to enhance user interaction and storytelling.",
    related: ["motion", "interaction", "lottie"],
  },
  {
    name: "Branding",
    description: "The complete visual and verbal strategy of a business.",
    related: ["strategy", "identity", "marketing"],
  },
  {
    name: "Mobile App",
    description: "Software built specifically for handheld wireless devices.",
    related: ["ios", "android", "portable"],
  },
  {
    name: "Illustration",
    description: "Custom digital art used to add personality to a brand.",
    related: ["art", "visuals", "storytelling"],
  },
  {
    name: "Hero Section",
    description:
      "The primary visual area at the top of a webpage, usually containing a large image, a headline, and a call-to-action to grab user attention.",
    related: ["landing page", "header", "cta", "visual", "marketing"],
  },
  {
    name: "Navigation Bar",
    description:
      "A horizontal or vertical menu that helps users move between different pages and sections of a website or application.",
    related: ["header", "menu", "links", "usability", "layout"],
  },
  {
    name: "Footer",
    description:
      "The bottom section of a page containing site maps, contact info, legal links, and social media icons for secondary navigation.",
    related: ["links", "copyright", "sitemap", "contact", "bottom"],
  },
  {
    name: "Card Component",
    description:
      "A flexible container used to group related information like images, text, and buttons into a single, scannable block.",
    related: ["layout", "content", "dashboard", "preview", "container"],
  },
  {
    name: "Modal Window",
    description:
      "An overlay that appears on top of the main content, requiring user interaction before they can return to the background page.",
    related: ["overlay", "popup", "dialog", "interaction", "alert"],
  },
  {
    name: "Sign Up Page",
    description:
      "A dedicated page or form designed to collect user information to create a new account for a service or platform.",
    related: ["onboarding", "form", "user auth", "registration", "input"],
  },
  {
    name: "Search Bar",
    description:
      "An input field that allows users to find specific content or items within a website or application by typing keywords.",
    related: ["input", "filtering", "navigation", "find", "utility"],
  },
  {
    name: "Accordion",
    description:
      "A vertically stacked list of items that users can expand or collapse to reveal or hide content, saving vertical space.",
    related: ["content", "collapse", "expand", "ui", "space-saving"],
  },
  {
    name: "Breadcrumbs",
    description:
      "A secondary navigation aid that shows the user's current location in the site hierarchy relative to the homepage.",
    related: ["navigation", "path", "hierarchy", "wayfinding", "ux"],
  },
  {
    name: "Button",
    description:
      "A clickable UI element that triggers an action, such as submitting a form, opening a link, or saving progress.",
    related: ["action", "cta", "input", "trigger", "interaction"],
  },
  {
    name: "Dropdown Menu",
    description:
      "A list of options that appears when a user clicks or hovers over a specific element, keeping the UI clean.",
    related: ["navigation", "select", "menu", "input", "choices"],
  },
  {
    name: "Profile Page",
    description:
      "A page where users can view and edit their personal information, settings, preferences, and activity history.",
    related: ["account", "user", "settings", "identity", "data"],
  },
  {
    name: "Testimonial Section",
    description:
      "A block of content featuring quotes and reviews from customers to build trust and social proof for a product.",
    related: ["social proof", "reviews", "marketing", "trust", "feedback"],
  },
  {
    name: "Pricing Table",
    description:
      "A layout comparing different service tiers, features, and costs to help users choose a subscription plan.",
    related: ["conversion", "plans", "comparison", "sales", "billing"],
  },
  {
    name: "Pagination",
    description:
      "A navigation system that divides a large set of content into discrete pages to improve loading speed and scannability.",
    related: ["navigation", "data", "list", "browsing", "sequencing"],
  },
  {
    name: "Tooltip",
    description:
      "A small descriptive box that appears when a user hovers over an element to provide extra context or help.",
    related: ["help", "info", "hover", "onboarding", "ux"],
  },
  {
    name: "Progress Bar",
    description:
      "A visual indicator showing the completion status of a multi-step process, task, or file upload.",
    related: ["feedback", "status", "loading", "tracking", "completion"],
  },
  {
    name: "Toggle Switch",
    description:
      "A digital switch that allows users to turn a specific setting or feature on or off with a single click.",
    related: ["settings", "input", "binary", "control", "ui"],
  },
  {
    name: "Carousel",
    description:
      "A slideshow component that allows users to browse through multiple items like images or banners in a single space.",
    related: ["slider", "banners", "marketing", "visuals", "content"],
  },
  {
    name: "Checklist",
    description:
      "A list of tasks or items with boxes that users can check off to track progress or make selections.",
    related: ["tasks", "onboarding", "input", "todo", "tracking"],
  },
  {
    name: "Contact Form",
    description:
      "A set of input fields allowing users to send messages, inquiries, or feedback directly to a business or individual.",
    related: ["input", "communication", "leads", "support", "feedback"],
  },
  {
    name: "Skeleton Screen",
    description:
      "A placeholder version of a page that shows while content is loading to reduce perceived wait time.",
    related: ["loading", "performance", "feedback", "ux", "placeholder"],
  },
  {
    name: "Empty State",
    description:
      "The screen shown when a page has no data, often used to encourage user action or explain why it's empty.",
    related: ["onboarding", "interaction", "guidance", "messaging", "ux"],
  },
  {
    name: "Dark Mode Toggle",
    description:
      "A feature that allows users to switch between light and dark color schemes for better viewing comfort.",
    related: ["accessibility", "theme", "preference", "visuals", "ui"],
  },
  {
    name: "Filter Sidebar",
    description:
      "A vertical panel used to narrow down search results or lists based on specific categories and attributes.",
    related: ["search", "discovery", "ecommerce", "filtering", "navigation"],
  },
  {
    name: "Error 404 Page",
    description:
      "The landing page shown when a user tries to access a non-existent URL, usually providing links back to safety.",
    related: ["system", "navigation", "error", "usability", "feedback"],
  },
  {
    name: "Newsletter Signup",
    description:
      "A small section or popup designed to collect email addresses for marketing and updates.",
    related: ["marketing", "conversion", "email", "leads", "subscription"],
  },
  {
    name: "Feature Grid",
    description:
      "A section that highlights the key benefits or tools of a product using icons and short descriptions.",
    related: ["landing page", "marketing", "icons", "benefits", "layout"],
  },
  {
    name: "Notification Bell",
    description:
      "A UI element that alerts users to new activity, messages, or updates within an application.",
    related: ["alerts", "engagement", "updates", "communication", "ui"],
  },
];
const SearchContext = createContext();

function SearchProvider({ children }) {
  const [activeItem, setActiveItem] = useState("Shots");
  return (
    <SearchContext.Provider value={{ allItems, activeItem, setActiveItem }}>
      {children}
    </SearchContext.Provider>
  );
}
export { SearchContext };
export default SearchProvider;
