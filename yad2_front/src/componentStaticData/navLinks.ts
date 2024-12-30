import { ReactComponent as BuildingIcon } from "../assets/icons/building.svg";
import { ReactComponent as House } from "../assets/icons/house.svg";
import { ReactComponent as Calculator } from "../assets/icons/calculator.svg";
import { ReactComponent as Gavel } from "../assets/icons/gavel.svg";
import { ReactComponent as Car } from "../assets/icons/car.svg";
import { ReactComponent as CarLink } from "../assets/icons/carLink.svg";
const gridNavRows = [4, 9, 8, 10, 7, 10, 11];

export const mainLinks = [
  {
    name: 'נדל"ן',
    href: "/realestate/forsale",
    rows: gridNavRows[0],
    links: [
      {
        href: "/realestate/forsale",
        text: "דירות למכירה",
      },
      {
        href: "/#",
        text: "דירות להשכרה",
      },
      {
        href: "/#",
        text: "נדל״ן מסחרי",
      },
      {
        href: "/#",
        text: "בתים מארחים",
      },
      {
        href: "/#",
        text: "יד1 דירות חדשות",
        icon: BuildingIcon,
      },
      {
        href: "/#",
        text: "כונס נכסים",
        icon: Gavel,
      },
      {
        href: "/#",
        text: "הערכת שווי נכס",
        icon: Calculator,
      },
      {
        href: "/#",
        text: "משרדי תיווך בישראל",
        icon: House,
      },
    ],
  },
  {
    name: "רכב",
    href: "#",
    rows: gridNavRows[1],
    links: [
      {
        href: "/#",
        text: "כל הרכבים",
      },
      {
        href: "/#",
        text: "מסחרי",
      },
      {
        href: "/#",
        text: "ג'יפים",
      },
      {
        href: "/#",
        text: "אופנועים",
      },
      {
        href: "/#",
        text: "קטנועים",
      },
      {
        href: "/#",
        text: "מיוחדים",
      },
      {
        href: "/#",
        text: "אביזרים",
      },
      {
        href: "/#",
        text: "משאיות",
      },
      {
        href: "/#",
        text: "כלי שייט",
      },
      {
        href: "/#",
        text: "קטלוג רכבים",
        icon: Car,
      },
      {
        href: "/#",
        text: "מחירון רכב",
        icon: CarLink,
      },
      {
        href: "/#",
        text: "מימון רכב",
        icon: Calculator,
      },
    ],
  },
  {
    name: "יד שנייה",
    href: "#",
    rows: gridNavRows[2],
    links: [
      {
        href: "/#",
        text: "כל המוצרים",
      },
      {
        href: "/#",
        text: "מוצרי חשמל",
      },
      {
        href: "/#",
        text: "ריהוט",
      },
      {
        href: "/#",
        text: "עסקים למכירה",
      },
      {
        href: "/#",
        text: "ספורט",
      },
      {
        href: "/#",
        text: "סלולרי",
      },
      {
        href: "/#",
        text: "לתינוק ולילד",
      },
      {
        href: "/#",
        text: "הכל בחינם!",
      },
      {
        href: "/#",
        text: "קונסולות משחק",
      },
      {
        href: "/#",
        text: "מחשבים וציוד נלווה",
      },
      {
        href: "/#",
        text: "לגינה",
      },
      {
        href: "/#",
        text: "אופנה וטיפוח",
      },
    ],
  },
  {
    name: "דרושים IL",
    href: "#",
    rows: gridNavRows[3],
    links: [
      {
        href: "/#",
        text: "חיפוש עבודה",
      },
      {
        href: "/#",
        text: "פרסום משרות",
      },
      {
        href: "/#",
        text: "כתיבת קורות חיים",
      },
      {
        href: "/#",
        text: "אודות החברות",
      },
      {
        href: "/#",
        text: "דרושים הייטק",
      },
      {
        href: "/#",
        text: "דרושים סטודנטים",
      },
      {
        href: "/#",
        text: "מגזין הקריירה",
      },
      {
        href: "/#",
        text: "כספים",
      },
      {
        href: "/#",
        text: "מכירות",
      },
      {
        href: "/#",
        text: "שירות לקוחות",
      },
      {
        href: "/#",
        text: "אדמיניסטרציה",
      },
      {
        href: "/#",
        text: "מהנדסים",
      },
      {
        href: "/#",
        text: "תחבורה",
      },
      {
        href: "/#",
        text: "מסעדנות/תיירות",
      },
      {
        href: "/#",
        text: "אבטחה",
      },
      {
        href: "/#",
        text: "בריאות",
      },
      {
        href: "/#",
        text: "בעלי מקצוע",
      },
      {
        href: "/#",
        text: "הדרכה/הוראה",
      },
      {
        href: "/#",
        text: "שיווק",
      },
      {
        href: "/#",
        text: "לתחומים נוספים",
      },
    ],
  },
  {
    name: "עסקים למכירה",
    href: "#",
    rows: gridNavRows[4],
    links: [
      {
        href: "/#",
        text: "בתי קפה ומסעדות",
      },
      {
        href: "/#",
        text: "זכיינות",
      },
      {
        href: "/#",
        text: "קווי חלוקה",
      },
      {
        href: "/#",
        text: "הזדמנויות עסקיות",
      },
      {
        href: "/#",
        text: "מינימרקטים וסופרמרקטים",
      },
      {
        href: "/#",
        text: "קיוסקים ופיצוציות",
      },
      {
        href: "/#",
        text: "לכל העסקים",
      },
    ],
  },
  {
    name: "חיות מחמד",
    href: "#",
    rows: gridNavRows[5],
    links: [
      {
        href: "/#",
        text: "כלבים",
      },
      {
        href: "/#",
        text: "חתולים",
      },
      {
        href: "/#",
        text: "תוכים ובעלי כנף",
      },
      {
        href: "/#",
        text: "דגים",
      },
      {
        href: "/#",
        text: "זוחלים",
      },
      {
        href: "/#",
        text: "מכרסמים",
      },
      {
        href: "/#",
        text: "סוסים",
      },
      {
        href: "/#",
        text: "תרנגולים",
      },
      {
        href: "/#",
        text: "חיות משק",
      },
      {
        href: "/#",
        text: "חמוסים",
      },
    ],
  },
  {
    name: "בעלי מקצוע",
    href: "#",
    rows: gridNavRows[6],
    links: [
      {
        href: "/#",
        text: "מכוני בדיקה ורישוי לרכב",
      },
      {
        href: "/#",
        text: "רחיצת רכב",
      },
      {
        href: "/#",
        text: "חומרי בניין",
      },
      {
        href: "/#",
        text: "אינסטלטורים",
      },
      {
        href: "/#",
        text: "חשמלאים",
      },
      {
        href: "/#",
        text: "שמאי מקרקעין",
      },
      {
        href: "/#",
        text: "שיפוצים",
      },
      {
        href: "/#",
        text: "הובלות",
      },
      {
        href: "/#",
        text: "רהיטים",
      },
      {
        href: "/#",
        text: "חברות ניקיון ואחזקה",
      },
      {
        href: "/#",
        text: "לכל בעלי המקצוע",
      },
    ],
  },
  { name: "מגזין יד2", href: "#" },
];

export const businessLinks = {
  chat: { name: "צ׳אט", href: "/#" },
  liked: { name: "מודעות שאהבתי", href: "/#" },
  lastSearches: { name: "חיפושים אחרונים", href: "/#" },
  notifications: { name: "התראות", href: "/#" },
  carCompare: { name: "השוואת רכבים", href: "/#" },
  logout: { name: "התנתקות", href: "/#" },
  privetArea: { name: "אזור אישי", href: "/#" },
  profile: { name: "התחברות", href: "/auth/login" },
  userProfile: { name: "אזור אישי", href: "/personal" },
};
