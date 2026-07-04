"use client";

import React from "react";
import { Mail } from "lucide-react";

interface CTAButton {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  isExternal: boolean;
  ariaLabel: string;
  tooltip: string;
}

// Custom brand SVGs for pixel-perfect monochromatic look
const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.43c-1.14 0-2.06-.92-2.06-2.06 0-1.14.92-2.06 2.06-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.06-2.06 2.06zm15.11 13.02h-3.56v-5.6c0-1.34-.03-3.05-1.86-3.05-1.86 0-2.14 1.45-2.14 2.95v5.7H9.33V9h3.42v1.56h.05c.48-.9 1.64-1.86 3.39-1.86 3.63 0 4.3 2.39 4.3 5.5v6.25z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const ZaloIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" />
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
    name: "Facebook",
    icon: FacebookIcon,
    href: "https://www.facebook.com/thanhtuann.rb",
    isExternal: true,
    ariaLabel: "Follow Dang Thanh Tuan on Facebook",
    tooltip: "Facebook",
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
    name: "Gmail",
    icon: Mail,
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=dangtuann.dev@gmail.com",
    isExternal: true,
    ariaLabel: "Send an email to Dang Thanh Tuan via Gmail",
    tooltip: "Email",
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
    <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-8 max-w-sm sm:max-w-none">
      {buttons.map((btn) => {
        const IconComponent = btn.icon;
        
        return (
          <a
            key={btn.name}
            href={btn.href}
            target={btn.isExternal ? "_blank" : undefined}
            rel={btn.isExternal ? "noopener noreferrer" : undefined}
            aria-label={btn.ariaLabel}
            className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-transparent hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-400 hover:scale-105 active:scale-95 transition-all duration-200 ease-out shadow-sm hover:shadow-md"
          >
            {/* Inner Icon */}
            <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-200 ease-out" />
            
            {/* Minimalist tooltip */}
            <span className="pointer-events-none absolute -bottom-10 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 ease-out px-2.5 py-1 rounded text-xs font-mono tracking-wider text-white bg-black dark:text-black dark:bg-white border border-neutral-800 dark:border-neutral-200 z-20 whitespace-nowrap shadow-sm">
              {btn.tooltip}
            </span>
          </a>
        );
      })}
    </div>
  );
}
