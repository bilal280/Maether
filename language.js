// Language Management System
const translations = {
    ar: {
        // Navigation
        home: "الرئيسية",
        rooms: "أنواع الغرف",
        bookNow: "احجز الآن",
        program: "البرنامج",
        sheikh: "الشيخ المرافق",
        
        // Hero Section
        heroTitle: "عمرة الإرث النبوي 37",
        heroSubtitle: "من الديار التركية: 7 ليالٍ من 16 إلى 23 أيلول",
        heroDescription: "انضم إلينا في رحلة روحانية مميزة إلى الأراضي المقدسة مع الشيخ جهاد الكالوتي. رحلة شاملة تتضمن الإقامة في فنادق 4 نجوم، زيارات المآثر النبوية، وبرامج منوعة.",
        bookingButton: "اختر غرفتك",
        
        // Room Types
        roomTypesTitle: "أنواع الغرف المتاحة",
        roomTypesSubtitle: "اختر نوع الغرفة المناسب لك من بين خياراتنا المتنوعة في فنادق 4 نجوم مع جميع وسائل الراحة",
        
        // Room Details
        quadRoom: "الغرفة الرباعية",
        quadRoomDesc: "4 أشخاص في الغرفة",
        quadRoomPrice: "1050 دولار للشخص الواحد",
        
        tripleRoom: "الغرفة الثلاثية",
        tripleRoomDesc: "3 أشخاص في الغرفة",
        tripleRoomPrice: "1075 دولار للشخص الواحد",
        
        doubleRoom: "الغرفة الثنائية",
        doubleRoomDesc: "شخصان في الغرفة",
        doubleRoomPrice: "1100 دولار للشخص الواحد",
        
        selectRoom: "اختيار هذه الغرفة",
        selectRoomType: "اختر نوع الغرفة",
        selectNumberOfPeople: "اختر عدد الأشخاص",
        
        // Sheikh Section
        sheikhTitle: "الشيخ المرافق",
        sheikhSubtitle: "مدير معهد المعارج للدراسات الشرعية",
        sheikhName: "الدكتور جهاد الكالوتي",
        sheikhDescription: "دكتوراة في الفقه وأصوله",
        sheikhDescription2: "له العديد من المؤلفات والكتب",
        sheikhDescription3: "صاحب الصوت المميز والجميل في القصائد والأناشيد",
        
        // Program Section
        programTitle: "ما يشمله العرض",
        programSubtitle: "رحلة شاملة ومتكاملة تضمن لك تجربة روحانية مميزة بأعلى مستويات الراحة والخدمة",
        
        // Program Items
        flights: "الطيران والتأشيرة",
        flightsDesc: "تذاكر الطيران ذهاباً وإياباً + التأشيرة",
        accommodation: "الإقامة",
        accommodationDesc: "فنادق 4 نجوم مع جميع وسائل الراحة",
        meals: "الوجبات",
        mealsDesc: "وجبة الفطور يومياً",
        visits: "الزيارات",
        visitsDesc: "زيارات المآثر النبوية والأماكن المقدسة",
        transport: "التنقلات",
        transportDesc: "جميع التنقلات بحافلات مكيفة ومريحة",
        programs: "البرامج",
        programsDesc: "برامج منوعة وأنشطة ثقافية ودينية",
        info:"المعلومات الشخصية ",
        // Previous Trips
        previousTripsTitle: "من رحلاتنا السابقة",
        previousTripsSubtitle: "لقطات مميزة من رحلات العمرة السابقة التي نظمتها شركة ماثر",
        
        // Booking Form
        bookingFormTitle: "احجز مكانك الآن",
        bookingFormSubtitle: "املأ بياناتك لتأكيد حجزك في عمرة الإرث النبوي",
        fullName: "الاسم الكامل",
        email: "البريد الإلكتروني",
        country: "البلد",
        nationality: "الجنسية",
        selectNationality: "اختر الجنسية",
        phone: "رقم الهاتف",
        roomType: "نوع الغرفة",
        numberOfPeople: "عدد الأشخاص",
        specialRequests: "طلبات خاصة (اختياري)",
        submitBooking: "تأكيد الحجز",
        submitting: "جاري الإرسال...",
        errorMessage: "حدث خطأ أثناء إرسال الطلب. يرجى المحاولة مرة أخرى.",
        
        // Visa Note
        visaNote: "ملاحظة: بعض الجنسيات رسوم تأشيرتها أعلى من الرسوم العادية، وبالتالي يكون هناك زيادة على السعر المعلن.",
        
        // Footer
        footerCompany: "شركة ماثر للسياحة الدينية",
        footerText: "نقدم أفضل الخدمات السياحية الدينية مع الحرص على الجودة والراحة والأمان.",
        contactUs: "تواصل معنا",
        tripDetails: "تفاصيل الرحلة",
        tripDate: "16 - 23 أيلول 2025",
        tripName: "عمرة الإرث النبوي 37",
        tripSheikh: "مع الشيخ جهاد الكالوتي",
        tripHotels: "⭐ فنادق 4 نجوم",
        tripFrom: "✈️ من إسطنبول",
        tripNote: "رحلة روحانية مباركة في خدمة ضيوف الرحمن",
        copyright: "© 2025 شركة ماثر للسياحة الدينية – جميع الحقوق محفوظة",
        
        // Success Page
        successTitle: "تم إرسال طلبك بنجاح!",
        successMessage: "شكرًا لتواصلك معنا، سنتواصل معك قريبًا.",
        backToHome: "العودة إلى الرئيسية",
        
        // Language
        language: "اللغة",
        arabic: "العربية",
        english: "English",
        turkish: "Türkçe"
    },
    
    en: {
        // Navigation
        home: "Home",
        rooms: "Room Types",
        bookNow: "Book Now",
        program: "Program",
        sheikh: "Accompanying Sheikh",
        
        // Hero Section
        heroTitle: "Umrah of Prophetic Heritage 37",
        heroSubtitle: "From the Turkish lands: 7 nights, September 16–23",
        heroDescription: "Join us on a unique spiritual journey to the sacred lands with Sheikh Jihad Al-Kalouti. This blessed journey includes accommodation in 4‑star hotels, visits to prophetic landmarks, and diverse spiritual programs.",
        bookingButton: "Choose your room",
        
        // Room Types
        roomTypesTitle: "Available Room Types",
        roomTypesSubtitle: "Choose the room type that suits you from our variety of options in 4‑star hotels with all amenities.",
        
        // Room Details
        quadRoom: "Quadruple Room",
        quadRoomDesc: "4 people in the room",
        quadRoomPrice: "$1050 per person",
        
        tripleRoom: "Triple Room",
        tripleRoomDesc: "3 people in the room",
        tripleRoomPrice: "$1075 per person",
        
        doubleRoom: "Double Room",
        doubleRoomDesc: "2 people in the room",
        doubleRoomPrice: "$1100 per person",
        
        selectRoom: "Select This Room",
        selectRoomType: "Choose Room Type",
        selectNumberOfPeople: "Select number of people",
        
        // Sheikh Section
        sheikhTitle: "Dr. Jihad Al‑Kalouti",
        sheikhSubtitle: "Director of Al‑Ma'arij Institute for Islamic Studies",
        sheikhName: "Dr. Jihad Al‑Kalouti",
        sheikhDescription: "PhD in Jurisprudence and its Principles ",
        sheikhDescription2: "Author of numerous works and books",
        sheikhDescription3: "Renowned for his distinctive and beautiful voice in poems and nasheeds",
        // Program Section
        programTitle: "The package includes",
        programSubtitle: "A comprehensive and all‑inclusive journey that guarantees you a unique spiritual experience with the highest levels of comfort and service.",
        
        // Program Items
        flights: "Flights and Visa",
        flightsDesc: "Round‑trip flight tickets + visa",
        accommodation: "Accommodation",
        accommodationDesc: "4‑star hotels with all amenities",
        meals: "Breakfast",
        mealsDesc: "Breakfast served daily",
        visits: "Tours",
        visitsDesc: "Tours of the Prophet's landmarks and holy sites",
        transport: "Transfers",
        transportDesc: "All transfers provided by modern, air‑conditioned buses",
        programs: "Programs & Activities",
        programsDesc: "Varied programs including cultural and religious activities",
         info:"Personal Information",
        // Previous Trips
        previousTripsTitle: "Our Previous Trips",
        previousTripsSubtitle: "Highlights from past Umrah journeys organized by Ma'athir Company",
        
        // Booking Form
        bookingFormTitle: "Book Your Spot Now",
        bookingFormSubtitle: "Fill in your details to confirm your booking for the \"Prophetic Heritage Umrah\"",
        fullName: "Full Name",
        email: "Email",
        country: "Country",
        nationality: "Nationality",
        selectNationality: "Select Nationality",
        phone: "Phone",
        roomType: "Room Type",
        numberOfPeople: "Number of People",
        specialRequests: "Special Requests (Optional)",
        submitBooking: "Booking Confirmation",
        submitting: "Sending...",
        errorMessage: "An error occurred while sending the request. Please try again.",
        
        // Visa Note
        visaNote: "Note: Some nationalities have higher visa fees than standard rates, which may result in additional charges to the advertised price.",
        
        // Footer
        footerCompany: "Ma'athir Religious Tourism Company",
        footerText: "Ma'athir Religious Tourism Company offers the best religious tourism services, ensuring quality, comfort, and safety.",
        contactUs: "Contact Us",
        tripDetails: "Trip Details",
        tripDate: "16 – 23 September 2025",
        tripName: "Umrah of the Prophetic Heritage 37",
        tripSheikh: "With Sheikh Jihad Al‑Kalouti",
        tripHotels: "⭐️ 4‑star hotels",
        tripFrom: "✈️ From Istanbul",
        tripNote: "A blessed spiritual journey in service of the guests of Ar‑Rahman.",
        copyright: "© 2025 Ma'athir Religious Tourism Company - All rights reserved",
        
        // Success Page
        successTitle: "Your request has been sent successfully!",
        successMessage: "Thank you for contacting us, we will get in touch with you soon.",
        backToHome: "Back to Home",
        
        // Language
        language: "Language",
        arabic: "العربية",
        english: "English",
        turkish: "Türkçe"
    },
    
    tr: {
        // Navigation
        home: "İlk Sayfa",
        rooms: "Oda Türleri",
        bookNow: "Hemen Rezervasyon",
        program: "Program",
        sheikh: "Eşlik Eden Şeyh",
        
        // Hero Section
        heroTitle: "Nebevi Miras Umresi 37",
        heroSubtitle: "Türkiye'den: 16‑23 Eylül arası 7 gece",
        heroDescription: "Şeyh Cihad al‑Kalouti ile kutsal topraklara özel bir manevî yolculuğa katılın. 4 yıldızlı otellerde konaklama, Nebevî eserlerin ziyareti ve çeşitli programlarla kapsamlı bir yolculuk sizi bekliyor.",
        bookingButton: "Odanızı seçin",
        
        // Room Types
        roomTypesTitle: "Mevcut Oda Türleri",
        roomTypesSubtitle: "4 yıldızlı otellerde tüm imkânlarla sunduğumuz seçenekler arasından size uygun oda türünü seçin",
        
        // Room Details
        quadRoom: "Dörtlü Oda",
        quadRoomDesc: "4 kişilik oda",
        quadRoomPrice: "Kişi başı $1050",
        
        tripleRoom: "Üçlü Oda",
        tripleRoomDesc: "3 kişilik oda",
        tripleRoomPrice: "Kişi başı $1075",
        
        doubleRoom: "İkili Oda",
        doubleRoomDesc: "2 kişilik oda",
        doubleRoomPrice: "Kişi başı $1100",
        
        selectRoom: "Bu Odayı Seç",
        selectRoomType: "Oda Türünüzü Seçin",
        selectNumberOfPeople: "Kişi sayısını seçin",
        
        // Sheikh Section
        sheikhTitle: "Dr. Cihad al‑Kalouti",
        sheikhSubtitle: "Meâric İslami İlimler Enstitüsü Müdürü",
        sheikhName: "Dr. Cihad al‑Kalouti",
        sheikhDescription: "Fıkıh ve Usûlünde Doktora sahibi",
        sheikhDescription2: "Çok sayıda eseri ve kitabı bulunmaktadır",
        sheikhDescription3: "Kasideler ve ilahilerde seçkin bir sese sahiptir",
        
        // Program Section
        programTitle: "Pakete Dahil Olanlar",
        programSubtitle: "Konfor ve hizmetin en üst seviyesinde size özel manevî bir deneyim sunan kapsamlı yolculuk",
        
        // Program Items
        flights: "Uçuş ve Vize",
        flightsDesc: "Gidiş‑dönüş uçak bileti + vize",
        accommodation: "Konaklama",
        accommodationDesc: "4 yıldızlı otellerde tüm imkânlarla konaklama",
        meals: "Yemekler",
        mealsDesc: "Günlük kahvaltı",
        visits: "Ziyaretler",
        visitsDesc: "Nebevi eserler ve kutsal mekânlar ziyareti",
        transport: "Ulaşım",
        transportDesc: "Tüm transferler klimalı ve konforlu otobüslerle",
        programs: "Programlar",
        programsDesc: "Çeşitli kültürel ve dinî etkinlikler",
        
        // Previous Trips
        previousTripsTitle: "Önceki Turlarımızdan",
        previousTripsSubtitle: "Meâsir firmasının düzenlediği önceki umre yolculuklarından özel kareler",
        info:"Kişisel Bilgiler",

        // Booking Form
        bookingFormTitle: "Yerini Hemen Ayırt",
        bookingFormSubtitle: "Nebevi Miras Umresi rezervasyonunuzu onaylamak için bilgilerinizi doldurun",
        fullName: "Ad‑Soyad",
        email: "E‑posta Adresi",
        country: "Ülke",
        nationality: "Uyruk",
        selectNationality: "Uyruk Seçin",
        phone: "Telefon Numarası",
        roomType: "Oda Türü",
        numberOfPeople: "Kişi Sayısı",
        specialRequests: "Özel Talepler (Opsiyonel)",
        submitBooking: "Rezervasyonu Onayla",
        submitting: "Gönderiliyor...",
        errorMessage: "İstek gönderilirken bir hata oluştu. Lütfen tekrar deneyin.",
        
        // Visa Note
        visaNote: "Not: Bazı uyruklarda vize ücretleri standart ücretlerden daha yüksektir, bu nedenle ilan edilen fiyata ek ücret uygulanabilir.",
        
        // Footer
        footerCompany: "Meâsir Dini Turizm Şirketi",
        footerText: "Kalite, rahatlık ve güveni gözeterek en iyi dinî turizm hizmetlerini sunuyoruz.",
        contactUs: "Bize Ulaşın",
        tripDetails: "Seyahat Detayları",
        tripDate: "16‑23 Eylül 2025",
        tripName: "Nebevi Miras Umresi 37",
        tripSheikh: "Şeyh Cihad al‑Kalouti Eşliğinde",
        tripHotels: "⭐ 4 Yıldızlı Oteller",
        tripFrom: "✈️ İstanbul Çıkışlı",
        tripNote: "Rahman'ın misafirlerine hizmet eden mübarek bir ruhani yolculuk",
        copyright: "© 2025 Meâsir Dini Turizm Şirketi – Tüm Hakları Saklıdır",
        
        // Success Page
        successTitle: "Talebiniz başarıyla gönderildi!",
        successMessage: "Bizimle iletişime geçtiğiniz için teşekkürler, yakında sizinle iletişime geçeceğiz.",
        backToHome: "Ana Sayfaya Dön",
        
        // Language
        language: "Dil",
        arabic: "العربية",
        english: "English",
        turkish: "Türkçe"
    }
};

