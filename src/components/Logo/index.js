import React from 'react';
import logo from '../../logo.svg';
import './index.scss';

export default () => (
  <div className ="header__logo">
    <span className="header__logo-N">N</span>
    <svg
      className="header__logo-icon"
      height="60pt"
      viewBox="0 0 480 480.00404"
      width="75pt"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="m239.863281 80.003906c-88.367187 0-160 71.632813-160 160 0 88.367188 71.632813 160 160 160 88.363281 0 160-71.632812 160-160 0-88.367187-71.636719-160-160-160zm0 176c-8.835937 0-16-7.164062-16-16 0-8.835937 7.164063-16 16-16 8.835938 0 16 7.164063 16 16 0 8.835938-7.164062 16-16 16zm0 0"
        fill="#9bc9ff"
      />
      <path
        d="m255.863281 240.003906c0 8.835938-7.164062 16-16 16-8.835937 0-16-7.164062-16-16 0-8.835937 7.164063-16 16-16 8.835938 0 16 7.164063 16 16zm0 0"
        fill="#9bc9ff"
      />
      <g fill="#1e81ce" className="logo__icon">
        <path className="logo__arrow" d="m7.726562 239.890625h.28125c4.3125.003906 7.851563-3.414063 8-7.726563 2.949219-84.328124 53.042969-159.84375 129.585938-195.359374 76.542969-35.511719 166.546875-25 232.84375 27.199218h-42.574219c-4.417969 0-8 3.582032-8 8 0 4.417969 3.582031 8 8 8h64.109375c.628906-.050781 1.246094-.175781 1.84375-.367187.40625-.058594.808594-.148438 1.207032-.265625.222656-.09375.390624-.296875.605468-.414063.71875-.351562 1.378906-.8125 1.953125-1.367187l.082031-.058594c.203126-.277344.386719-.570312.550782-.871094.417968-.511718.769531-1.070312 1.046875-1.671875.222656-.636719.355469-1.304687.402343-1.976562.089844-.328125.15625-.667969.199219-1.007813v-64c0-4.417968-3.582031-7.99999975-8-7.99999975s-8 3.58203175-8 7.99999975v46.335938c-70.578125-57.824219-167.839843-70.617188-250.96875-33.007813-83.125 37.609375-137.730469 119.113281-140.8867185 210.296875-.1484375 4.414063 3.3046875 8.109375 7.7187495 8.261719zm0 0" />
        <path className="logo__arrow" d="m72.496094 388.875c-2.9375-3.3125-8.003906-3.617188-11.316406-.683594-3.316407 2.9375-3.621094 8.003906-.683594 11.316406 5.503906 6.179688 11.324218 12.078126 17.429687 17.664063 3.273438 2.875 8.246094 2.597656 11.183594-.617187 2.9375-3.214844 2.765625-8.1875-.390625-11.191407-5.6875-5.214843-11.101562-10.71875-16.222656-16.488281zm0 0" />
        <path className="logo__arrow" d="m167.964844 452.21875c-7.3125-2.476562-14.492188-5.328125-21.511719-8.550781-2.609375-1.292969-5.714844-1.066407-8.109375.59375-2.390625 1.660156-3.695312 4.488281-3.398438 7.386719.296876 2.898437 2.140626 5.40625 4.820313 6.546874 7.523437 3.464844 15.226563 6.53125 23.074219 9.183594 4.183594 1.417969 8.726562-.828125 10.144531-5.015625 1.414063-4.1875-.832031-8.726562-5.019531-10.144531zm0 0" />
        <path className="logo__arrow" d="m125.941406 432.90625c-6.648437-3.9375-13.09375-8.207031-19.3125-12.796875-2.289062-1.808594-5.378906-2.226563-8.066406-1.089844s-4.542969 3.644531-4.84375 6.546875 1.003906 5.734375 3.398438 7.398438c6.652343 4.921875 13.546874 9.5 20.664062 13.71875 3.804688 2.253906 8.710938 1 10.964844-2.804688 2.253906-3.800781 1-8.710937-2.804688-10.960937zm0 0" />
        <path className="logo__arrow" d="m58.007812 370.820312c-4.511718-6.269531-8.699218-12.765624-12.546874-19.464843-2.207032-3.832031-7.105469-5.148438-10.9375-2.9375-3.832032 2.207031-5.148438 7.105469-2.941407 10.9375 4.121094 7.160156 8.609375 14.105469 13.441407 20.808593 2.613281 3.484376 7.535156 4.234376 11.070312 1.691407 3.535156-2.546875 4.382812-7.449219 1.914062-11.035157zm0 0" />
        <path className="logo__arrow" d="m34.992188 330.714844c-3.132813-7.050782-5.894532-14.261719-8.28125-21.597656-.773438-2.847657-3.054688-5.039063-5.929688-5.699219-2.875-.660157-5.878906.316406-7.820312 2.542969-1.9375 2.222656-2.496094 5.332031-1.449219 8.089843 2.550781 7.882813 5.511719 15.625 8.863281 23.203125 1.28125 2.894532 4.152344 4.761719 7.320312 4.757813 2.703126 0 5.226563-1.367188 6.703126-3.636719 1.476562-2.269531 1.703124-5.128906.609374-7.601562zm0 0" />
        <path className="logo__arrow" d="m14.574219 296.210938c4.316406-.917969 7.074219-5.160157 6.160156-9.480469-1.59375-7.554688-2.800781-15.191407-3.617187-22.871094-.464844-4.394531-4.40625-7.582031-8.800782-7.117187-4.398437.46875-7.585937 4.410156-7.117187 8.804687.875 8.226563 2.171875 16.402344 3.886719 24.496094.917968 4.324219 5.164062 7.085937 9.488281 6.167969zm0 0" />
        <path className="logo__arrow" d="m467.0625 288.042969c-4.289062-1.0625-8.625 1.554687-9.6875 5.839843-1.855469 7.5-4.09375 14.902344-6.710938 22.167969-1.5 4.160157.65625 8.742188 4.816407 10.242188 4.15625 1.496093 8.742187-.660157 10.238281-4.816407 2.808594-7.785156 5.210938-15.710937 7.199219-23.746093.511719-2.058594.179687-4.238281-.917969-6.054688-1.101562-1.820312-2.875-3.125-4.9375-3.632812zm0 0" />
        <path className="logo__arrow" d="m213.070312 462.402344c-7.667968-.910156-15.28125-2.21875-22.816406-3.917969-4.308594-.972656-8.59375 1.730469-9.566406 6.039063-.976562 4.3125 1.730469 8.59375 6.039062 9.570312 8.074219 1.820312 16.238282 3.21875 24.457032 4.199219.316406.039062.636718.054687.957031.054687 4.234375-.007812 7.726563-3.3125 7.972656-7.535156.246094-4.222656-2.839843-7.910156-7.042969-8.410156zm0 0" />
        <path className="logo__arrow" d="m452.320312 333.675781c-3.976562-1.917969-8.757812-.253906-10.683593 3.71875-3.359375 6.957031-7.082031 13.730469-11.148438 20.296875-2.234375 3.75-1.050781 8.597656 2.660157 10.894532 3.707031 2.300781 8.578124 1.199218 10.9375-2.46875 4.355468-7.039063 8.339843-14.300782 11.945312-21.753907 1.925781-3.976562.265625-8.761719-3.710938-10.6875zm0 0" />
        <path className="logo__arrow" d="m417.300781 376.730469c-4.71875 6.125-9.75 12-15.078125 17.601562-3.046875 3.203125-2.917968 8.269531.285156 11.316407 3.203126 3.046874 8.269532 2.917968 11.316407-.285157 5.695312-6.003906 11.082031-12.289062 16.140625-18.839843 1.796875-2.257813 2.238281-5.308594 1.15625-7.984376-1.085938-2.671874-3.527344-4.554687-6.386719-4.925781-2.863281-.375-5.703125.824219-7.433594 3.132813zm0 0" />
        <path className="logo__arrow" d="m472 240.378906c-2.132812-.109375-4.214844.652344-5.773438 2.105469-1.5625 1.453125-2.464843 3.476563-2.507812 5.609375-.273438 7.71875-.941406 15.417969-2.007812 23.070312-.601563 4.371094 2.445312 8.40625 6.816406 9.015626.371094.054687.746094.082031 1.121094.082031 3.984374-.007813 7.359374-2.949219 7.910156-6.898438 1.140625-8.195312 1.855468-16.441406 2.152344-24.710937.152343-4.414063-3.300782-8.117188-7.710938-8.273438zm0 0" />
        <path className="logo__arrow" d="m385.460938 410.269531c-5.886719 5.023438-12.027344 9.746094-18.398438 14.140625-3.644531 2.519532-4.554688 7.515625-2.035156 11.15625 2.519531 3.644532 7.511718 4.554688 11.15625 2.039063 6.8125-4.730469 13.378906-9.804688 19.679687-15.203125 3.355469-2.871094 3.75-7.921875.878907-11.277344-2.871094-3.359375-7.921876-3.753906-11.28125-.882812zm0 0" />
        <path className="logo__arrow" d="m304.75 454.46875c-7.390625 2.226562-14.894531 4.070312-22.480469 5.519531-4.046875.777344-6.839843 4.503907-6.453125 8.605469.386719 4.105469 3.828125 7.242188 7.949219 7.25.507813 0 1.015625-.042969 1.511719-.136719 8.132812-1.550781 16.175781-3.53125 24.097656-5.925781 4.121094-1.359375 6.410156-5.757812 5.152344-9.910156-1.253906-4.15625-5.59375-6.554688-9.777344-5.402344zm0 0" />
        <path className="logo__arrow" d="m259.34375 463.203125c-6.402344.542969-12.953125.800781-19.480469.800781h-3.65625c-4.363281.0625-7.929687 3.5-8.152343 7.855469-.082032 4.417969 3.4375 8.066406 7.855468 8.144531h3.953125c6.992188 0 14-.3125 20.800781-.894531 2.90625-.167969 5.488282-1.902344 6.75-4.523437 1.257813-2.625.996094-5.726563-.691406-8.097657-1.6875-2.375-4.527344-3.644531-7.421875-3.316406zm0 0" />
        <path className="logo__arrow" d="m347.382812 436.554688c-6.773437 3.710937-13.730468 7.070312-20.847656 10.066406-2.671875 1.082031-4.550781 3.515625-4.925781 6.375-.375 2.855468.816406 5.691406 3.117187 7.425781 2.300782 1.734375 5.355469 2.097656 8 .949219 7.625-3.207032 15.082032-6.808594 22.335938-10.78125 3.875-2.125 5.296875-6.988282 3.171875-10.863282-2.121094-3.875-6.984375-5.292968-10.859375-3.171874zm0 0" />
        <path d="m239.863281 72.003906c-92.785156 0-168 75.214844-168 168s75.214844 168 168 168c92.78125 0 168-75.214844 168-168-.105469-92.738281-75.261719-167.894531-168-168zm8 319.59375v-23.59375c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8v23.59375c-77.519531-4.15625-139.4375-66.078125-143.59375-143.59375h23.59375c4.417969 0 8-3.582031 8-8 0-4.417968-3.582031-8-8-8h-23.59375c4.15625-77.515625 66.074219-139.4375 143.59375-143.59375v23.59375c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-23.59375c77.515625 4.15625 139.433594 66.078125 143.589844 143.59375h-23.589844c-4.417969 0-8 3.582032-8 8 0 4.417969 3.582031 8 8 8h23.589844c-4.15625 77.515625-66.074219 139.4375-143.589844 143.59375zm0 0" />
        <path
          className=""
          d="m247.863281 217.476562v-73.472656c0-4.417968-3.582031-8-8-8s-8 3.582032-8 8v73.472656c-6.777343 2.417969-12.109375 7.753907-14.527343 14.527344h-41.472657c-4.417969 0-8 3.582032-8 8 0 4.417969 3.582031 8 8 8h41.472657c3.699218 10.53125 14.1875 17.109375 25.28125 15.855469 11.089843-1.257813 19.84375-10.007813 21.097656-21.101563 1.257812-11.09375-5.320313-21.582031-15.851563-25.28125zm-8 30.527344c-4.417969 0-8-3.582031-8-8 0-4.417968 3.582031-8 8-8s8 3.582032 8 8c0 4.417969-3.582031 8-8 8zm0 0"
        />
      </g>
    </svg>
    <span className="header__logo-W">W</span>
  
  </div>
);