export default function MapPin({ size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Quadrante Inferior */}
      <path d="M 32 26 V 26 H 56 C 56 44 32 70 32 70 Z" fill="#703aa4"/>
      <path d="M 32 26 V 26 H 8 C 8 44 32 70 32 70 Z" fill="#F5A623"/> 
      {/* Quadrante superior */}
      <path d="M 32 7 V 26 H 8 C 8 13 18 2 32 2 Z" fill="#E05A5A"/>
      <path d="M 32 7 V 26 H 56 C 56 13 45 2 32 2 Z" fill="#54ddcd"/>
      {/* Círculo branco central */}
      <circle cx="32" cy="26" r="12" fill="#2D1F5E"/>
      <circle cx="32" cy="26" r="8" fill="white"/>
      <circle cx="32" cy="26" r="4" fill="#2D1F5E"/>
    </svg>
  );
}
