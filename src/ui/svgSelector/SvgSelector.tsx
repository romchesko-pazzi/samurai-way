import { memo } from 'react';

export const SvgSelector = memo(({ id }: PropsType) => {
  switch (id) {
    case 'edit':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path
            fill="#000"
            d="M15.5 1.4c1.2-.1 2.4.4 3.6 1.5 1.2 1.1 1.7 2.3 1.6 3.5 0 1.1-.7 2-1.5 2.9m0 0L11 17.9l-.8.7c-.3.1-.6.3-1 .3l-3.2.6c-.8.1-1.5 0-2-.6-.6-.5-.8-1.2-.7-2l.3-3.3.3-1 .6-.8L12.7 3c.8-.8 1.7-1.5 2.8-1.7m-1.7 2.7-8.2 8.7-.3.5a2 2 0 0 0-.2.5L4.8 17c0 .4 0 .7.2.8.1.2.4.3.8.2l3.2-.6c.1 0 .3 0 .5-.2.2 0 .4-.2.4-.3l8.3-8.7c.6-.7 1-1.3 1-2C19.2 5.8 19 5 18 4c-1-1-1.7-1.1-2.3-1-.6 0-1.2.4-1.9 1.1Z"
          />
          <path
            fill="#000"
            d="M11.8 4.3c.4 0 .8.2.8.6a5.4 5.4 0 0 0 4.8 4.6.8.8 0 0 1-.1 1.4A6.9 6.9 0 0 1 11 5.2c0-.4.3-.8.7-.9ZM2.3 22c0-.4.3-.8.7-.8h18a.8.8 0 0 1 0 1.6H3a.8.8 0 0 1-.8-.8Z"
          />
        </svg>
      );
    case 'uploadPhoto':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none">
          <path
            stroke="#FFFFFF"
            strokeLinecap="round"
            strokeWidth="1.5"
            d="M19 6h-5.7a2 2 0 0 0-1.4.6l-1.3 1.3a2 2 0 0 1-1.4.6H6a2 2 0 0 0-2 2V25c0 1.1.9 2 2 2h19.5a2 2 0 0 0 2-2V14.5M26 4v6M23 7h6"
          />
          <circle cx="16" cy="17" r="6" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );
    case 'search':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
          <path
            fill="#000"
            d="M21.7 20.3 18 16.6a9 9 0 1 0-1.4 1.4l3.7 3.7 1.4-1.4ZM11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
          />
        </svg>
      );
    case 'cross':
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 11 11"
        >
          <path d="m2.2 1.19 3.3 3.3L8.8 1.2a.6699.6699 0 0 1 .5-.2.7499.7499 0 0 1 .7.7.6603.6603 0 0 1-.2.48L6.49 5.5 9.8 8.82a.6603.6603 0 0 1 .2.48.7499.7499 0 0 1-.7.7.6699.6699 0 0 1-.5-.2L5.5 6.51 2.21 9.8a.6699.6699 0 0 1-.5.2.7501.7501 0 0 1-.71-.71.6603.6603 0 0 1 .2-.48L4.51 5.5 1.19 2.18A.6597.6597 0 0 1 1 1.7a.7499.7499 0 0 1 .7-.7.6702.6702 0 0 1 .5.19z" />
        </svg>
      );
    default:
      return <svg />;
  }
});

type PropsType = {
  id: string;
};
