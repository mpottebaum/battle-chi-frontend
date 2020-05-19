import React from "react";

const NeighborhoodMap = props => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      id='map'
      version='1'
      x="0"
      y="0"
      width="100%"
      height="100%"
      viewBox="0 0 854.774 1199.309"
      preserveAspectRatio="xMinYMin meet"
      onClick={props.handleClick}
    >
      <g id='layer1' display='inline' transform='translate(-645.972 4.657)'>
        <path
          id='rect2349'
          fill='#8e908d'
          fillOpacity='1'
          stroke='#fff'
          strokeDasharray='none'
          strokeMiterlimit='4'
          strokeOpacity='1'
          strokeWidth='1.794'
          d='M646.87 -3.76H1499.8490000000002V1193.755H646.87z'
          display='inline'
        ></path>
      </g>
      <g
        id='layer9'
        fillOpacity='1'
        fillRule='evenodd'
        stroke='#000'
        strokeLinecap='butt'
        strokeLinejoin='miter'
        strokeOpacity='1'
        strokeWidth='2'
        display='inline'
        transform='translate(-645.972 4.657)'
      >
        <path
          id='portage-park'
          data-name='Portage Park'
          fill='#9f6'
          d='M792.906 184.662l-.5 2.562-31.75.938-1.625-.438.25 10-.25 9.688.5.062 1.563 4.5v22.188h22.187l2.063 2.562 1 9.063 1 2.562 1 25.25-1 1.5.5 1.5 85.375-1 1-35.375-2.563-3-1-8.125-1.5-2v-3l-3-3.562-.687-2h.125l-.25-.25-.25-.75-.688-.188-1.812-1.875-2-2.5 1-10.125-2.563-4-2.5-.562v-5.5l-3.062-4.063h-8.563l-35.875 1-3-4.562z'
          display='inline'
        ></path>
        <path
          id='albany-park'
          data-name='Albany Park'
          fill='#c33'
          d='M917.645 103.363v2.02l-6.062.506-1.01 3.535-5.555 3.03-8.082 7.071 1.01 8.586-3.535.506-9.596 1.01-.506 14.142-1.01 1.514-23.738.506-1.012 21.719h-1.01l.507 18.181v2.022l23.738-.506-.506.506 2.021 2.02v4.04l5.555 3.03 4.547 3.031 3.535 4.041h2.526l6.06 6.06h36.365l1.516-3.535 39.9 1.01 5.557.506 3.031 1.01-1.012-6.567-7.07-7.07-2.02-3.031-2.525-3.031-7.072-7.07-2.525-2.02-1.01-9.598-2.026-.105-1.51-24.643-4.546-6.566-2.02-2.02.506-4.04-2.021-3.536v-5.05l-1.516-4.548-3.03-4.039.505-12.123z'
          display='inline'
        ></path>
        <path
          id='irving-park'
          data-name='Irving Park'
          fill='#9f6'
          d='M845.418 187.205l34.85 1.01 3.536 4.041 6.061 6.06 12.122 9.597 2.525 1.516 37.88 1.01 1.75-3.24 42.698.21 4.545.504-.505 5.556 2.526 3.03v15.153l-2.02 2.525-4.546 6.566v11.617l-78.792 1.515 1.515 22.224-36.366-1.01v-35.356l-2.525-10.101-9.596-14.142.505-12.122-4.546-4.04v-7.577l-2.02-.505-1.516-1.515z'
          display='inline'
        ></path>
        <path
          id='jefferson-park'
          data-name='Jefferson Park'
          fill='#c33'
          d='M780.264 49.824l-2.525 2.526-.506 5.556h-20.709l-2.02 2.526.506 2.525 2.02 2.525 7.576 8.586 2.02-.506 2.525 2.526v5.05l-8.08 4.042-8.586 4.04 1.514 3.03 2.525 4.041 9.092-.504 4.547-8.082 4.545.506 1.01 4.545 1.515 2.02c.009 13.382 31.565 7.562-6.06 6.566v3.031l2.019 2.525h4.041l4.041 5.051-.506 29.295-1.515 3.03-22.223-1.01-1.01 2.02-.506 41.921h36.871l1.516-2.02h11.617l4.545 4.545 36.365-.505v-1.998l11.618.484-2.022-20.203c6.14-5.601 3.537-14.53 3.537-22.225h23.233l2.021-2.525v-13.131h10.102l2.523-2.022-1.01-8.08 16.668-13.132 1.01-2.02-1.514-.506h-66.166l-3.03-2.02-1.515-3.03-3.537-2.02-5.05-3.031-6.565-3.03-4.547-.506 1.516-15.152.506-6.06-15.659.505v10.102h-5.556l-4.04-3.537v-6.565l-2.525-2.021V63.46l-1.515-3.535-.506-1.01h-2.525l-1.514-1.01-4.547-.506-.504-7.576z'
          display='inline'
        ></path>
        <path
          id='rogers-park'
          data-name="Roger's Park"
          fill='#c33'
          d='M1038.862 27.096v3.535l8.082 7.072h1.516l-28.416.488-63.004-1.498v62.123l-4.545 4.547v12.121l4.04 8.586v7.073l7.071 12.626 41.922.504-.506-23.232 36.871 1.01v-19.7l50.508-.503-1.516-9.092-2.02-4.545v-9.092l4.04-1.01-1.01-2.525-4.545-2.525v-3.536l-2.525-2.525-5.557-5.557v-3.535l-2.525-4.04-2.02-4.546-2.021-3.031v-2.02l-2.02-1.515v-9.598l-5.05-6.06z'
          display='inline'
        ></path>
        <path
          id='edgewater'
          data-name='Edgewater'
          fill='#c33'
          d='M1042.398 100.332l1.515 65.66 62.63-.505 2.525-4.04 4.546.504-10.102-9.091-.505-7.576 2.526-1.515-.506-3.03 4.546-5.052h-3.03l-6.061-4.545h-5.051l-1.515-30.305z'
          display='inline'
        ></path>
        <path
          id='lincoln-square'
          data-name='Lincoln Square'
          fill='#c33'
          d='M964.616 143.769h41.922v-23.234l36.87 1.515v85.358H990.88v-5.05l-10.606-10.607-1.516-3.536-9.596-7.576-1.01-11.617-3.03-4.04z'
          display='inline'
        ></path>
        <path
          id='uptown'
          data-name='Uptown'
          fill='#c33'
          d='M1043.408 165.487l61.62.505 3.535-4.04 5.556-1.01-4.546 2.525-.505 9.596 2.02 5.05 10.102 9.597 4.546 4.546h2.02l7.576 5.05 6.06 1.01 1.011 1.516 10.102-.505 2.525-5.05v5.555l-2.02 7.071v3.03l-5.556 6.062-4.546 2.525-3.03 1.01h-3.536l-4.04-4.04 2.02-2.02 9.091.504 3.536-4.545-4.04-2.02-4.547-1.516h-8.586l-2.02 2.02-2.02 6.061v6.061l1.515 1.515-.505 8.082h-53.538l-.505-7.577-11.112-13.131-18.183-.506z'
          display='inline'
        ></path>
        <path
          id='lakeview'
          data-name='Lakeview'
          fill='#99f'
          d='M1044.907 208.412l-53-.5v5.063l1.5 2.5.5 16.187-2.5 2.5-4.563 8.625.5 13.125 2 1v3l10.625 12.625 7.063 8.125 5.062 5.063 10.625 8.562h22.688m0 0l107.098-1.016 3.535-2.02-.504-3.536-2.022-3.03-2.525-4.546-1.01-3.536v-8.585l-2.525-3.536-5.557 7.07-3.03-.503-7.07-9.598-3.03-3.535.505-8.082 3.535 2.021 3.03 1.516 4.546 5.05 3.03 1.01 6.06.504-1.513-4.039-22.729-26.265-52.53-.504-1.009-1.516v-7.07l-10.102-11.113-16.683-1.016'
          display='inline'
          imageRendering='auto'
        ></path>
        <path
          id='belmont-cragin'
          data-name='Belmont Cragin'
          fill='#9f6'
          d='M751.452 275.074v2.11l-37.858-1.752-2.857 3.212 1.428 45h5.714l10 6.43 6.428 1.428 7.145 2.142 5 4.288h4.285c1.07-1.073.356 1.072 0 0l9.285 3.57h39.285l4.287-2.143 14.285.715 25 .713 7.143.715 8.572 2.857 7.858 1.428 7.746 1.293.01.74 2.525 1.514 47.983.506-3.032-4.041-.503-2.526-1.01-2.525v-3.03l-8.082-6.062v-15.152l-11.112-14.14-.505-7.073-8.586-15.656v-4.041h-18.688c.02.006 0 0 0 0z'
          display='inline'
        ></path>
        <path
          id='austin'
          data-name='Austin'
          fill='#fc3'
          d='M711.808 323.288l6.786.714 8.571 6.072 14.464 3.214 4.465 4.643 5.714-1.072 7.143 3.929 32.5.714h7.857l3.928-1.964 11.072-.179 37.143 2.143 22.143 6.429 2.857 4.286-2.143 30 1.428 29.285.715 13.572 1.428 20.714v5l-3.571 2.143 2.143 5.714 2.143 1.429.714 17.143-2.143 5-2.857 5.714-.714 3.571H791.45l-.715-127.857-78.571-1.428z'
          display='inline'
        ></path>
        <path
          id='logan-square'
          data-name='Logan Square'
          fill='#99f'
          d='M909.563 253.371V276.1H891.38l-.504 2.525 9.097 16.28.498 8.468 5.557 6.06 6.06 8.586 1.01 14.649 6.06 5.05 1.013 6.565 3.029 6.063 99.5-.506 1.01-2.526h43.437l2.525-2.525 1.516-3.031-2.525-5.555-10.608-12.123-8.082-1.01-6.06-5.554-1.516-6.063-7.07-5.05-6.567-1.514-1.515-4.041-3.535-5.557c-.907.012-.605-1.714-1.01-2.525l-16.162-11.616-15.659-19.699-2.019-4.04-2.525-4.04z'
          display='inline'
        ></path>
        <path
          id='humboldt-park'
          data-name='Humboldt Park'
          fill='#fc3'
          d='M875.723 349.84l-.505 73.236 3.535 4.04 56.064.506 2.02-2.02h64.65l-.505-10.102-15.153-12.122-11.616-1.515v-8.587l-2.02-1.515h-2.526l-1.01 1.515h-5.051v-5.05l-2.525-3.03.505-23.234 4.545-1.516 10.102-.505v-2.525l1.515-1.01-2.02-6.566z'
          display='inline'
        ></path>
        <path
          id='west-town'
          data-name='West Town'
          fill='#fc3'
          d='M975.728 349.84l2.02 2.525v4.546l-2.525 2.525H963.1l-1.01 3.03-.505 23.234 2.525 2.526-.505 5.05 4.546.505 2.525-2.525h2.526l1.515 2.525.505 8.082 10.101-.505 3.03 2.525 8.082 7.071 4.546 4.04v9.597l5.05 1.01 126.27-2.02-1.516-3.536-3.03-2.525-.505-3.03-4.04-3.03-2.021-5.052v-8.586h-11.617l-9.091-8.586h-5.556l-9.597-11.112v-13.132l5.051-4.546-1.515-10.101-4.04-5.556-4.546-1.515h-9.092l-4.545 4.545-43.942-1.01.505 1.516z'
          display='inline'
        ></path>
        <path
          id='garfield-park'
          data-name='Garfield Park'
          fill='#fc3'
          d='M937.342 425.096l-1.515 3.03-9.092-.505h-.504l-48.488 1.01v15.152l-.504 4.041v2.526l-2.022.505-.504 5.051 5.555 5.051-.504 14.646-2.021 3.032.506 3.535h6.06l5.051-4.545 6.06-2.022 1.516 2.022v3.03l4.545 2.02 27.78.505v-4.545h31.82l4.04 3.029h36.366v-32.83h0v-13.637h0v-4.04l2.02-.505v-4.547l-2.526-.503z'
          display='inline'
        ></path>
        <path
          id='lincoln-park'
          data-name='Lincoln Park'
          fill='#99f'
          d='M1025.736 293.288h127.143l.715 5 1.428 5.357.357 6.429 1.786 6.071v3.929l2.857 6.428 1.429 3.572 1.785 3.214v2.857l1.786 1.429v3.928l8.214 8.215h2.5l1.786-2.143 3.214.357 1.072-2.5h1.428l.358 5-2.5 1.428h-1.786l-1.429 1.786-2.5.357-1.785 2.143-3.215-.357-1.071 2.143h-80.357v-6.429l-1.786-1.785v-2.143l-2.5-1.786-3.929-.357-1.071-2.143h-8.929v-2.143l-2.142-1.786v-3.571l-9.643-10.714-7.857-1.429-8.215-7.5v-2.857l-6.071-6.786-7.5-.714-.714-3.214-1.429-.357v-3.572l-2.143-1.786z'
          display='inline'
        ></path>
        <path
          id='near-north-side'
          data-name='Near North Side'
          fill='#f6f'
          d='M1089.656 357.6l.313.124-.688 1.625-2.125 2.5v1.438l-2.125 2.5v11.437l1.75 2.875 2.5 3.188 3.625 2.5 2.5 3.562 5 .375 2.813 2.5 5.75 5.375 10 .313 1.437 1.812.688 8.563h2.125v1.812l1.812 1.375.375 1.813 1.375 2.125 2.188 1.812v2.5l2.125 2.125 1.812 2.125 4.625 6.125 5.688-.75v-1.062h2.5l1.437-2.5h3.25l4.625 3.937h4.25l1.813-2.125 6.437-3.625 13.938-.312 2.812 1.437 12.5.313 2.188-1.75.312-3.938 2.188.375 2.5 1.375 5 .75 2.125-3.562 18.937.312 5-1.062v-3.188l3.938-.375-1.438-2.125h-10.375l-1.75-2.5v-5l-1.812-1.812-15.375-.313-3.188 1.375.375 2.188-1.812 1.75-2.5 4.312-1.813-1.062-3.875-5.75-1.812-2.813-1.813-1.812s-2.09-3.598-3.875-6.813l-.375-1.375-2.125-2.875-3.937-3.562-3.563-2.875-3.937-3.188-2.5-2.875v-7.5l-1.813-4.312-.375-7.813h-79.25z'
          display='inline'
        ></path>
        <path
          id='lawndale'
          data-name='Lawndale'
          fill='#fc3'
          d='M897.165 475.787l-5.358 1.787-5.713 1.785-6.787 3.215.358 67.143h.357l1.43 80.715 2.5 2.5 127.855-50.358-1.785-71.43-.715-.357-.355-12.5-7.858-9.285-.715-7.5-32.142.357-2.5-1.785-2.5-2.5-33.93.713v4.287l-13.57-.715-18.572-.357z'
          display='inline'
        ></path>
        <path
          id='near-west-side'
          data-name='Near West Side'
          fill='#fc3'
          d='M1001.887 423.81l.278 21.264-.928 31.875-.143 11.695 7.5 8.93 1.428 12.5.363-.004 1.067 72.861 18.928-6.43 33.214-.714 2.858-2.5 3.213-.713v-12.5l17.142-17.5h25l13.573-4.643.357-2.144 19.642-20 2.5-2.143-.714-5 .357-1.785-.715-20.715-1.428-5.713-2.142-10.714-3.215-7.5-2.5-6.073v-26.07l-5-6.072h-125.357zm-.65 53.14l.57-46.659-.713 51.568z'
          display='inline'
        ></path>
        <path
          id='loop'
          data-name='Loop'
          fill='#f6f'
          d='M1137.165 429.717l.714 26.428 5 13.214 2.5 10 .357 7.143h41.072l6.071-5-.714-35.714 7.143-6.429-.357-11.428-2.5-2.5-12.143-.357-4.286-1.786-14.286.714-6.785 5h-4.643l-3.572-3.214-3.571-.357-4.286 3.928z'
          display='inline'
        ></path>
        <path
          id='near-south-side'
          data-name='Near South Side'
          fill='#f6f'
          d='M1147.522 486.502h40.714l5-3.928 7.858 4.285 20 .715v5.357l-5.715 3.571v5l1.786 2.5.714 3.572-2.5 3.214v18.214h-6.071l-.357-16.428-2.5-1.786.357-17.5-7.857.714 1.071 13.572 3.929 3.928v4.286l-3.215 1.429 1.072 6.428 2.143 4.286 1.071 10.357 4.286 7.857 2.5 6.429-55.357-.357v-6.429l4.285-5.357-.357-11.072-2.857-3.928-.357-7.5-3.571-3.572-6.072-.714z'
          display='inline'
        ></path>
        <path
          id='bridgeport'
          data-name='Bridgeport'
          fill='#cc6'
          d='M1148.95 512.574l-2.143 1.785-22.142 21.428c-.137 2.788 2.042 6.845-1.07 3.215l-6.43 2.142-28.57 1.073-19.288 17.5v11.07l3.215 2.857 1.43 3.573 13.928 14.642v26.428l15.357-.355 4.643-1.073h33.214l.713-.357h17.5v-19.643l-1.785-3.215-1.072-47.5 4.287-4.285v-11.072l-2.857-3.928-1.073-10.715-.713-1.785-3.93-.357z'
          display='inline'
        ></path>
        <path
          id='bronzeville'
          data-name='Bronzeville'
          fill='#cc6'
          d='M1208.594 552.217l-52.144.715.357 41.427 2.143 1.785.346 20.004-.346-.004.357 15 1.073 49.287 56.425.71.717 1.076 61.785-2.143 3.215-4.643-.715-1.787-13.928-12.142v-3.928l-2.142-1.43-.358-3.57-15.357-13.93s3.928 0 0 0h3.928l-10-10.713-10.356-15.714-8.215-16.786-.714-1.43-1.428-6.427-5.715-8.93v-7.142l-8.928-11.785z'
          display='inline'
        ></path>
        <path
          id='new-city'
          data-name='New City'
          fill='#3fc'
          d='M1065.38 574.002l-6.428 2.142-30 1.073-17.5 5.357.355 26.07 6.543 9.641-.113.002-.358 54.645 12.5-1.43 2.5 1.785v29.645h108.217l-.002.355 19.285 1.072-1.072-72.142-1.07-4.643v-11.072l-17.143-.715.031 1.44-52.906.457-.34-25.11-1.785-1.787-13.93-16.428z'
          display='inline'
        ></path>
        <path
          id='brighton-park'
          data-name='Brighton Park'
          fill='#3fc'
          d='M944.665 672.574h73.572l.357-53.215-5.715-10.715-.357-26.07-68.215 25.713m0 0l-61.428 24.287.715 68.928 9.285-6.785 14.643-.358 37.143-21.785'
          display='inline'
        ></path>
        <path
          id='gage-park'
          data-name='Gage Park'
          fill='#3fc'
          d='M947.165 673.644l-1.428-1.427-37.858 22.142-.357-.357-16.428 1.43-6.787 5.355v27.857l62.145 1.073m0 0h87.142l-1.072-56.073h-85.357'
          display='inline'
        ></path>
        <path
          id='chicago-lawn'
          data-name='Chicago Lawn'
          fill='#3fc'
          d='M883.952 727.932l-.715 44.285-10 .715.357 44.285 1.785 4.285v2.857l48.573-.715.355-23.57 4.287.713 3.928 2.857 3.215 1.43 2.142 2.5 3.928 1.785 7.5 2.5.715.358 86.072 1.07.358-21.07-2.858-2.858-.357-60-86.785.358v-1.43z'
          display='inline'
        ></path>
        <path
          id='englewood'
          data-name='Englewood'
          fill='#3fc'
          d='M1093.594 703.644l-60.357-.712.357 86.07 1.786 1.43.357 21.07 35.357-.358 1.07 2.5h5l2.858-3.212 2.858.355 1.785 1.072 12.857.358m0 0l21.428.357 2.5 1.428v4.642l12.857-.357v-5.713l1.787-2.5h4.286l3.57-3.572 2.857-3.928 1.787-24.642 3.57-1.788 2.143-1.785v-5.357l1.787-3.215.356-18.57 3.215-2.143v-7.142l1.785-2.145-1.785-32.143h-66.07'
          display='inline'
        ></path>
        <path
          id='hyde-park'
          data-name='Hyde Park'
          fill='#cc6'
          d='M1279.307 680.432l-63.213 1.427v1.075l-1.072-2.147h-53.928v55.357h5.713l2.143 3.573v5.357l13.215.358 2.5-.715 7.142-.34.715 20.34 25.715 23.927-.715-20.357 2.5-1.785 96.785-1.428-5.357-6.072-2.856-5-5.357-3.928h-4.287v2.143l2.144 1.785.356 4.285h-5.356l-.357-1.785-2.143-2.143v-4.285l1.786-2.857 15-5.358-.358-1.785-11.072-.357-9.643-8.215v-3.922l.715-.006.358-3.215-1.073-7.857-6.785-8.57 5-6.073 5.715-2.142v-5l-9.287-1.43-4.285-4.285z'
          display='inline'
        ></path>
        <path
          id='ashburn'
          data-name='Ashburn'
          fill='#f63'
          d='M877.165 825.074l-.357 55.357 108.571-1.072 39.643-2.5 23.572.715-3.929-6.072-4.286-6.428-5-5.715v-46.071l-86.785-.357-23.929-13.214-.714 23.928z'
          display='inline'
        ></path>
        <path
          id='auburn-gresham'
          data-name='Auburn Gresham'
          fill='#f63'
          d='M1036.45 811.502l35 .357 3.215 3.572 3.571-1.429 1.072-1.428 40-.715 2.5 2.143v4.643l12.857.714.357 35 6.072-.714h3.928l2.143 3.929-1.786 38.214-.714 2.143h-23.214l-.715-2.857-3.214.357-1.428 2.143-3.572-.357v-5.715l2.857-2.143-.357-2.5-38.214-.357-5.714 1.072-3.572 5.714-6.071.357-26.072-33.571z'
          display='inline'
        ></path>
        <path
          id='chatham'
          data-name='Chatham'
          fill='#6c6'
          d='M1134.308 831.145v22.857l2.143 1.786 3.571-.714 1.786-1.786 3.571 1.071 1.429 3.215.714 15 21.072 24.285 20.357-1.785 8.928 7.857 11.429 6.786 15 8.571-.714-12.143 1.071-4.643 1.071-11.785 4.286-6.072 1.786-5.357 2.5-5 8.571-1.786-2.857-4.285v-23.572l1.429-3.928-.357-8.929-93.572.357z'
          display='inline'
        ></path>
        <path
          id='greater-grand-crossing'
          data-name='Greater Grand Crossing'
          fill='#cc6'
          d='M1133.95 832.217l.358-20 1.786-2.143h5l2.5-3.929 2.5-2.5V786.86l1.785-2.5v-6.428l2.5-2.5h3.929l1.071-8.214.715-2.858.714-17.142 3.214-1.786.357-8.572h7.5l.715 2.143 1.428 6.786h12.857l3.572-1.071 5.357.714v19.286l25.714 22.857.714-20 35-.715.358 17.858-4.286 3.214v10l-5.714 4.643v7.857l2.5 1.428-.358 3.215-5 3.571.358 6.072 2.142 1.071-.357 5h-25.357l-2.143 1.429z'
          display='inline'
        ></path>
        <path
          id='south-shore'
          data-name='South Shore'
          fill='#cc6'
          d='M1253.594 765.43l65-.713 1.785 3.214h4.286l2.5 2.857.714 7.143 7.857-.714v-2.143l2.5.714-1.071 6.786-1.786.714h-2.143l-1.785 2.5.357 5 9.643 8.571 8.928.715.715 3.214 2.857 2.143h22.143l5 6.071v2.143l-2.5 2.143-2.858 1.786-2.5 2.5-2.142 1.428-2.143 1.786h-10.715l-4.642 4.643h-26.072l-2.5 1.428-55 1.072-22.857-18.572-3.214-2.5-.357-6.785 5.357-5.357.357-8.929 3.928-4.286z'
          display='inline'
        ></path>
        <path
          id='calumet-heights'
          data-name='Calumet Heights'
          fill='#6c6'
          d='M1245.38 810.432l.357 4.642-4.643 3.213-.357 4.645 2.5 1.785.357 3.215-2.144 2.142.357 10.713-3.213 1.787.713 22.143 1.787 3.927v2.858l2.08 1.389-6.724-.674-2.856 1.07v3.215l-2.5 1.43v2.142l-1.43 3.213-1.784 2.857-2.5 3.215v13.573l-2.5 16.07 42.5-.715v-.713h4.285l2.5-4.642 44.642.712.715 1.788 48.572-.358-47.093-41.076.664.004zm-1.622 62.845l.55.367h-.378z'
          display='inline'
        ></path>
        <path
          id='south-chicago'
          data-name='South Chicago'
          fill='#6c6'
          d='M1268.236 830.43l57.5-.356 2.5-2.5 25.715.357 5-4.643 11.785.714 5.715 6.072h11.428l1.786 1.785h3.571l3.215 1.786 2.857.357.714 1.429h2.5l5 7.857v17.143l-20.357-.357-2.143 1.785 1.786 1.072 21.071.357 1.429 2.857v3.214l1.786 2.858v9.285l-3.929 3.929h-3.929l-1.071 1.786h-5l-.714 2.5-6.429-.715-3.214-3.214-1.786-.357v1.428l3.929 4.643v2.143l-13.572 11.429-1.428 1.071v9.643l-7.5-.714z'
          display='inline'
        ></path>
        <path
          id='pullman'
          data-name='Pullman'
          fill='#6c6'
          d='M1146.45 874.002v21.785l-1.428.715v2.857l1.785.715 1.072 28.928 3.215 5v3.93l-1.787-.358v23.928l-21.785.357-.715 64.285s-.061.498-47.033 1.508l.504 41.922 1.516 1.514 45.457.506v2.02l2.021 2.02v7.577l-2.021 2.02v4.546l-2.02 3.535h-9.598l-.504 13.637 1.516 2.526 33.84.505 17.678-12.627 14.14.504 1.516 5.051-.225 1.094-6.43 11.072v32.858h109.643v-14.288l-58.927-78.927c.661-4.348-1.368-30.68 1.427-30.715l2.5-7.858 15.358-35.712 22.5-22.858-.358-40-47.857 1.785v-.357l-33.213-23.57-21.43.355-16.427-21.428z'
          display='inline'
        ></path>
        <path
          id='south-deering'
          data-name='South Deering'
          fill='#6c6'
          d='M1404.307 889.717l-30.357 16.07-.074 10-55.64-.355-1.071-1.788-46.07 1.073-1.073 41.07-21.072 23.572-19.643 41.073-1.07 33.927 31.428 45.358 12.142 1.785 2.143 2.5 58.93-.358 2.142-1.07.358-31.072 1.785-1.428 3.93-.715 2.5 3.928 3.57 7.145 8.572 13.212 3.57.358 10.358 11.072c.393-24.14.357-70.357.357-70.357l10.715.357 2.5-1.072.713-4.285 21.072-1.073 1.785-2.142v-18.928l1.43-1.787 6.785-.355.358-62.858-1.43-3.215v-3.572l3.215-6.07.357-2.143 5-4.642.358-5-1.43-2.5-4.285-1.788.357-3.212-.357-10.358-8.928-10.357z'
          display='inline'
        ></path>
        <path
          id='hegewisch'
          data-name='Hegewisch'
          fill='#6c6'
          d='M1288.236 1147.93l-.714-12.856-27.143-34.286 12.857 1.071.715 1.429h60l.357-28.929 3.571-5.357 3.572.715 2.5 2.5-.357 3.928 7.857 11.072 3.928 6.428h5l8.929 9.286-.357-67.5 2.143-2.143 11.785.714.715-5 23.214-.714.357-20.714h7.857l.357 140.714z'
          display='inline'
        ></path>
        <path
          id='beverly'
          data-name='Beverly'
          fill='#f63'
          d='M991.385 960.477h10.102v-20.203h24.243l.506-63.64 22.223.505 14.142 17.173 29.294 67.175v6.061l-6.06 17.173-95.46 1.01z'
          display='inline'
        ></path>
        <path
          id='morgan-park'
          data-name='Morgan Park'
          fill='#f63'
          d='M1008.558 984.72h103.035l3.536-1.515 11.617 1.01v42.427l-47.477.505-1.01 22.728-63.64-.505 1.01-20.708-24.749-2.02.087-19.698h10.52l.505-21.213z'
          display='inline'
        ></path>
        <path
          id='washington-heights'
          data-name='Washington Heights'
          fill='#f63'
          d='M1062.096 894.312l30.305 68.185-.506 4.04-6.566 18.689 26.77-1.01 14.647-1.516-1.516-18.687 3.536-2.526 20.708-.505-.505-22.223 2.525-1.01v-4.041l-4.04-5.05-.505-30.305-24.749-.505-2.02-2.526h-2.526l-1.01 2.526-4.546-1.516v-3.03l4.041-3.03v-3.031l-40.406-.505-7.576 4.546v2.02z'
          display='inline'
        ></path>
      </g>
      <g id='layer5' display='inline' transform='translate(-644.597 -.157)'>
        <text
          id='text3497'
          x='992.599'
          y='74.454'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3499'
            x='992.599'
            y='74.454'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3501'
              x='992.599'
              y='74.454'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Roger&apos;s
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3505'
            x='992.599'
            y='89.454'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3507'
              x='992.599'
              y='89.454'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3521'
          x='984.413'
          y='167.033'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3523'
            x='984.413'
            y='167.033'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3525'
              x='984.413'
              y='167.033'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Lincoln
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3529'
            x='984.413'
            y='182.033'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3531'
              x='984.413'
              y='182.033'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Square
            </tspan>
          </tspan>
        </text>
        <text
          id='text3491'
          x='1043.559'
          y='146.937'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3493'
            x='1043.559'
            y='146.937'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3495'
              x='1043.559'
              y='146.937'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Edgewater
            </tspan>
          </tspan>
        </text>
        <text
          id='text3485'
          x='1058.772'
          y='196.845'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3487'
            x='1058.772'
            y='196.845'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3489'
              x='1058.772'
              y='196.845'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Uptown
            </tspan>
          </tspan>
        </text>
        <text
          id='text3533'
          x='882.837'
          y='170.458'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3535'
            x='882.837'
            y='170.458'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3537'
              x='882.837'
              y='170.458'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Albany Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3551'
          x='793.632'
          y='139.743'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3553'
            x='793.632'
            y='139.743'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3555'
              x='793.632'
              y='139.743'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Jefferson
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3559'
            x='793.632'
            y='154.743'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3561'
              x='793.632'
              y='154.743'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3860'
          x='767.148'
          y='214.799'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3862'
            x='767.148'
            y='214.799'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3864'
              x='767.148'
              y='214.799'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Portage Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3854'
          x='877.867'
          y='231.924'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3856'
            x='877.867'
            y='231.924'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3858'
              x='877.867'
              y='231.924'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Irving Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3830'
          x='1034.962'
          y='262.299'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3832'
            x='1034.962'
            y='262.299'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3834'
              x='1034.962'
              y='262.299'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Lakeview
            </tspan>
          </tspan>
        </text>
        <text
          id='text3812'
          x='767.71'
          y='315.547'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3814'
            x='767.71'
            y='315.547'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3816'
              x='767.71'
              y='315.547'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Belmont Cragin
            </tspan>
          </tspan>
        </text>
        <text
          id='text3818'
          x='922.148'
          y='308.785'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3820'
            x='922.148'
            y='308.785'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3822'
              x='922.148'
              y='308.785'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Logan Square
            </tspan>
          </tspan>
        </text>
        <text
          id='text3824'
          x='1064.273'
          y='320.518'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3826'
            x='1064.273'
            y='320.518'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3828'
              x='1064.273'
              y='320.518'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Lincoln Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3800'
          x='799.273'
          y='389.799'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3802'
            x='799.273'
            y='389.799'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3804'
              x='799.273'
              y='389.799'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Austin
            </tspan>
          </tspan>
        </text>
        <text
          id='text3788'
          x='879.992'
          y='384.08'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3790'
            x='879.992'
            y='384.08'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3792'
              x='879.992'
              y='384.08'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Humboldt
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3796'
            x='879.992'
            y='399.08'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3798'
              x='879.992'
              y='399.08'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text3782'
          x='998.428'
          y='388.923'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3784'
            x='998.428'
            y='388.923'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3786'
              x='998.428'
              y='388.923'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              West Town
            </tspan>
          </tspan>
        </text>
        <text
          id='text3770'
          x='1104.987'
          y='376.924'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3772'
            x='1104.987'
            y='376.924'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3774'
              x='1104.987'
              y='376.924'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Near North
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan3778'
            x='1104.987'
            y='391.924'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan3780'
              x='1104.987'
              y='391.924'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Side
            </tspan>
          </tspan>
        </text>
        <text
          id='text4148'
          x='916.854'
          y='441.018'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4150'
            x='0'
            y='0'
            fontSize='11'
          ></tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4156'
            x='916.854'
            y='456.018'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4158'
              x='916.854'
              y='456.018'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Garfield
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4162'
            x='916.854'
            y='471.018'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4164'
              x='916.854'
              y='471.018'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text4142'
          x='1027.631'
          y='490.921'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4144'
            x='1027.631'
            y='490.921'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4146'
              x='1027.631'
              y='490.921'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Near West Side
            </tspan>
          </tspan>
        </text>
        <text
          id='text4136'
          x='1144.273'
          y='460.518'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4138'
            x='1144.273'
            y='460.518'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4140'
              x='1144.273'
              y='460.518'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Loop
            </tspan>
          </tspan>
        </text>
        <text
          id='text4118'
          x='1164.429'
          y='509.518'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4120'
            x='1164.429'
            y='509.518'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4122'
              x='1164.429'
              y='509.518'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Near
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4126'
            x='1164.429'
            y='524.518'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4128'
              x='1164.429'
              y='524.518'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4132'
            x='1164.429'
            y='539.518'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4134'
              x='1164.429'
              y='539.518'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Side
            </tspan>
          </tspan>
        </text>
        <text
          id='text4100'
          x='1165.632'
          y='628.342'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4102'
            x='1165.632'
            y='628.342'
            fontSize='11'
          >
            Bronzeville{" "}
          </tspan>
        </text>
        <text
          id='text4094'
          x='1078.586'
          y='572.643'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4096'
            x='1078.586'
            y='572.643'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4098'
              x='1078.586'
              y='572.643'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Bridgeport
            </tspan>
          </tspan>
        </text>
        <text
          id='text4082'
          x='927.354'
          y='641.236'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4084'
            x='927.354'
            y='641.236'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4086'
              x='927.354'
              y='641.236'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Brighton
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4090'
            x='927.354'
            y='656.236'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4092'
              x='927.354'
              y='656.236'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text4046'
          x='915.051'
          y='722.911'
          strokeWidth='0.986'
          display='inline'
          fontFamily='DejaVu Sans'
          fontSize='11.829'
          fontStretch='normal'
          fontStyle='normal'
          fontWeight='normal'
          transform='scale(1.01444 .98577)'
          style={{ lineHeight: "0%" }}
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4048'
            x='915.051'
            y='722.911'
            strokeWidth='0.986'
            fontSize='10.843'
          >
            <tspan
              style={{}}
              id='tspan4050'
              x='915.051'
              y='722.911'
              strokeWidth='0.986'
              fontFamily='DejaVu Sans'
              fontSize='10.843'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Gage Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text4445'
          x='914.869'
          y='542.171'
          style={{ lineHeight: "0%" }}
          display='inline'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4447'
            x='914.869'
            y='542.171'
            fontSize='11'
          >
            <tspan id='tspan4449' x='914.869' y='542.171' fontSize='11'>
              Lawndale
            </tspan>
          </tspan>
        </text>
        <text
          id='text4550'
          x='1062.495'
          y='757.437'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4552'
            x='1062.495'
            y='757.437'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4554'
              x='1062.495'
              y='757.437'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Englewood
            </tspan>
          </tspan>
        </text>
        <text
          id='text4538'
          x='933.073'
          y='767.83'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4540'
            x='933.073'
            y='767.83'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4542'
              x='933.073'
              y='767.83'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Chicago
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4546'
            x='933.073'
            y='782.83'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4548'
              x='933.073'
              y='782.83'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Lawn
            </tspan>
          </tspan>
        </text>
        <text
          id='text4716'
          x='1150.711'
          y='808.361'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4718'
            x='1150.711'
            y='808.361'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4720'
              x='1150.711'
              y='808.361'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Greater Grand
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4724'
            x='1150.711'
            y='823.361'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4726'
              x='1150.711'
              y='823.361'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Crossing
            </tspan>
          </tspan>
        </text>
        <text
          id='text4706'
          x='1259.992'
          y='796.924'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4708'
            x='1259.992'
            y='796.924'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4710'
              x='1259.992'
              y='796.924'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South{" "}
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4712'
            x='1259.992'
            y='811.924'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4714'
              x='1259.992'
              y='811.924'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Shore
            </tspan>
          </tspan>
        </text>
        <text
          id='text4700'
          x='932.429'
          y='854.643'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4702'
            x='932.429'
            y='854.643'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4704'
              x='932.429'
              y='854.643'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Ashburn
            </tspan>
          </tspan>
        </text>
        <text
          id='text4694'
          x='1152.867'
          y='858.361'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4696'
            x='1152.867'
            y='858.361'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4698'
              x='1152.867'
              y='858.361'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Chatham
            </tspan>
          </tspan>
        </text>
        <text
          id='text4670'
          x='1321.434'
          y='856.21'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4672'
            x='1321.434'
            y='856.21'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4674'
              x='1321.434'
              y='856.21'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4678'
            x='1321.434'
            y='871.21'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4680'
              x='1321.434'
              y='871.21'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Chicago
            </tspan>
          </tspan>
        </text>
        <text
          id='text4850'
          x='1255.411'
          y='882.97'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4852'
            x='1255.411'
            y='882.97'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4854'
              x='1255.411'
              y='882.97'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Calumet
            </tspan>
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4858'
            x='1255.411'
            y='897.97'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4860'
              x='1255.411'
              y='897.97'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Heights
            </tspan>
          </tspan>
        </text>
        <text
          id='text7173'
          x='1054.034'
          y='657.181'
          style={{ lineHeight: "0%" }}
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7175'
            x='1054.034'
            y='657.181'
            fontSize='11'
          >
            New City
          </tspan>
        </text>
        <text
          id='text7207'
          x='1210.873'
          y='720.247'
          style={{ lineHeight: "0%" }}
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7209'
            x='1210.873'
            y='720.247'
            fontSize='11'
          >
            Hyde
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7211'
            x='1210.873'
            y='733.997'
            fontSize='11'
          >
            Park
          </tspan>
        </text>
        <text
          id='text4985'
          x='1007.867'
          y='962.643'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4987'
            x='1007.867'
            y='962.643'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4989'
              x='1007.867'
              y='962.643'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Beverly
            </tspan>
          </tspan>
        </text>
        <text
          id='text4973'
          x='1155.483'
          y='1019.76'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4975'
            x='1155.483'
            y='1019.76'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4977'
              x='1155.483'
              y='1019.76'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Pullman
            </tspan>
          </tspan>
        </text>
        <text
          id='text4967'
          x='1287.286'
          y='998.283'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan4969'
            x='1287.286'
            y='998.283'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan4971'
              x='1287.286'
              y='998.283'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South Deering
            </tspan>
          </tspan>
        </text>
        <text
          id='text7293'
          x='1057.001'
          y='851.482'
          style={{ lineHeight: "0%" }}
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7295'
            x='1057.001'
            y='851.482'
            fontSize='11'
          >
            Auburn
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7297'
            x='1057.001'
            y='865.232'
            fontSize='11'
          >
            Gresham
          </tspan>
        </text>
        <text
          id='text7353'
          x='1079.144'
          y='924.768'
          style={{ lineHeight: "0%" }}
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7355'
            x='1079.144'
            y='924.768'
            fontSize='11'
          >
            Washington
          </tspan>
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan7357'
            x='1079.144'
            y='938.518'
            fontSize='11'
          >
            Heights
          </tspan>
        </text>
        <text
          id='text5126'
          x='1017.429'
          y='1016.518'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan5128'
            x='1017.429'
            y='1016.518'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan5130'
              x='1017.429'
              y='1016.518'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Morgan Park
            </tspan>
          </tspan>
        </text>
        <text
          id='text5108'
          x='1317.992'
          y='1132.924'
          style={{ lineHeight: "0%" }}
          display='inline'
          fontFamily='DejaVu Sans'
          fontStretch='normal'
          fontStyle='normal'
          fontVariant='normal'
          fontWeight='normal'
          xmlSpace='preserve'
        >
          <tspan
            style={{ lineHeight: "1.25" }}
            id='tspan5110'
            x='1317.992'
            y='1132.924'
            fontSize='11'
          >
            <tspan
              style={{}}
              id='tspan5112'
              x='1317.992'
              y='1132.924'
              fontFamily='DejaVu Sans'
              fontSize='11'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Hegewisch
            </tspan>
          </tspan>
        </text>
      </g>
      {/* <g id='layer2' display='inline' transform='translate(-645.972 -.28)'>
        <path
          id='rect4015'
          style={{ marker: "none" }}
          fill='#e6e6e6'
          fillOpacity='0'
          fillRule='evenodd'
          stroke='#333'
          strokeDasharray='none'
          strokeDashoffset='0'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='4'
          strokeOpacity='1'
          strokeWidth='2.117'
          d='M647.781 1.517H1499.44V1198.461H647.781z'
          color='#000'
          display='inline'
          enableBackground='accumulate'
          overflow='visible'
          visibility='visible'
        ></path>
      </g> */}
    </svg>
  );
}

export default NeighborhoodMap;