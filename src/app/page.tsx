"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import React from "react";
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import HeroBillboardGallery from '@/components/sections/hero/HeroBillboardGallery';
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import { Globe, Bot, X, MessageSquare } from "lucide-react";

const content = {
  en: {
    reviews: {
      title: "Guest Testimonials", description: "Read what families have to say about their stay at Wahat Almasiaf.", items: [
        { id: "1", name: "Ahmed S.", testimonial: "One of the cleanest chalets we've stayed in. The staff were extremely respectful.", rating: 5 },
        { id: "2", name: "Sara M.", testimonial: "Quiet atmosphere, spacious rooms, and excellent service for families.", rating: 5 },
        { id: "3", name: "Khaled F.", testimonial: "The pool was amazing. We had a great time with the kids.", rating: 4 }
      ]
    },
    faq: {
      sideTitle: "Common Questions", sideDescription: "We are here to answer everything you need to know about your stay.", items: [
        { id: "1", title: "Do you offer private pools?", content: "Yes, all our luxury and pool-side chalets feature private pools." },
        { id: "2", title: "Is it family-friendly?", content: "Absolutely. We are designed specifically for family comfort." },
        { id: "3", title: "Check-in and Check-out times?", content: "Check-in begins at 3:00 PM and check-out is required by 12:00 PM." }
      ]
    },
    contact: {
      tag: "Ready to Book?", title: "Your Private Escape Awaits", description: "Reserve your chalet today. Contact us for direct booking or availability inquiries.", button: "Reserve Now"
    }
  },
  ar: {
    reviews: {
      title: "آراء الضيوف", description: "اقرأ ماذا يقول الضيوف عن إقامتهم في واحة المصيف.", items: [
        { id: "1", name: "أحمد س.", testimonial: "من أنظف الشاليهات التي أقمنا فيها، الموظفون كانوا محترمين جداً.", rating: 5 },
        { id: "2", name: "سارة م.", testimonial: "جو هادئ، غرف واسعة، وخدمة ممتازة للعائلات.", rating: 5 },
        { id: "3", name: "خالد ف.", testimonial: "المسبح كان رائعاً، استمتعنا كثيراً مع الأطفال.", rating: 4 }
      ]
    },
    faq: {
      sideTitle: "أسئلة شائعة", sideDescription: "نحن هنا للإجابة على كل ما تحتاج لمعرفته حول إقامتك.", items: [
        { id: "1", title: "هل توفرون مسابح خاصة؟", content: "نعم، جميع شاليهاتنا الفاخرة والمطلة على المسبح تحتوي على مسابح خاصة." },
        { id: "2", title: "هل المكان مناسب للعائلات؟", content: "بالتأكيد، صممنا المكان خصيصاً لراحة العائلات." },
        { id: "3", title: "ما هي أوقات الدخول والخروج؟", content: "وقت الدخول الساعة 3 مساءً، ووقت الخروج الساعة 12 ظهراً." }
      ]
    },
    contact: {
      tag: "هل أنت مستعد للحجز؟", title: "ملاذك الخاص بانتظارك", description: "احجز شاليهك اليوم. تواصل معنا للحجز المباشر أو للاستفسار عن التوفر.", button: "احجز الآن"
    }
  }
};

export default function LandingPage() {
  const [lang, setLang] = React.useState<'en' | 'ar'>('en');
  const [showAi, setShowAi] = React.useState(false);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'ar' : 'en';
    setLang(newLang);
    document.documentElement.lang = newLang;
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
  };

  const t = content[lang];

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
        <div className="fixed top-4 right-4 z-[9999] flex flex-col gap-2">
            <button 
                onClick={toggleLanguage}
                className="flex items-center gap-2 bg-white/10 backdrop-blur p-2 rounded-full border border-white/20 hover:bg-white/20"
            >
                <Globe className="w-4 h-4" />
                <span className="text-sm font-semibold">{lang.toUpperCase()}</span>
            </button>
            <button 
                onClick={() => setShowAi(!showAi)}
                className="flex items-center gap-2 bg-primary/10 backdrop-blur p-2 rounded-full border border-primary/20 hover:bg-primary/20"
            >
                {showAi ? <X className="w-4 h-4" /> : <Bot className="w-4 h-4 text-primary" />}
            </button>
        </div>

        {showAi && (
            <div className="fixed bottom-20 right-4 z-[9998] w-80 bg-background border rounded-2xl shadow-2xl p-6">
                <div className="flex items-center gap-3 mb-4 text-primary">
                    <Bot className="w-6 h-6" />
                    <h3 className="font-bold">{lang === 'en' ? 'AI Assistant' : 'المساعد الذكي'}</h3>
                </div>
                <p className="text-sm mb-4">{lang === 'en' ? 'How can I assist you with your booking today?' : 'كيف يمكنني مساعدتك في حجزك اليوم؟'}</p>
                <input className="w-full p-3 border rounded-xl bg-card focus:outline-none focus:ring-2 focus:ring-primary" placeholder={lang === 'en' ? 'Type your message...' : 'اكتب رسالتك...'} />
            </div>
        )}

        <div id="nav" data-section="nav">
            <NavbarStyleFullscreen
              navItems={[
                { name: lang === 'en' ? "Home" : "الرئيسية", id: "hero" },
                { name: lang === 'en' ? "Reviews" : "الآراء", id: "reviews" },
                { name: lang === 'en' ? "Contact" : "اتصل بنا", id: "contact" },
              ]}
              brandName="Wahat Almasiaf"
            />
        </div>

        <div id="hero" data-section="hero">
            <HeroBillboardGallery
              background={{ variant: "radial-gradient" }}
              title="بيوت عطلات واحة المصيف للضيافه السياحي"
              description="Wahat Almasif"
              buttons={[{ text: lang === 'en' ? "Book Now" : "احجز الآن", href: "#contact" }]}
              mediaItems={[
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DPjpK8EsdvIyzPAViSsWtfgqYn/uploaded-1778710060577-tg3ujrnb.jpg" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DPjpK8EsdvIyzPAViSsWtfgqYn/uploaded-1778195274963-ccgflh66.png" },
                { imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3DPjpK8EsdvIyzPAViSsWtfgqYn/uploaded-1778192267988-pmpe4vzf.png" },
              ]}
            />
        </div>

        <div id="reviews" data-section="reviews">
            <TestimonialCardThirteen
              animationType="slide-up"
              textboxLayout="split"
              testimonials={t.reviews.items.map(i => ({ ...i, handle: "@guest", id: i.id }))}
              showRating={true}
              useInvertedBackground={false}
              title={t.reviews.title}
              description={t.reviews.description}
            />
        </div>

        <div id="faq" data-section="faq">
            <FaqSplitText
              useInvertedBackground={true}
              faqs={t.faq.items}
              sideTitle={t.faq.sideTitle}
              sideDescription={t.faq.sideDescription}
              faqsAnimation="blur-reveal"
            />
        </div>

        <div id="contact" data-section="contact">
            <ContactCenter
              tag={t.contact.tag}
              title={t.contact.title}
              description={t.contact.description}
              buttonText={t.contact.button}
              background={{ variant: "radial-gradient" }}
              useInvertedBackground={false}
            />
        </div>

        <div id="footer" data-section="footer">
            <FooterLogoEmphasis
              columns={[
                { items: [{ label: lang === 'en' ? "Home" : "الرئيسية", href: "#hero" }, { label: lang === 'en' ? "Contact" : "اتصل بنا", href: "#contact" }] }
              ]}
              logoText="Wahat Almasiaf"
            />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}