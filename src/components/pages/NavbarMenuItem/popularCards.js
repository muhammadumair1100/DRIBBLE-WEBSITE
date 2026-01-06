const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
    title: "Vortex UI",
    location: "London, UK",
    premuim: "Team",
    liked: 1500,
    viewed: 20000,
    type: "image",
    heading: "Modern Web App Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    title: "Creative Agency",
    location: "New York, NY",
    premuim: "Pro",
    liked: 3200,
    viewed: 45000,
    type: "image",
    heading: "Branding and Identity Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    title: "Landing Page",
    location: "Miami, FL",
    premuim: "Team",
    liked: 3000,
    viewed: 50000,
    type: "image",
    heading: "High Conversion Rate Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    title: "Mobile App Design",
    location: "Austin, TX",
    premuim: "Pro",
    liked: 1900,
    viewed: 29000,
    type: "image",
    heading: "User-Friendly Mobile Interface",
  },
  {
    image:
      "https://images.unsplash.com/photo-1767509727749-aea97a7f05e1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1767565221432-552acb20b8d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://images.unsplash.com/photo-1767565221432-552acb20b8d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Online Marketplace",
    location: "Singapore, SG",
    premuim: "Team",
    liked: 6500,
    viewed: 110000,
    type: "image",
    heading: "Buy and Sell with Ease",
  },
  {
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800",
    title: "Blog Website",
    location: "Chicago, IL",
    premuim: "Pro",
    liked: 1600,
    viewed: 24000,
    type: "image",
    heading: "Engaging Content and Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800",
    title: "Landing Page",
    location: "Miami, FL",
    premuim: "Team",
    liked: 3000,
    viewed: 50000,
    type: "image",
    heading: "High Conversion Rate Design",
  },
  {
    image:
      "https://images.unsplash.com/photo-1767562521358-dc8670bdd0c7?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1761839257864-c6ccab7238de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://images.unsplash.com/photo-1761839257864-c6ccab7238de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Social Media App",
    location: "San Diego, CA",
    premuim: "Pro",
    liked: 4000,
    viewed: 60000,
    type: "image",
    heading: "Connecting People Globally",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
    title: "Fitness App",
    location: "Boston, MA",
    premuim: "Team",
    liked: 2500,
    viewed: 35000,
    type: "image",
    heading: "Track Your Fitness Goals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
    title: "Travel Blog",
    location: "Paris, FR",
    premuim: "Pro",
    liked: 1800,
    viewed: 28000,
    type: "image",
    heading: "Explore the World with Us",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800",
    title: "Recipe App",
    location: "Rome, IT",
    premuim: "Team",
    liked: 2200,
    viewed: 32000,
    type: "image",
    heading: "Delicious Recipes at Your Fingertips",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=800",
    title: "Event Management App",
    location: "Toronto, CA",
    premuim: "Pro",
    liked: 3000,
    viewed: 40000,
    type: "image",
    heading: "Plan Your Events Seamlessly",
  },
  {
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800",
    title: "Online Learning Platform",
    location: "London, UK",
    premuim: "Team",
    liked: 3500,
    viewed: 50000,
    type: "image",
    heading: "Learn Anytime, Anywhere",
  },
  {
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=800",
    title: "Real Estate App",
    location: "Dubai, AE",
    premuim: "Pro",
    liked: 4000,
    viewed: 60000,
    type: "image",
    heading: "Find Your Dream Home",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    title: "Fitness Tracker",
    location: "Barcelona, ES",
    premuim: "Team",
    liked: 4500,
    viewed: 70000,
    type: "image",
    heading: "Stay Fit and Healthy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
    title: "Travel Booking App",
    location: "Lisbon, PT",
    premuim: "Pro",
    liked: 5000,
    viewed: 80000,
    type: "image",
    heading: "Book Your Next Adventure",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800",
    title: "Recipe Sharing App",
    location: "Amsterdam, NL",
    premuim: "Team",
    liked: 5500,
    viewed: 90000,
    type: "image",
    heading: "Share Your Favorite Recipes",
  },
  {
    image:
      "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1567270671170-fdc10a5bf831?q=80&w=800",
    title: "Pet Adoption App",
    location: "Sydney, AU",
    premuim: "Pro",
    liked: 6000,
    viewed: 100000,
    type: "image",
    heading: "Find Your Furry Friend",
  },
  {
    image:
      "https://images.unsplash.com/photo-1767487018495-d08b6e32ecc6?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1767565221432-552acb20b8d9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://images.unsplash.com/photo-1761839258803-21515f43190c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Online Marketplace",
    location: "Singapore, SG",
    premuim: "Team",
    liked: 6500,
    viewed: 110000,
    type: "image",
    heading: "Buy and Sell with Ease",
  },
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800",
    title: "Virtual Reality Experience",
    location: "Virtual, VR",
    premuim: "Pro",
    liked: 7000,
    viewed: 120000,
    type: "image",
    heading: "Immerse Yourself in VR",
  },
  {
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
    title: "Online Fitness Classes",
    location: "Remote",
    premuim: "Team",
    liked: 7500,
    viewed: 130000,
    type: "image",
    heading: "Get Fit from Home",
  },
  {
    image:
      "https://images.unsplash.com/photo-1764649841485-82d7bd92760a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1764966894769-4b2944571d12?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userImage:
      "https://images.unsplash.com/photo-1764966894769-4b2944571d12?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Language Learning App",
    location: "Global",
    premuim: "Pro",
    liked: 8000,
    viewed: 140000,
    type: "image",
    heading: "Learn a New Language",
  },
  {
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800",
    title: "Mindfulness App",
    location: "Anywhere",
    premuim: "Team",
    liked: 8500,
    viewed: 150000,
    type: "image",
    heading: "Find Your Inner Peace",
  },
  {
    image:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=800",
    title: "Cooking App",
    location: "Global",
    premuim: "Pro",
    liked: 9000,
    viewed: 160000,
    type: "image",
    heading: "Cook Delicious Meals",
  },
  {
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
    title: "Analytics Dashboard",
    location: "Global",
    premuim: "Pro",
    liked: 2400,
    viewed: 15600,
    type: "image",
    heading: "SaaS Analytics Dashboard UI",
  },
  {
    image:
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800",
    imageTwo:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?q=80&w=800",
    title: "Minimalist Lab",
    location: "Berlin, DE",
    premuim: "Pro",
    liked: 850,
    viewed: 12300,
    type: "image",
    heading: "E-commerce Product Landing Page",
  },
  {
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300",
    imageTwo:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=300",
    title: "Code Craft",
    location: "San Francisco, CA",
    premuim: "Team",
    liked: 4200,
    viewed: 35000,
    type: "image",
    heading: "Fitness Tracking Mobile App",
  },
  {
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    imageTwo:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=300",
    imageThree:
      "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=300",
    userImage:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000",
    title: "Crypto Studio",
    location: "Tokyo, JP",
    premuim: "Team",
    liked: 560,
    viewed: 4200,
    type: "image",
    heading: "NFT Marketplace Interface Design",
  },
  // Continue updating userImage for other cards similarly...
];

export { cards };