// Current language state
let currentLanguage = localStorage.getItem('language') || 'ar';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', function() {
    setLanguage(currentLanguage);
});

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update HTML attributes
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
    
    // Update all translatable elements
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.type !== 'submit') {
                element.placeholder = translations[lang][key];
            } else if (element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Update select options
    updateSelectOptions(lang);
    
    // Update language selectors
    updateLanguageSelectors(lang);
    
    // Update page title
    updatePageTitle(lang);
    
    // Update fonts based on language
    updateFonts(lang);
    
    // Update layout direction
    updateLayoutDirection(lang);
}

// Update select options
function updateSelectOptions(lang) {
    const roomTypeSelect = document.getElementById('roomType');
    const numberOfPeopleSelect = document.getElementById('numberOfPeople');
    const nationalitySelect = document.querySelector('select[name="nationality"]');
    
    if (roomTypeSelect) {
        roomTypeSelect.innerHTML = `
            <option value="">${translations[lang].selectRoomType}</option>
            <option value="quad">${translations[lang].quadRoom}</option>
            <option value="triple">${translations[lang].tripleRoom}</option>
            <option value="double">${translations[lang].doubleRoom}</option>
        `;
    }
    
    if (numberOfPeopleSelect) {
        numberOfPeopleSelect.innerHTML = `
            <option value="">${translations[lang].selectNumberOfPeople}</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
        `;
    }
    
    if (nationalitySelect) {
        const currentValue = nationalitySelect.value;
        nationalitySelect.innerHTML = `
            <option value="">${translations[lang].selectNationality}</option>
            <option value="تركية">تركية</option>
            <option value="سعودية">سعودية</option>
            <option value="إماراتية">إماراتية</option>
            <option value="كويتية">كويتية</option>
            <option value="قطرية">قطرية</option>
            <option value="بحرينية">بحرينية</option>
            <option value="عمانية">عمانية</option>
            <option value="أردنية">أردنية</option>
            <option value="لبنانية">لبنانية</option>
            <option value="سورية">سورية</option>
            <option value="عراقية">عراقية</option>
            <option value="مصرية">مصرية</option>
            <option value="مغربية">مغربية</option>
            <option value="جزائرية">جزائرية</option>
            <option value="تونسية">تونسية</option>
            <option value="ليبية">ليبية</option>
            <option value="سودانية">سودانية</option>
            <option value="فلسطينية">فلسطينية</option>
            <option value="أخرى">أخرى</option>
        `;
        nationalitySelect.value = currentValue;
    }
}

