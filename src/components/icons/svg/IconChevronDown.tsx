import React from 'react';

export const IconChevronDown = React.forwardRef<SVGSVGElement, React.ComponentProps<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg
      fill='none'
      height='20'
      viewBox='0 0 20 20'
      width='20'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      ref={ref}
    >
      <path
        d='M15.8334 7.50004L10.7071 12.6263C10.3166 13.0168 9.68346 13.0168 9.29293 12.6263L4.16671 7.50004'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
);
