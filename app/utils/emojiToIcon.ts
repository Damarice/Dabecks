/**
 * Shared emoji-to-icon mapping utility
 * Converts emoji characters to Font Awesome icon names for consistent usage across components
 */

import { IconName } from '@/app/components/Icon';

export const emojiToIcon: Record<string, IconName> = {
  // General utilities
  '⚡': 'bolt',
  '🛠️': 'tools',
  '✅': 'check',
  '🔒': 'shield',
  '💧': 'leaf',
  
  // Industrial & categories
  '🏭': 'industry',
  '⚙️': 'cogs',
  '✨': 'star',
  '🛡️': 'shield',
  '🔧': 'wrench',
  
  // Equipment specific
  '♨️': 'bolt',
  '🎯': 'certificate',
  '⭐': 'star',
  '🔥': 'bolt',
  '🏥': 'hospital',
  '🏨': 'building',
  '🤖': 'cogs',
  '📐': 'clipboard',
  '📦': 'box',
  '🔄': 'cogs',
  
  // Additional mappings
  '⭕': 'bolt',
  '⏱️': 'clock',
  '🚪': 'building',
  '🚚': 'truck',
  '🏆': 'award',
  '👷': 'users',
  '🚧': 'shield',
  '🌿': 'leaf',
  '📊': 'chartLine',
  
  // Kitchen specific
  '👨‍🍳': 'kitchen',
  '🍕': 'kitchen',
  '🏢': 'building',
  '🖥️': 'cogs',
  
  // HVAC specific
  '❄️': 'hvac',
  '🌡️': 'bolt',
  
  // Additional emoji variants
  '🔌': 'bolt',
};

/**
 * Convert emoji to icon name with fallback
 * @param emoji - Emoji character
 * @param fallback - Icon name to use if emoji not found (default: 'bolt')
 * @returns Icon name
 */
export function getIconFromEmoji(emoji: string, fallback: IconName = 'bolt'): IconName {
  return emojiToIcon[emoji] ?? fallback;
}
