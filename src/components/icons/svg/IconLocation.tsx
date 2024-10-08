import React from 'react';

export const IconLocation = React.forwardRef<SVGSVGElement, React.ComponentPropsWithoutRef<'svg'>>(
  ({ color = 'currentColor', ...props }, ref) => (
    <svg
      ref={ref}
      fill='none'
      height='19'
      viewBox='0 0 16 19'
      width='16'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.99988 17.3281C7.99988 17.3281 14.2608 11.7629 14.2608 7.58899C14.2608 4.13121 11.4577 1.32812 7.99988 1.32812C4.5421 1.32812 1.73901 4.13121 1.73901 7.58899C1.73901 11.7629 7.99988 17.3281 7.99988 17.3281Z'
        stroke={color}
        strokeWidth='2'
      />
      <path
        d='M10.0001 7.32825C10.0001 8.43282 9.10471 9.32825 8.00014 9.32825C6.89557 9.32825 6.00014 8.43282 6.00014 7.32825C6.00014 6.22368 6.89557 5.32825 8.00014 5.32825C9.10471 5.32825 10.0001 6.22368 10.0001 7.32825Z'
        stroke={color}
        strokeWidth='2'
      />
    </svg>
  )
);
