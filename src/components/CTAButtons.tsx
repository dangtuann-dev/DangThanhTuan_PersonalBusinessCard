"use client";

import React from "react";

interface CTAButton {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  isExternal: boolean;
  ariaLabel: string;
  tooltip: string;
}

// Brand SVG Icons
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.297 1.636.499 2.913.558C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.297-.765.499-1.636.558-2.913.056-1.28.071-1.687.071-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.221.96.484 1.382.905.42.421.683.82.905 1.382.166.422.36 1.057.415 2.227.054 1.265.07 1.648.07 4.85s-.016 3.585-.071 4.85c-.055 1.17-.249 1.805-.415 2.227-.221.562-.484.96-.905 1.382-.421.42-.82.683-1.382.905-.422.166-1.057.36-2.227.415-1.265.054-1.648.07-4.85.07-3.203 0-3.585-.016-4.85-.071-1.17-.055-1.805-.249-2.227-.415-.562-.221-.96-.484-1.382-.905-.42-.421-.683-.82-.905-1.382-.166-.422-.36-1.057-.415-2.227-.054-1.265-.07-1.648-.07-4.85s.016-3.585.071-4.85c.055-1.17.249-1.805.415-2.227.221-.562.484-.96.905-1.382.421-.42.82-.683 1.382-.905.422-.166 1.057-.36 2.227-.415 1.265-.054 1.648-.07 4.85-.07zM12 5.775a6.225 6.225 0 1 0 0 12.45 6.225 6.225 0 0 0 0-12.45zm0 2.16a4.065 4.065 0 1 1 0 8.13 4.065 4.065 0 0 1 0-8.13zm5.06-4.52a1.455 1.455 0 1 0 0 2.91 1.455 1.455 0 0 0 0-2.91z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ZaloIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
  </svg>
);

const GmailIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
  </svg>
);

const buttons: CTAButton[] = [
  {
    name: "LinkedIn",
    icon: LinkedInIcon,
    href: "https://www.linkedin.com/in/dang-thanh-tuan-9b58563a9/",
    isExternal: true,
    ariaLabel: "Connect with Dang Thanh Tuan on LinkedIn",
    tooltip: "LinkedIn",
  },
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    href: "https://wa.me/84908779590",
    isExternal: true,
    ariaLabel: "Chat with Dang Thanh Tuan on WhatsApp",
    tooltip: "WhatsApp",
  },
  {
    name: "Email",
    icon: GmailIcon,
    href: "mailto:dangtuann.dev@gmail.com",
    isExternal: true,
    ariaLabel: "Send an email to Dang Thanh Tuan",
    tooltip: "Email",
  },
  {
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/thanhtuann.rb",
    isExternal: true,
    ariaLabel: "Follow Dang Thanh Tuan on Facebook",
    tooltip: "Facebook",
  },
  {
    name: "Instagram",
    icon: InstagramIcon,
    href: "https://www.instagram.com/tunatheavanti/",
    isExternal: true,
    ariaLabel: "Follow Dang Thanh Tuan on Instagram",
    tooltip: "Instagram",
  },
  {
    name: "Zalo",
    icon: ZaloIcon,
    href: "https://zalo.me/84908779590",
    isExternal: true,
    ariaLabel: "Chat with Dang Thanh Tuan on Zalo",
    tooltip: "Zalo",
  },
];

export default function CTAButtons() {
  return (
    <nav aria-label="Social profiles" className="w-full mt-8 max-w-[270px] sm:max-w-[320px] mx-auto">
      <div className="grid grid-cols-3 gap-x-3 gap-y-6 sm:gap-x-5 sm:gap-y-8 justify-items-center">
        {buttons.map((btn) => {
          const IconComponent = btn.icon;

          return (
            <a
              key={btn.name}
              href={btn.href}
              target={btn.isExternal ? "_blank" : undefined}
              rel={btn.isExternal ? "noopener noreferrer" : undefined}
              aria-label={btn.ariaLabel}
              className="group flex flex-col items-center justify-start w-[72px] sm:w-[84px] focus:outline-none"
            >
              {/* Circular Icon Container */}
              <div className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-transparent transition-all duration-300 ease-out shadow-sm group-hover:shadow-md group-hover:scale-105 group-hover:border-neutral-400 dark:group-hover:border-neutral-500 group-hover:bg-neutral-100 dark:group-hover:bg-neutral-900 group-hover:text-black dark:group-hover:text-white group-focus:ring-2 group-focus:ring-neutral-400 dark:group-focus:ring-neutral-600 group-active:scale-95">
                <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ease-out" />
              </div>
              {/* Label */}
              <span className="mt-2.5 text-[10px] sm:text-xs font-mono font-medium tracking-wider text-neutral-500 dark:text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors duration-300 uppercase text-center truncate w-full px-1">
                {btn.tooltip}
              </span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
