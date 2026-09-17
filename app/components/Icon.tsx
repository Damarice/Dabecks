import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
  faArrowRight,
  faBars,
  faTimes,
  faCheck,
  faStar,
  faUsers,
  faBuilding,
  faIndustry,
  faHospital,
  faGraduationCap,
  faLandmark,
  faShirt,
  faUtensils,
  faSnowflake,
  faWrench,
  faCogs,
  faBoxOpen,
  faTools,
  faShieldAlt,
  faCertificate,
  faBolt,
  faLeaf,
  faTruck,
  faClipboardCheck,
  faHandshake,
  faAward,
  faChartLine,
  faGlobe,
  faMapMarkerAlt,
  faClock,
  faCalendar,
  faFileAlt,
  faDownload,
  faExternalLinkAlt,
  faQuoteLeft,
  faQuoteRight,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook as faFacebookBrand,
  faTwitter as faTwitterBrand,
  faLinkedin as faLinkedinBrand,
  faInstagram as faInstagramBrand,
  faYoutube as faYoutubeBrand,
  faWhatsapp as faWhatsappBrand,
} from '@fortawesome/free-brands-svg-icons';

// Icon mapping for easy access throughout the site
const iconMap = {
  // Contact & Communication
  phone: faPhone,
  email: faEnvelope,
  location: faLocationDot,
  mapMarker: faMapMarkerAlt,
  globe: faGlobe,
  
  // Navigation
  chevronDown: faChevronDown,
  chevronRight: faChevronRight,
  chevronLeft: faChevronLeft,
  arrowRight: faArrowRight,
  menu: faBars,
  close: faTimes,
  
  // Status & Confirmation
  check: faCheck,
  star: faStar,
  award: faAward,
  certificate: faCertificate,
  shield: faShieldAlt,
  
  // Business & Sectors
  users: faUsers,
  building: faBuilding,
  industry: faIndustry,
  hospital: faHospital,
  education: faGraduationCap,
  government: faLandmark,
  
  // Products & Services
  laundry: faShirt,
  kitchen: faUtensils,
  hvac: faSnowflake,
  wrench: faWrench,
  cogs: faCogs,
  tools: faTools,
  box: faBoxOpen,
  truck: faTruck,
  
  // Features & Benefits
  bolt: faBolt,
  leaf: faLeaf,
  handshake: faHandshake,
  clipboard: faClipboardCheck,
  chartLine: faChartLine,
  
  // Time & Date
  clock: faClock,
  calendar: faCalendar,
  
  // Documents & Links
  file: faFileAlt,
  download: faDownload,
  externalLink: faExternalLinkAlt,
  quoteLeft: faQuoteLeft,
  quoteRight: faQuoteRight,
  
  // Social Media (Brands)
  facebook: faFacebookBrand,
  twitter: faTwitterBrand,
  linkedin: faLinkedinBrand,
  instagram: faInstagramBrand,
  youtube: faYoutubeBrand,
  whatsapp: faWhatsappBrand,
};

export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  className?: string;
  size?: 'xs' | 'sm' | 'lg' | '1x' | '2x' | '3x';
  style?: React.CSSProperties;
}

/**
 * Standardized icon component using Font Awesome
 * Usage: <Icon name="phone" size="sm" className="text-cyan" />
 */
export default function Icon({ name, className = '', size = '1x', style }: IconProps) {
  const icon = iconMap[name];
  
  if (!icon) {
    console.warn(`Icon "${name}" not found in iconMap`);
    return null;
  }
  
  return (
    <FontAwesomeIcon 
      icon={icon} 
      className={className}
      size={size}
      style={style}
    />
  );
}

// Export icon names for autocomplete in IDEs
export { iconMap };
