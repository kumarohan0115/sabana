import React, { useEffect, useRef } from 'react';
import { Props } from './icon.types';
import { ICON_MAP } from '../../constants';
import { IconSize } from '../../common-types';
import './icon.scss';

const Icon: React.FC<Props> = ({ name, size = IconSize.Medium, customClass = '' }) => {

  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    svgRef.current.innerHTML = ICON_MAP[name];
  }, [name]);

  return (
    <svg fill='currentColor' ref={svgRef} className={`${size} ${customClass}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    </svg>
  );
};

export default Icon;
