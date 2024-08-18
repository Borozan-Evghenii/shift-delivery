import React from 'react';

export const IconPackage = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg ref={ref} fill='none' height={15} width={18} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='m2.906 2.953 5.56 3.992a.91.91 0 0 0 1.068 0l5.56-3.992M3.375 13.162h11.25c1.036 0 1.875-.87 1.875-1.945V3.44c0-1.074-.84-1.945-1.875-1.945H3.375c-1.036 0-1.875.87-1.875 1.945v7.777c0 1.074.84 1.945 1.875 1.945Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  )
);
