// Company quick links. Update this list when approved resources change.
const companyLinks = [
  {
    id: "technical-daily-delivery-update",
    name: "Technical Team Daily Delivery Update",
    bn: "টেকনিক্যাল টিমের দৈনিক ডেলিভারি আপডেট",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeQE4Bg9D-xRGX707UWGNl3ZmwqH7Rzd8XnIoRLNFh6Kl8SCw/viewform",
    category: "Technical Department",
    bnCategory: "টেকনিক্যাল বিভাগ",
    description: "Submit the technical team's daily delivery update.",
    bnDescription: "টেকনিক্যাল টিমের দৈনিক ডেলিভারি আপডেট জমা দিন।",
    icon: "TD"
  },
  {
    id: "technical-delivery-report-check",
    name: "Technical Team Daily Delivery Report Checking",
    bn: "টেকনিক্যাল টিমের দৈনিক ডেলিভারি রিপোর্ট যাচাই",
    url: "https://docs.google.com/spreadsheets/d/1XdjkOP3d2tH7u95hPMGLCEh_0tQroPUQdaA_rqnQBH8/edit?gid=0#gid=0",
    category: "Technical Department",
    bnCategory: "টেকনিক্যাল বিভাগ",
    description: "Review and check the daily delivery report.",
    bnDescription: "দৈনিক ডেলিভারি রিপোর্ট পর্যালোচনা ও যাচাই করুন।",
    icon: "TR"
  },
  {
    id: "project-site-survey",
    name: "Project / Site Survey Report for SO and TO",
    bn: "SO ও TO-এর জন্য প্রজেক্ট / সাইট সার্ভে রিপোর্ট",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeYTLCiOozXNAllqLRWXV4RtaUAS2npJotl7AGiuHM8BHW4kQ/viewform",
    category: "Sales & Technical Departments",
    bnCategory: "সেলস ও টেকনিক্যাল বিভাগ",
    description: "Submit a project or site survey report for SO and TO.",
    bnDescription: "SO ও TO-এর জন্য প্রজেক্ট বা সাইট সার্ভে রিপোর্ট জমা দিন।",
    icon: "SR"
  },
  {
    id: "new-retail-opening",
    name: "New Retail Opening Request",
    bn: "নতুন রিটেইল আউটলেট খোলার অনুরোধ",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSduB7XiB0GFAGYuwY4J6f6KtKSjDkgNeXJob7Cy2DYn19KVBw/viewform",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Request the opening of a new retail outlet.",
    bnDescription: "নতুন রিটেইল আউটলেট খোলার অনুরোধ জমা দিন।",
    icon: "NR"
  },
  {
    id: "oneapp-missing-retail-update",
    name: "Oneapp Missing Retail Update",
    bn: "Oneapp-এ অনুপস্থিত রিটেইল তথ্য আপডেট",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSe0vB4s9xGYch5R598TCoGipkDVcvUHYNKJQDitvzzv1C-ZFw/viewform",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Update missing retail information in Oneapp.",
    bnDescription: "Oneapp-এ অনুপস্থিত রিটেইল তথ্য আপডেট করুন।",
    icon: "OU"
  },
  {
    id: "dealer-tag-change",
    name: "Dealer Tag Changing Form",
    bn: "ডিলার ট্যাগ পরিবর্তন ফর্ম",
    url: "https://forms.gle/c79QDdyesavYE88f8",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Submit a request to change a dealer tag.",
    bnDescription: "ডিলার ট্যাগ পরিবর্তনের অনুরোধ জমা দিন।",
    icon: "DT"
  },
  {
    id: "sales-officer-day-end-report",
    name: "Sales Officer Day End Report",
    bn: "সেলস অফিসারের দিনশেষ রিপোর্ট",
    url: "https://forms.gle/13puToc6eE4PRGoK9",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Submit the sales officer's day-end report.",
    bnDescription: "সেলস অফিসারের দিনশেষ রিপোর্ট জমা দিন।",
    icon: "DR"
  },
  {
    id: "oneapp-download",
    name: "Oneapp Download Link",
    bn: "Oneapp ডাউনলোড লিংক",
    url: "https://play.google.com/store/apps/details?id=com.oneapp.lhblonline&pcampaignid=web_share",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Download Oneapp from Google Play.",
    bnDescription: "Google Play থেকে Oneapp ডাউনলোড করুন।",
    icon: "1A"
  },
  {
    id: "image-to-pdf-ilovepdf",
    name: "Image to PDF Converter — iLovePDF",
    bn: "ছবি থেকে PDF কনভার্টার — iLovePDF",
    url: "https://www.ilovepdf.com/jpg_to_pdf",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Convert JPG images into a PDF online.",
    bnDescription: "অনলাইনে JPG ছবি PDF-এ রূপান্তর করুন।",
    icon: "PDF"
  },
  {
    id: "image-to-pdf-camscanner",
    name: "Image to PDF Converter — CamScanner",
    bn: "ছবি থেকে PDF কনভার্টার — CamScanner",
    url: "https://play.google.com/store/apps/details?id=com.intsig.camscanner&pcampaignid=web_share",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Get CamScanner for scanning and PDF creation.",
    bnDescription: "স্ক্যান ও PDF তৈরির জন্য CamScanner নিন।",
    icon: "CS"
  },
  {
    id: "excel-sheet-editor",
    name: "Excel Sheet Editor — WPS Office",
    bn: "এক্সেল শিট এডিটর — WPS Office",
    url: "https://play.google.com/store/apps/details?id=cn.wps.moffice_eng&pcampaignid=web_share",
    category: "Sales Department",
    bnCategory: "সেলস বিভাগ",
    description: "Download WPS Office to view and edit spreadsheets.",
    bnDescription: "স্প্রেডশিট দেখা ও সম্পাদনার জন্য WPS Office ডাউনলোড করুন।",
    icon: "XL"
  }
];