// Update language selectors
function updateLanguageSelectors(lang) {
    const languageSelector = document.getElementById('languageSelector');
    const mobileLanguageSelector = document.getElementById('mobileLanguageSelector');
    
    if (languageSelector) {
        languageSelector.value = lang;
    }
    
    if (mobileLanguageSelector) {
        mobileLanguageSelector.value = lang;
    }
}

// Update page title
function updatePageTitle(lang) {
    if (document.title.includes('تم النجاح') || document.title.includes('Success') || document.title.includes('Başarılı')) {
        if (lang === 'ar') {
            document.title = 'تم النجاح - شركة ماثر';
        } else if (lang === 'en') {
            document.title = 'Success - Mather Company';
        } else if (lang === 'tr') {
            document.title = 'Başarılı - Meâsir Şirketi';
        }
    } else {
        if (lang === 'ar') {
            document.title = 'عمرة الإرث النبوي 37 - شركة ماثر للسياحة الدينية';
        } else if (lang === 'en') {
            document.title = 'Umrah of Prophetic Heritage 37 - Mather Religious Tourism Company';
        } else if (lang === 'tr') {
            document.title = 'Nebevi Miras Umresi 37 - Meâsir Dini Turizm Şirketi';
        }
    }
}

// Update fonts based on language
function updateFonts(lang) {
    const body = document.body;
    if (lang === 'ar') {
        body.style.fontFamily = "'Cairo', sans-serif";
    } else {
        body.style.fontFamily = "'Inter', 'Arial', sans-serif";
    }
}

