'use client';

import React from 'react';

interface ModelViewerProps {
  src: string;
  alt?: string;
  autoRotate?: boolean;
  cameraControls?: boolean;
  shadowIntensity?: string | number;
  suppressHydrationWarning?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const ModelViewer: React.FC<ModelViewerProps> = ({ 
  src, 
  alt, 
  autoRotate, 
  cameraControls,
  shadowIntensity,
  suppressHydrationWarning,
  className,
  style,
}) => {
  return React.createElement('model-viewer', {
    src,
    alt,
    'auto-rotate': autoRotate,
    'camera-controls': cameraControls,
    'shadow-intensity': shadowIntensity,
    'suppress-hydration-warning': suppressHydrationWarning,
    className,
    style,
  });
};

export default ModelViewer;