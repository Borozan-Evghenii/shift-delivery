import React from 'react';

export const IconConfirm = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg
      fill='none'
      height='7'
      viewBox='0 0 9 7'
      width='9'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
      ref={ref}
    >
      <path
        d='M1.03223 3.99479L3.03223 5.99479L7.69889 1.32812'
        stroke={color}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='1.5'
      />
    </svg>
  )
);