// Update layout direction
function updateLayoutDirection(lang) {
    const isRTL = lang === 'ar';
    
    // Update navigation layout
    const navLinks = document.querySelectorAll('.nav-links');
    navLinks.forEach(nav => {
        if (isRTL) {
            nav.classList.add('flex-row-reverse');
            nav.classList.remove('flex-row');
        } else {
            nav.classList.add('flex-row');
            nav.classList.remove('flex-row-reverse');
        }
    });
    
    // Update text alignment
    const textElements = document.querySelectorAll('.text-right, .text-left, .text-center');
    textElements.forEach(element => {
        if (element.classList.contains('text-center')) return; // Keep center alignment
        
        if (isRTL) {
            element.classList.add('text-right');
            element.classList.remove('text-left');
        } else {
            element.classList.add('text-left');
            element.classList.remove('text-right');
        }
    });
}

// Language selector change handler
function onLanguageChange(select) {
    setLanguage(select.value);
    
    // Update both selectors
    const languageSelector = document.getElementById('languageSelector');
    const mobileLanguageSelector = document.getElementById('mobileLanguageSelector');
    
    if (languageSelector && languageSelector !== select) {
        languageSelector.value = select.value;
    }
    
    if (mobileLanguageSelector && mobileLanguageSelector !== select) {
        mobileLanguageSelector.value = select.value;
    }
}

// Get current language
function getCurrentLanguage() {
    return currentLanguage;
}

// Get translation
function t(key) {
    return translations[currentLanguage][key] || key;
}