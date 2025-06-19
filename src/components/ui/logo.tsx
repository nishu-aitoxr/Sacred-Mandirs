import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Logo = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Temple Base */}
    <rect x="8" y="36" width="32" height="8" fill="url(#woodGradient)" rx="1"/>
    
    {/* Temple Pillars */}
    <rect x="10" y="28" width="3" height="8" fill="url(#woodGradient)"/>
    <rect x="16" y="28" width="3" height="8" fill="url(#woodGradient)"/>
    <rect x="29" y="28" width="3" height="8" fill="url(#woodGradient)"/>
    <rect x="35" y="28" width="3" height="8" fill="url(#woodGradient)"/>
    
    {/* Temple Roof */}
    <polygon points="24,8 12,28 36,28" fill="url(#goldGradient)"/>
    
    {/* Temple Steps */}
    <rect x="6" y="40" width="36" height="2" fill="url(#woodGradient)" opacity="0.8"/>
    <rect x="4" y="42" width="40" height="2" fill="url(#woodGradient)" opacity="0.6"/>
    
    {/* Inner Sanctum */}
    <rect x="20" y="30" width="8" height="6" fill="url(#goldGradient)" opacity="0.3"/>
    
    {/* Temple Dome/Kalash */}
    <circle cx="24" cy="10" r="3" fill="url(#goldGradient)"/>
    <rect x="23" y="7" width="2" height="4" fill="url(#goldGradient)"/>
    
    {/* Decorative Elements */}
    <circle cx="16" cy="26" r="1" fill="url(#goldGradient)" opacity="0.7"/>
    <circle cx="32" cy="26" r="1" fill="url(#goldGradient)" opacity="0.7"/>
    
    <defs>
      <linearGradient id="woodGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#8B4513"/>
        <stop offset="100%" stopColor="#A0522D"/>
      </linearGradient>
      <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFD700"/>
        <stop offset="100%" stopColor="#FFA500"/>
      </linearGradient>
    </defs>
  </svg>
);

export default Logo;