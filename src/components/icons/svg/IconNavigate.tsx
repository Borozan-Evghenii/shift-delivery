import React from 'react';

export const IconNavigate = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg ref={ref} fill='none' height={19} width={18} xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
        d='m7.553 10.996 1.861 5.384c.349 1.01 1.764 1.043 2.16.052l5.34-13.349c.372-.928-.534-1.857-1.471-1.51L1.752 6.66c-1 .371-1.003 1.786-.004 2.16l5.805 2.177Z'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  )
);
