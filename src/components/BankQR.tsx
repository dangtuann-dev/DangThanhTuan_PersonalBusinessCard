"use client";

import React, { useState } from "react";
import Image from "next/image";
import { QrCode, ChevronDown, Copy, Check, ExternalLink, CreditCard, Download } from "lucide-react";

const supportedApps = [
  { id: "vcb", name: "Vietcombank" },
  { id: "tcb", name: "Techcombank" },
  { id: "mb", name: "MB Bank" },
  { id: "icb", name: "VietinBank" },
  { id: "bidv", name: "BIDV" },
  { id: "vba", name: "Agribank" },
  { id: "vpb", name: "VPBank" },
  { id: "acb", name: "ACB" },
  { id: "tpb", name: "TPBank" },
  { id: "vib-2", name: "VIB" },
  { id: "shb", name: "SHB" },
  { id: "timo", name: "Timo" },
  { id: "cake", name: "Cake by VPBank" },
];

export default function BankQR() {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [selectedApp, setSelectedApp] = useState("vcb");

  const bankDetails = {
    bankName: "VietinBank",
    bankFullName: "Vietnam Joint Stock Company for Industry and Trade",
    accountNumber: "100875049556",
    accountName: "DANG THANH TUAN",
  };

  const getDeepLink = () => {
    return `https://dl.vietqr.io/pay?app=${selectedApp}&ba=${bankDetails.accountNumber}@icb&bn=${encodeURIComponent(bankDetails.accountName)}`;
  };

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent toggling the accordion when copying
    try {
      await navigator.clipboard.writeText(bankDetails.accountNumber);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = "/bank-qr-clean.png";
    link.download = "VietinBank_QR_DangThanhTuan.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full mt-6 px-4 sm:px-0 animate-fade-in-up animation-delay-500">
      {/* Main Accordion Card Container */}
      <div 
        className={`w-full rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/40 dark:bg-black/40 backdrop-blur-md transition-all duration-300 overflow-hidden shadow-sm hover:shadow-md ${
          isOpen ? "border-neutral-300 dark:border-neutral-700 bg-white/60 dark:bg-neutral-900/40" : ""
        }`}
      >
        {/* Accordion Header */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-5 py-4 flex items-center justify-between text-left focus:outline-none group"
          aria-expanded={isOpen}
          aria-label="Toggle bank account transfer details"
        >
          <div className="flex items-center gap-3.5">
            {/* Elegant Icon Container */}
            <div className="p-2 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-white/60 dark:bg-black/60 group-hover:scale-105 transition-transform duration-300">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-semibold text-neutral-800 dark:text-neutral-200">
                Bank Transfer
              </h2>
              <p className="text-[11px] sm:text-xs text-neutral-400 dark:text-neutral-500 font-medium">
                Scan QR code or open banking app
              </p>
            </div>
          </div>
          
          {/* Chevron expand/collapse indicator */}
          <ChevronDown 
            className={`w-4 h-4 text-neutral-400 dark:text-neutral-500 transition-transform duration-300 ease-out ${
              isOpen ? "rotate-180 text-neutral-800 dark:text-neutral-200" : "group-hover:translate-y-0.5"
            }`} 
          />
        </button>

        {/* Smooth Expandable Content using Modern CSS Grid Transition */}
        <div 
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${
            isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="overflow-hidden">
            {/* Divider */}
            <div className="mx-5 border-t border-neutral-200 dark:border-neutral-800" />
            
            {/* Card Content body */}
            <div className="p-5 flex flex-col items-center gap-6">
              
              {/* QR Image Container with scanner overlay and styling */}
              <a 
                href={getDeepLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group/qr relative flex flex-col items-center justify-center p-3.5 bg-white rounded-2xl shadow-inner border border-neutral-200/80 hover:border-neutral-400 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
                title="Click to open your mobile banking app"
              >
                {/* Visual scanner light line */}
                <div className="absolute inset-x-3.5 h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent opacity-0 group-hover/qr:opacity-100 group-hover/qr:animate-scan z-10 pointer-events-none" />
                
                {/* High contrast QR code image */}
                <div className="relative w-48 h-48 sm:w-52 sm:h-52 bg-white flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src="/bank-qr-clean.svg"
                    alt="VietinBank QR Code Dang Thanh Tuan"
                    fill
                    sizes="(max-width: 640px) 192px, 208px"
                    className="object-contain transition-transform duration-300 group-hover/qr:scale-[1.05]"
                    priority
                  />
                </div>
                
                {/* Micro hover interaction text inside QR */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover/qr:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 rounded-2xl">
                  <ExternalLink className="w-6 h-6 text-white animate-bounce" />
                  <span className="text-xs font-medium text-white px-3 text-center">
                    Open Banking App
                  </span>
                </div>
              </a>

              {/* Informative instructions */}
              <div className="text-neutral-400 dark:text-neutral-500 text-center max-w-[320px] space-y-2">
                <p className="text-[11px] sm:text-xs leading-relaxed">
                  On mobile devices, select your bank below and <span className="font-semibold text-neutral-600 dark:text-neutral-300">tap the QR code</span> to open your app and transfer automatically.
                </p>
                <p className="text-[10px] sm:text-[11px] leading-relaxed italic opacity-85">
                  Note: If your bank app fails to auto-fill details after logging in, please <span className="font-semibold text-neutral-600 dark:text-neutral-300">Save QR Image</span> and scan it from your gallery inside the app.
                </p>
              </div>

              {/* Select Payer's Bank App */}
              <div className="w-full flex flex-col gap-1.5 text-left">
                <label htmlFor="bank-app-select" className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  Select your Bank App
                </label>
                <div className="relative">
                  <select
                    id="bank-app-select"
                    value={selectedApp}
                    onChange={(e) => setSelectedApp(e.target.value)}
                    className="w-full px-4 py-3 pr-10 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-white/50 dark:bg-black/50 hover:border-neutral-400 dark:hover:border-neutral-700 transition-colors focus:outline-none focus:ring-1 focus:ring-sky-500 focus:border-transparent text-xs sm:text-sm font-medium appearance-none cursor-pointer shadow-sm"
                  >
                    {supportedApps.map((app) => (
                      <option key={app.id} value={app.id} className="bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200">
                        {app.name}
                      </option>
                    ))}
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-neutral-400 dark:text-neutral-500">
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Bank Details Table */}
              <div className="w-full flex flex-col gap-3.5 text-left text-xs sm:text-sm font-sans bg-neutral-50 dark:bg-neutral-900/60 p-4 rounded-xl border border-neutral-100 dark:border-neutral-850">
                {/* Bank Name */}
                <div className="flex justify-between items-start border-b border-neutral-200/50 dark:border-neutral-800/50 pb-2.5">
                  <span className="text-neutral-400 dark:text-neutral-500 font-medium">Bank</span>
                  <div className="text-right">
                    <span className="font-bold text-neutral-800 dark:text-neutral-200 block">{bankDetails.bankName}</span>
                    <span className="text-[10px] text-neutral-400 dark:text-neutral-500 block leading-tight max-w-[180px] truncate-2-lines">{bankDetails.bankFullName}</span>
                  </div>
                </div>

                {/* Account Number */}
                <div className="flex justify-between items-center border-b border-neutral-200/50 dark:border-neutral-800/50 pb-2.5">
                  <span className="text-neutral-400 dark:text-neutral-500 font-medium">Account No</span>
                  <button 
                    onClick={handleCopy}
                    className="flex items-center gap-1.5 font-mono font-semibold text-neutral-800 dark:text-neutral-200 hover:text-black dark:hover:text-white bg-neutral-200/50 dark:bg-neutral-800/50 hover:bg-neutral-250 dark:hover:bg-neutral-750 px-2.5 py-1 rounded-lg transition-colors border border-neutral-300/30 group/copy"
                    title="Copy account number"
                  >
                    <span>{bankDetails.accountNumber}</span>
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500 animate-scale-in" />
                    ) : (
                      <Copy className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 group-hover/copy:scale-105 transition-transform" />
                    )}
                  </button>
                </div>

                {/* Beneficiary Name */}
                <div className="flex justify-between items-center">
                  <span className="text-neutral-400 dark:text-neutral-500 font-medium">Beneficiary</span>
                  <span className="font-bold tracking-wide text-neutral-800 dark:text-neutral-200 font-mono">
                    {bankDetails.accountName}
                  </span>
                </div>
              </div>

              {/* Action Buttons Row */}
              <div className="w-full flex flex-col sm:flex-row gap-3">
                {/* Save QR Image Button */}
                <button
                  onClick={handleDownload}
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-white/45 dark:bg-black/40 hover:bg-neutral-150 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-400 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-sm font-medium text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span>Save QR Image</span>
                </button>

                {/* Open Banking App Button */}
                <a
                  href={getDeepLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-neutral-300 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 bg-white/40 dark:bg-black/40 hover:bg-neutral-150 dark:hover:bg-neutral-900 hover:text-black dark:hover:text-white hover:border-neutral-500 dark:hover:border-neutral-400 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 shadow-sm font-medium text-xs sm:text-sm"
                >
                  <CreditCard className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  <span>Open Banking App</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 ml-0.5" />
                </a>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
