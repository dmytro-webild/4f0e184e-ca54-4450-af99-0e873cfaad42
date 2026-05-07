"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import AboutMetric from '@/components/sections/about/AboutMetric';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Coffee, ShieldCheck, Star, Users, Waves, Wifi } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="icon-arrow"
        defaultTextAnimation="entrance-slide"
        borderRadius="soft"
        contentWidth="compact"
        sizing="large"
        background="blurBottom"
        cardStyle="inset"
        primaryButtonStyle="diagonal-gradient"
        secondaryButtonStyle="solid"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleFullscreen
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "Chalets",
          id: "chalets",
        },
        {
          name: "Reviews",
          id: "reviews",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Wahat Almasiaf"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardGallery
      background={{
        variant: "radial-gradient",
      }}
      title="Escape Into Luxury & Privacy"
      description="Premium private family chalets designed for comfort, tranquility, and unforgettable hospitality in Abha."
      buttons={[
        {
          text: "Book Your Stay",
          href: "#contact",
        },
        {
          text: "WhatsApp Reservation",
          href: "https://wa.me/966561502929",
        },
      ]}
      mediaItems={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/infinity-pool-overlooking-ocean-sunset_23-2151993704.jpg?_wi=1",
          imageAlt: "Resort pool at sunset",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/luxurious-villa-with-modern-architectural-design_23-2151694094.jpg",
          imageAlt: "Family gathering space",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-silhouette-luxury-umbrella-chair-around-swimming-pool-hotel-pool-resort-with-coconut-palm-tree-sunrise-times-boost-up-color-processing_1339-2657.jpg",
          imageAlt: "Mountain view exterior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tranquil-sunset-reflection-tropical-coastline-generated-by-ai_188544-36460.jpg",
          imageAlt: "Luxury chalet interior",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/umbrella-chair-around-swimming-pool-neary-sea-ocean-beach-sunrise-sunset-time_74190-8446.jpg",
          imageAlt: "Warm evening lighting",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/infinity-pool-sunset-with-palm-trees-ocean-view_23-2151974407.jpg",
          imageAlt: "Tranquil oasis vibe",
        },
      ]}
      mediaAnimation="blur-reveal"
    />
  </div>

  <div id="metrics" data-section="metrics">
      <AboutMetric
      useInvertedBackground={true}
      title="Our Hospitality Standards"
      metrics={[
        {
          icon: Star,
          label: "Google Rating",
          value: "4.2+",
        },
        {
          icon: Users,
          label: "Verified Guests",
          value: "1000+",
        },
        {
          icon: Waves,
          label: "Private Pools",
          value: "Available",
        },
        {
          icon: ShieldCheck,
          label: "Family Friendly",
          value: "100%",
        },
      ]}
      metricsAnimation="slide-up"
    />
  </div>

  <div id="chalets" data-section="chalets">
      <ProductCardOne
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "1",
          name: "Family Chalet",
          price: "From 500 SAR",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-wooden-inscription-home-living-room_169016-5186.jpg?_wi=1",
        },
        {
          id: "2",
          name: "VIP Luxury Chalet",
          price: "From 900 SAR",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-stairs-outdoors-water-summer_1203-5062.jpg?_wi=1",
        },
        {
          id: "3",
          name: "Poolside Chalet",
          price: "From 750 SAR",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-mother-with-her-four-kids-winter-day_627829-207.jpg",
        },
        {
          id: "4",
          name: "Large Group Suite",
          price: "From 1200 SAR",
          imageSrc: "http://img.b2bpic.net/free-photo/room-with-green-leather-sofa_140725-6419.jpg",
        },
        {
          id: "5",
          name: "Cozy Couple Stay",
          price: "From 400 SAR",
          imageSrc: "http://img.b2bpic.net/free-photo/design-house-modern-villa-with-open-plan-living-private-bedroom-wing-large-terrace-with-privacy_1258-169751.jpg",
        },
        {
          id: "6",
          name: "Resort View Chalet",
          price: "From 600 SAR",
          imageSrc: "http://img.b2bpic.net/free-photo/photorealistic-wooden-house-interior-with-timber-decor-furnishings_23-2151263551.jpg",
        },
      ]}
      title="Our Featured Chalets"
      description="Choose from our selection of premium chalets designed for ultimate family comfort."
    />
  </div>

  <div id="experience" data-section="experience">
      <FeatureBento
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={true}
      features={[
        {
          bentoComponent: "reveal-icon",
          icon: Waves,
          title: "Private Pools",
          description: "Crystal clear water in your private oasis.",
          imageSrc: "http://img.b2bpic.net/free-photo/umbrella-paradise-tourism-swimming-luxury_1203-4750.jpg",
          imageAlt: "umbrella paradise tourism swimming luxury",
        },
        {
          bentoComponent: "reveal-icon",
          icon: Wifi,
          title: "Fast WiFi",
          description: "Stay connected while enjoying nature.",
          imageSrc: "http://img.b2bpic.net/free-photo/infinity-pool-overlooking-ocean-sunset_23-2151993704.jpg?_wi=2",
          imageAlt: "umbrella paradise tourism swimming luxury",
        },
        {
          bentoComponent: "reveal-icon",
          icon: Coffee,
          title: "BBQ Area",
          description: "Perfect spaces for family gatherings.",
          imageSrc: "http://img.b2bpic.net/free-photo/still-life-with-wooden-inscription-home-living-room_169016-5186.jpg?_wi=2",
          imageAlt: "umbrella paradise tourism swimming luxury",
        },
        {
          bentoComponent: "reveal-icon",
          icon: ShieldCheck,
          title: "Secure Privacy",
          description: "Designed for maximum peace of mind.",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-stairs-outdoors-water-summer_1203-5062.jpg?_wi=2",
          imageAlt: "umbrella paradise tourism swimming luxury",
        },
      ]}
      title="A Complete Experience"
      description="More than just a stay, we offer a comprehensive retreat designed to meet all your family needs."
    />
  </div>

  <div id="reviews" data-section="reviews">
      <TestimonialCardThirteen
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",
          name: "Ahmed S.",
          handle: "@ahmed",
          testimonial: "One of the cleanest chalets we've stayed in. The staff were extremely respectful.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-happy-surprised-brunette-woman-looks-front_197531-24122.jpg",
        },
        {
          id: "2",
          name: "Sara M.",
          handle: "@sara",
          testimonial: "Quiet atmosphere, spacious rooms, and excellent service for families.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/people-positive-emotions-technology-concept-overjoyed-woman-uses-modern-mobile-phone-online-communication-raises-fore-finger-as-remembers-congratulate-friend-rests-sidewalk-bar_273609-2740.jpg",
        },
        {
          id: "3",
          name: "Khaled F.",
          handle: "@khaled",
          testimonial: "The pool was amazing. We had a great time with the kids.",
          rating: 4,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-lovely-couple-making-selfie-vacation-mountains-lake-summer-bright-clothes-hat-sunglasses-kisses-fun-together_291049-2417.jpg",
        },
        {
          id: "4",
          name: "Mona A.",
          handle: "@mona",
          testimonial: "Great price for such a high level of privacy. Recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/tourist-exotic-resort-reception_482257-79677.jpg",
        },
        {
          id: "5",
          name: "Yasser K.",
          handle: "@yasser",
          testimonial: "Beautiful atmosphere and very helpful staff. Will return.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/friends-having-fun-beach-with-drinks_1157-32255.jpg",
        },
      ]}
      showRating={true}
      title="Guest Testimonials"
      description="Read what families have to say about their stay at Wahat Almasiaf."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSplitText
      useInvertedBackground={true}
      faqs={[
        {
          id: "1",
          title: "Do you offer private pools?",
          content: "Yes, all our luxury and pool-side chalets feature private pools.",
        },
        {
          id: "2",
          title: "Is it family-friendly?",
          content: "Absolutely. We are designed specifically for family comfort.",
        },
        {
          id: "3",
          title: "How can I book?",
          content: "You can book easily via WhatsApp or by calling our direct number.",
        },
      ]}
      sideTitle="Common Questions"
      faqsAnimation="blur-reveal"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactCenter
      useInvertedBackground={false}
      background={{
        variant: "plain",
      }}
      tag="Ready to Book?"
      title="Your Private Escape Awaits"
      description="Reserve your chalet today. Contact us for direct booking or availability inquiries."
      inputPlaceholder="Enter your WhatsApp number"
      buttonText="Reserve Now"
      onSubmit={(email: string) => { console.log(email); }}
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterLogoEmphasis
      columns={[
        {
          items: [
            {
              label: "Home",
              href: "#hero",
            },
            {
              label: "Chalets",
              href: "#chalets",
            },
          ],
        },
        {
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "Reviews",
              href: "#reviews",
            },
          ],
        },
      ]}
      logoText="Wahat Almasiaf"
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
