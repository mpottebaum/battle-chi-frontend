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
          fill={props.determineNeighborhoodFill('Portage Park')}
          stroke={props.determineZoneStroke('Portage Park')}
          d='M792.906 184.662l-.5 2.562-31.75.938-1.625-.438.25 10-.25 9.688.5.062 1.563 4.5v22.188h22.187l2.063 2.562 1 9.063 1 2.562 1 25.25-1 1.5.5 1.5 85.375-1 1-35.375-2.563-3-1-8.125-1.5-2v-3l-3-3.562-.687-2h.125l-.25-.25-.25-.75-.688-.188-1.812-1.875-2-2.5 1-10.125-2.563-4-2.5-.562v-5.5l-3.062-4.063h-8.563l-35.875 1-3-4.562z'
          display='inline'
        ></path>
        <path
          id='albany-park'
          data-name='Albany Park'
          fill={props.determineNeighborhoodFill('Albany Park')}
          stroke={props.determineZoneStroke('Albany Park')}
          d='M917.645 103.363v2.02l-6.062.506-1.01 3.535-5.555 3.03-8.082 7.071 1.01 8.586-3.535.506-9.596 1.01-.506 14.142-1.01 1.514-23.738.506-1.012 21.719h-1.01l.507 18.181v2.022l23.738-.506-.506.506 2.021 2.02v4.04l5.555 3.03 4.547 3.031 3.535 4.041h2.526l6.06 6.06h36.365l1.516-3.535 39.9 1.01 5.557.506 3.031 1.01-1.012-6.567-7.07-7.07-2.02-3.031-2.525-3.031-7.072-7.07-2.525-2.02-1.01-9.598-2.026-.105-1.51-24.643-4.546-6.566-2.02-2.02.506-4.04-2.021-3.536v-5.05l-1.516-4.548-3.03-4.039.505-12.123z'
          display='inline'
        ></path>
        <path
          id='irving-park'
          data-name='Irving Park'
          fill={props.determineNeighborhoodFill('Irving Park')}
          stroke={props.determineZoneStroke('Irving Park')}

          d='M845.418 187.205l34.85 1.01 3.536 4.041 6.061 6.06 12.122 9.597 2.525 1.516 37.88 1.01 1.75-3.24 42.698.21 4.545.504-.505 5.556 2.526 3.03v15.153l-2.02 2.525-4.546 6.566v11.617l-78.792 1.515 1.515 22.224-36.366-1.01v-35.356l-2.525-10.101-9.596-14.142.505-12.122-4.546-4.04v-7.577l-2.02-.505-1.516-1.515z'
          display='inline'
        ></path>
        <path
          id='jefferson-park'
          data-name='Jefferson Park'
          fill={props.determineNeighborhoodFill('Jefferson Park')}
          stroke={props.determineZoneStroke('Jefferson Park')}

          d='M780.264 49.824l-2.525 2.526-.506 5.556h-20.709l-2.02 2.526.506 2.525 2.02 2.525 7.576 8.586 2.02-.506 2.525 2.526v5.05l-8.08 4.042-8.586 4.04 1.514 3.03 2.525 4.041 9.092-.504 4.547-8.082 4.545.506 1.01 4.545 1.515 2.02c.009 13.382 31.565 7.562-6.06 6.566v3.031l2.019 2.525h4.041l4.041 5.051-.506 29.295-1.515 3.03-22.223-1.01-1.01 2.02-.506 41.921h36.871l1.516-2.02h11.617l4.545 4.545 36.365-.505v-1.998l11.618.484-2.022-20.203c6.14-5.601 3.537-14.53 3.537-22.225h23.233l2.021-2.525v-13.131h10.102l2.523-2.022-1.01-8.08 16.668-13.132 1.01-2.02-1.514-.506h-66.166l-3.03-2.02-1.515-3.03-3.537-2.02-5.05-3.031-6.565-3.03-4.547-.506 1.516-15.152.506-6.06-15.659.505v10.102h-5.556l-4.04-3.537v-6.565l-2.525-2.021V63.46l-1.515-3.535-.506-1.01h-2.525l-1.514-1.01-4.547-.506-.504-7.576z'
          display='inline'
        ></path>
        <path
          id='rogers-park'
          data-name="Roger's Park"
          fill={props.determineNeighborhoodFill("Roger's Park")}
          stroke={props.determineZoneStroke("Roger's Park")}

          d='M1038.862 27.096v3.535l8.082 7.072h1.516l-28.416.488-63.004-1.498v62.123l-4.545 4.547v12.121l4.04 8.586v7.073l7.071 12.626 41.922.504-.506-23.232 36.871 1.01v-19.7l50.508-.503-1.516-9.092-2.02-4.545v-9.092l4.04-1.01-1.01-2.525-4.545-2.525v-3.536l-2.525-2.525-5.557-5.557v-3.535l-2.525-4.04-2.02-4.546-2.021-3.031v-2.02l-2.02-1.515v-9.598l-5.05-6.06z'
          display='inline'
        ></path>
        <path
          id='edgewater'
          data-name='Edgewater'
          fill={props.determineNeighborhoodFill('Edgewater')}
          stroke={props.determineZoneStroke('Edgewater')}

          d='M1042.398 100.332l1.515 65.66 62.63-.505 2.525-4.04 4.546.504-10.102-9.091-.505-7.576 2.526-1.515-.506-3.03 4.546-5.052h-3.03l-6.061-4.545h-5.051l-1.515-30.305z'
          display='inline'
        ></path>
        <path
          id='lincoln-square'
          data-name='Lincoln Square'
          fill={props.determineNeighborhoodFill('Lincoln Square')}
          stroke={props.determineZoneStroke('Lincoln Square')}

          d='M964.616 143.769h41.922v-23.234l36.87 1.515v85.358H990.88v-5.05l-10.606-10.607-1.516-3.536-9.596-7.576-1.01-11.617-3.03-4.04z'
          display='inline'
        ></path>
        <path
          id='uptown'
          data-name='Uptown'
          fill={props.determineNeighborhoodFill('Uptown')}
          stroke={props.determineZoneStroke('Uptown')}

          d='M1043.408 165.487l61.62.505 3.535-4.04 5.556-1.01-4.546 2.525-.505 9.596 2.02 5.05 10.102 9.597 4.546 4.546h2.02l7.576 5.05 6.06 1.01 1.011 1.516 10.102-.505 2.525-5.05v5.555l-2.02 7.071v3.03l-5.556 6.062-4.546 2.525-3.03 1.01h-3.536l-4.04-4.04 2.02-2.02 9.091.504 3.536-4.545-4.04-2.02-4.547-1.516h-8.586l-2.02 2.02-2.02 6.061v6.061l1.515 1.515-.505 8.082h-53.538l-.505-7.577-11.112-13.131-18.183-.506z'
          display='inline'
        ></path>
        <path
          id='lakeview'
          data-name='Lakeview'
          fill={props.determineNeighborhoodFill('Lakeview')}
          stroke={props.determineZoneStroke('Lakeview')}

          d='M1044.907 208.412l-53-.5v5.063l1.5 2.5.5 16.187-2.5 2.5-4.563 8.625.5 13.125 2 1v3l10.625 12.625 7.063 8.125 5.062 5.063 10.625 8.562h22.688m0 0l107.098-1.016 3.535-2.02-.504-3.536-2.022-3.03-2.525-4.546-1.01-3.536v-8.585l-2.525-3.536-5.557 7.07-3.03-.503-7.07-9.598-3.03-3.535.505-8.082 3.535 2.021 3.03 1.516 4.546 5.05 3.03 1.01 6.06.504-1.513-4.039-22.729-26.265-52.53-.504-1.009-1.516v-7.07l-10.102-11.113-16.683-1.016'
          display='inline'
          imageRendering='auto'
        ></path>
        <path
          id='belmont-cragin'
          data-name='Belmont Cragin'
          fill={props.determineNeighborhoodFill('Belmont Cragin')}
          stroke={props.determineZoneStroke('Belmont Cragin')}

          d='M751.452 275.074v2.11l-37.858-1.752-2.857 3.212 1.428 45h5.714l10 6.43 6.428 1.428 7.145 2.142 5 4.288h4.285c1.07-1.073.356 1.072 0 0l9.285 3.57h39.285l4.287-2.143 14.285.715 25 .713 7.143.715 8.572 2.857 7.858 1.428 7.746 1.293.01.74 2.525 1.514 47.983.506-3.032-4.041-.503-2.526-1.01-2.525v-3.03l-8.082-6.062v-15.152l-11.112-14.14-.505-7.073-8.586-15.656v-4.041h-18.688c.02.006 0 0 0 0z'
          display='inline'
        ></path>
        <path
          id='austin'
          data-name='Austin'
          fill={props.determineNeighborhoodFill('Austin')}
          stroke={props.determineZoneStroke('Austin')}

          d='M711.808 323.288l6.786.714 8.571 6.072 14.464 3.214 4.465 4.643 5.714-1.072 7.143 3.929 32.5.714h7.857l3.928-1.964 11.072-.179 37.143 2.143 22.143 6.429 2.857 4.286-2.143 30 1.428 29.285.715 13.572 1.428 20.714v5l-3.571 2.143 2.143 5.714 2.143 1.429.714 17.143-2.143 5-2.857 5.714-.714 3.571H791.45l-.715-127.857-78.571-1.428z'
          display='inline'
        ></path>
        <path
          id='logan-square'
          data-name='Logan Square'
          fill={props.determineNeighborhoodFill('Logan Square')}
          stroke={props.determineZoneStroke('Logan Square')}

          d='M909.563 253.371V276.1H891.38l-.504 2.525 9.097 16.28.498 8.468 5.557 6.06 6.06 8.586 1.01 14.649 6.06 5.05 1.013 6.565 3.029 6.063 99.5-.506 1.01-2.526h43.437l2.525-2.525 1.516-3.031-2.525-5.555-10.608-12.123-8.082-1.01-6.06-5.554-1.516-6.063-7.07-5.05-6.567-1.514-1.515-4.041-3.535-5.557c-.907.012-.605-1.714-1.01-2.525l-16.162-11.616-15.659-19.699-2.019-4.04-2.525-4.04z'
          display='inline'
        ></path>
        <path
          id='humboldt-park'
          data-name='Humboldt Park'
          fill={props.determineNeighborhoodFill('Humboldt Park')}
          stroke={props.determineZoneStroke('Humboldt Park')}

          d='M875.723 349.84l-.505 73.236 3.535 4.04 56.064.506 2.02-2.02h64.65l-.505-10.102-15.153-12.122-11.616-1.515v-8.587l-2.02-1.515h-2.526l-1.01 1.515h-5.051v-5.05l-2.525-3.03.505-23.234 4.545-1.516 10.102-.505v-2.525l1.515-1.01-2.02-6.566z'
          display='inline'
        ></path>
        <path
          id='west-town'
          data-name='West Town'
          fill={props.determineNeighborhoodFill('West Town')}
          stroke={props.determineZoneStroke('West Town')}

          d='M975.728 349.84l2.02 2.525v4.546l-2.525 2.525H963.1l-1.01 3.03-.505 23.234 2.525 2.526-.505 5.05 4.546.505 2.525-2.525h2.526l1.515 2.525.505 8.082 10.101-.505 3.03 2.525 8.082 7.071 4.546 4.04v9.597l5.05 1.01 126.27-2.02-1.516-3.536-3.03-2.525-.505-3.03-4.04-3.03-2.021-5.052v-8.586h-11.617l-9.091-8.586h-5.556l-9.597-11.112v-13.132l5.051-4.546-1.515-10.101-4.04-5.556-4.546-1.515h-9.092l-4.545 4.545-43.942-1.01.505 1.516z'
          display='inline'
        ></path>
        <path
          id='garfield-park'
          data-name='Garfield Park'
          fill={props.determineNeighborhoodFill('Garfield Park')}
          stroke={props.determineZoneStroke('Garfield Park')}

          d='M937.342 425.096l-1.515 3.03-9.092-.505h-.504l-48.488 1.01v15.152l-.504 4.041v2.526l-2.022.505-.504 5.051 5.555 5.051-.504 14.646-2.021 3.032.506 3.535h6.06l5.051-4.545 6.06-2.022 1.516 2.022v3.03l4.545 2.02 27.78.505v-4.545h31.82l4.04 3.029h36.366v-32.83h0v-13.637h0v-4.04l2.02-.505v-4.547l-2.526-.503z'
          display='inline'
        ></path>
        <path
          id='lincoln-park'
          data-name='Lincoln Park'
          fill={props.determineNeighborhoodFill('Lincoln Park')}
          stroke={props.determineZoneStroke('Lincoln Park')}

          d='M1025.736 293.288h127.143l.715 5 1.428 5.357.357 6.429 1.786 6.071v3.929l2.857 6.428 1.429 3.572 1.785 3.214v2.857l1.786 1.429v3.928l8.214 8.215h2.5l1.786-2.143 3.214.357 1.072-2.5h1.428l.358 5-2.5 1.428h-1.786l-1.429 1.786-2.5.357-1.785 2.143-3.215-.357-1.071 2.143h-80.357v-6.429l-1.786-1.785v-2.143l-2.5-1.786-3.929-.357-1.071-2.143h-8.929v-2.143l-2.142-1.786v-3.571l-9.643-10.714-7.857-1.429-8.215-7.5v-2.857l-6.071-6.786-7.5-.714-.714-3.214-1.429-.357v-3.572l-2.143-1.786z'
          display='inline'
        ></path>
        <path
          id='near-north-side'
          data-name='Near North Side'
          fill={props.determineNeighborhoodFill('Near North Side')}
          stroke={props.determineZoneStroke('Near North Side')}

          d='M1089.656 357.6l.313.124-.688 1.625-2.125 2.5v1.438l-2.125 2.5v11.437l1.75 2.875 2.5 3.188 3.625 2.5 2.5 3.562 5 .375 2.813 2.5 5.75 5.375 10 .313 1.437 1.812.688 8.563h2.125v1.812l1.812 1.375.375 1.813 1.375 2.125 2.188 1.812v2.5l2.125 2.125 1.812 2.125 4.625 6.125 5.688-.75v-1.062h2.5l1.437-2.5h3.25l4.625 3.937h4.25l1.813-2.125 6.437-3.625 13.938-.312 2.812 1.437 12.5.313 2.188-1.75.312-3.938 2.188.375 2.5 1.375 5 .75 2.125-3.562 18.937.312 5-1.062v-3.188l3.938-.375-1.438-2.125h-10.375l-1.75-2.5v-5l-1.812-1.812-15.375-.313-3.188 1.375.375 2.188-1.812 1.75-2.5 4.312-1.813-1.062-3.875-5.75-1.812-2.813-1.813-1.812s-2.09-3.598-3.875-6.813l-.375-1.375-2.125-2.875-3.937-3.562-3.563-2.875-3.937-3.188-2.5-2.875v-7.5l-1.813-4.312-.375-7.813h-79.25z'
          display='inline'
        ></path>
        <path
          id='lawndale'
          data-name='Lawndale'
          fill={props.determineNeighborhoodFill('Lawndale')}
          stroke={props.determineZoneStroke('Lawndale')}

          d='M897.165 475.787l-5.358 1.787-5.713 1.785-6.787 3.215.358 67.143h.357l1.43 80.715 2.5 2.5 127.855-50.358-1.785-71.43-.715-.357-.355-12.5-7.858-9.285-.715-7.5-32.142.357-2.5-1.785-2.5-2.5-33.93.713v4.287l-13.57-.715-18.572-.357z'
          display='inline'
        ></path>
        <path
          id='near-west-side'
          data-name='Near West Side'
          fill={props.determineNeighborhoodFill('Near West Side')}
          stroke={props.determineZoneStroke('Near West Side')}

          d='M1001.887 423.81l.278 21.264-.928 31.875-.143 11.695 7.5 8.93 1.428 12.5.363-.004 1.067 72.861 18.928-6.43 33.214-.714 2.858-2.5 3.213-.713v-12.5l17.142-17.5h25l13.573-4.643.357-2.144 19.642-20 2.5-2.143-.714-5 .357-1.785-.715-20.715-1.428-5.713-2.142-10.714-3.215-7.5-2.5-6.073v-26.07l-5-6.072h-125.357zm-.65 53.14l.57-46.659-.713 51.568z'
          display='inline'
        ></path>
        <path
          id='loop'
          data-name='Loop'
          fill={props.determineNeighborhoodFill('Loop')}
          stroke={props.determineZoneStroke('Loop')}

          d='M1137.165 429.717l.714 26.428 5 13.214 2.5 10 .357 7.143h41.072l6.071-5-.714-35.714 7.143-6.429-.357-11.428-2.5-2.5-12.143-.357-4.286-1.786-14.286.714-6.785 5h-4.643l-3.572-3.214-3.571-.357-4.286 3.928z'
          display='inline'
        ></path>
        <path
          id='near-south-side'
          data-name='Near South Side'
          fill={props.determineNeighborhoodFill('Near South Side')}
          stroke={props.determineZoneStroke('Near South Side')}

          d='M1147.522 486.502h40.714l5-3.928 7.858 4.285 20 .715v5.357l-5.715 3.571v5l1.786 2.5.714 3.572-2.5 3.214v18.214h-6.071l-.357-16.428-2.5-1.786.357-17.5-7.857.714 1.071 13.572 3.929 3.928v4.286l-3.215 1.429 1.072 6.428 2.143 4.286 1.071 10.357 4.286 7.857 2.5 6.429-55.357-.357v-6.429l4.285-5.357-.357-11.072-2.857-3.928-.357-7.5-3.571-3.572-6.072-.714z'
          display='inline'
        ></path>
        <path
          id='bridgeport'
          data-name='Bridgeport'
          fill={props.determineNeighborhoodFill('Bridgeport')}
          stroke={props.determineZoneStroke('Bridgeport')}

          d='M1148.95 512.574l-2.143 1.785-22.142 21.428c-.137 2.788 2.042 6.845-1.07 3.215l-6.43 2.142-28.57 1.073-19.288 17.5v11.07l3.215 2.857 1.43 3.573 13.928 14.642v26.428l15.357-.355 4.643-1.073h33.214l.713-.357h17.5v-19.643l-1.785-3.215-1.072-47.5 4.287-4.285v-11.072l-2.857-3.928-1.073-10.715-.713-1.785-3.93-.357z'
          display='inline'
        ></path>
        <path
          id='bronzeville'
          data-name='Bronzeville'
          fill={props.determineNeighborhoodFill('Bronzeville')}
          stroke={props.determineZoneStroke('Bronzeville')}

          d='M1208.594 552.217l-52.144.715.357 41.427 2.143 1.785.346 20.004-.346-.004.357 15 1.073 49.287 56.425.71.717 1.076 61.785-2.143 3.215-4.643-.715-1.787-13.928-12.142v-3.928l-2.142-1.43-.358-3.57-15.357-13.93s3.928 0 0 0h3.928l-10-10.713-10.356-15.714-8.215-16.786-.714-1.43-1.428-6.427-5.715-8.93v-7.142l-8.928-11.785z'
          display='inline'
        ></path>
        <path
          id='new-city'
          data-name='New City'
          fill={props.determineNeighborhoodFill('New City')}
          stroke={props.determineZoneStroke('New City')}

          d='M1065.38 574.002l-6.428 2.142-30 1.073-17.5 5.357.355 26.07 6.543 9.641-.113.002-.358 54.645 12.5-1.43 2.5 1.785v29.645h108.217l-.002.355 19.285 1.072-1.072-72.142-1.07-4.643v-11.072l-17.143-.715.031 1.44-52.906.457-.34-25.11-1.785-1.787-13.93-16.428z'
          display='inline'
        ></path>
        <path
          id='brighton-park'
          data-name='Brighton Park'
          fill={props.determineNeighborhoodFill('Brighton Park')}
          stroke={props.determineZoneStroke('Brighton Park')}

          d='M944.665 672.574h73.572l.357-53.215-5.715-10.715-.357-26.07-68.215 25.713m0 0l-61.428 24.287.715 68.928 9.285-6.785 14.643-.358 37.143-21.785'
          display='inline'
        ></path>
        <path
          id='gage-park'
          data-name='Gage Park'
          fill={props.determineNeighborhoodFill('Gage Park')}
          stroke={props.determineZoneStroke('Gage Park')}

          d='M947.165 673.644l-1.428-1.427-37.858 22.142-.357-.357-16.428 1.43-6.787 5.355v27.857l62.145 1.073m0 0h87.142l-1.072-56.073h-85.357'
          display='inline'
        ></path>
        <path
          id='chicago-lawn'
          data-name='Chicago Lawn'
          fill={props.determineNeighborhoodFill('Chicago Lawn')}
          stroke={props.determineZoneStroke('Chicago Lawn')}

          d='M883.952 727.932l-.715 44.285-10 .715.357 44.285 1.785 4.285v2.857l48.573-.715.355-23.57 4.287.713 3.928 2.857 3.215 1.43 2.142 2.5 3.928 1.785 7.5 2.5.715.358 86.072 1.07.358-21.07-2.858-2.858-.357-60-86.785.358v-1.43z'
          display='inline'
        ></path>
        <path
          id='englewood'
          data-name='Englewood'
          fill={props.determineNeighborhoodFill('Englewood')}
          stroke={props.determineZoneStroke('Englewood')}

          d='M1093.594 703.644l-60.357-.712.357 86.07 1.786 1.43.357 21.07 35.357-.358 1.07 2.5h5l2.858-3.212 2.858.355 1.785 1.072 12.857.358m0 0l21.428.357 2.5 1.428v4.642l12.857-.357v-5.713l1.787-2.5h4.286l3.57-3.572 2.857-3.928 1.787-24.642 3.57-1.788 2.143-1.785v-5.357l1.787-3.215.356-18.57 3.215-2.143v-7.142l1.785-2.145-1.785-32.143h-66.07'
          display='inline'
        ></path>
        <path
          id='hyde-park'
          data-name='Hyde Park'
          fill={props.determineNeighborhoodFill('Hyde Park')}
          stroke={props.determineZoneStroke('Hyde Park')}

          d='M1279.307 680.432l-63.213 1.427v1.075l-1.072-2.147h-53.928v55.357h5.713l2.143 3.573v5.357l13.215.358 2.5-.715 7.142-.34.715 20.34 25.715 23.927-.715-20.357 2.5-1.785 96.785-1.428-5.357-6.072-2.856-5-5.357-3.928h-4.287v2.143l2.144 1.785.356 4.285h-5.356l-.357-1.785-2.143-2.143v-4.285l1.786-2.857 15-5.358-.358-1.785-11.072-.357-9.643-8.215v-3.922l.715-.006.358-3.215-1.073-7.857-6.785-8.57 5-6.073 5.715-2.142v-5l-9.287-1.43-4.285-4.285z'
          display='inline'
        ></path>
        <path
          id='ashburn'
          data-name='Ashburn'
          fill={props.determineNeighborhoodFill('Ashburn')}
          stroke={props.determineZoneStroke('Ashburn')}

          d='M877.165 825.074l-.357 55.357 108.571-1.072 39.643-2.5 23.572.715-3.929-6.072-4.286-6.428-5-5.715v-46.071l-86.785-.357-23.929-13.214-.714 23.928z'
          display='inline'
        ></path>
        <path
          id='auburn-gresham'
          data-name='Auburn Gresham'
          fill={props.determineNeighborhoodFill('Auburn Gresham')}
          stroke={props.determineZoneStroke('Auburn Gresham')}

          d='M1036.45 811.502l35 .357 3.215 3.572 3.571-1.429 1.072-1.428 40-.715 2.5 2.143v4.643l12.857.714.357 35 6.072-.714h3.928l2.143 3.929-1.786 38.214-.714 2.143h-23.214l-.715-2.857-3.214.357-1.428 2.143-3.572-.357v-5.715l2.857-2.143-.357-2.5-38.214-.357-5.714 1.072-3.572 5.714-6.071.357-26.072-33.571z'
          display='inline'
        ></path>
        <path
          id='chatham'
          data-name='Chatham'
          fill={props.determineNeighborhoodFill('Chatham')}
          stroke={props.determineZoneStroke('Chatham')}

          d='M1134.308 831.145v22.857l2.143 1.786 3.571-.714 1.786-1.786 3.571 1.071 1.429 3.215.714 15 21.072 24.285 20.357-1.785 8.928 7.857 11.429 6.786 15 8.571-.714-12.143 1.071-4.643 1.071-11.785 4.286-6.072 1.786-5.357 2.5-5 8.571-1.786-2.857-4.285v-23.572l1.429-3.928-.357-8.929-93.572.357z'
          display='inline'
        ></path>
        <path
          id='greater-grand-crossing'
          data-name='Greater Grand Crossing'
          fill={props.determineNeighborhoodFill('Greater Grand Crossing')}
          stroke={props.determineZoneStroke('Greater Grand Crossing')}

          d='M1133.95 832.217l.358-20 1.786-2.143h5l2.5-3.929 2.5-2.5V786.86l1.785-2.5v-6.428l2.5-2.5h3.929l1.071-8.214.715-2.858.714-17.142 3.214-1.786.357-8.572h7.5l.715 2.143 1.428 6.786h12.857l3.572-1.071 5.357.714v19.286l25.714 22.857.714-20 35-.715.358 17.858-4.286 3.214v10l-5.714 4.643v7.857l2.5 1.428-.358 3.215-5 3.571.358 6.072 2.142 1.071-.357 5h-25.357l-2.143 1.429z'
          display='inline'
        ></path>
        <path
          id='south-shore'
          data-name='South Shore'
          fill={props.determineNeighborhoodFill('South Shore')}
          stroke={props.determineZoneStroke('South Shore')}

          d='M1253.594 765.43l65-.713 1.785 3.214h4.286l2.5 2.857.714 7.143 7.857-.714v-2.143l2.5.714-1.071 6.786-1.786.714h-2.143l-1.785 2.5.357 5 9.643 8.571 8.928.715.715 3.214 2.857 2.143h22.143l5 6.071v2.143l-2.5 2.143-2.858 1.786-2.5 2.5-2.142 1.428-2.143 1.786h-10.715l-4.642 4.643h-26.072l-2.5 1.428-55 1.072-22.857-18.572-3.214-2.5-.357-6.785 5.357-5.357.357-8.929 3.928-4.286z'
          display='inline'
        ></path>
        <path
          id='calumet-heights'
          data-name='Calumet Heights'
          fill={props.determineNeighborhoodFill('Calumet Heights')}
          stroke={props.determineZoneStroke('Calumet Heights')}

          d='M1245.38 810.432l.357 4.642-4.643 3.213-.357 4.645 2.5 1.785.357 3.215-2.144 2.142.357 10.713-3.213 1.787.713 22.143 1.787 3.927v2.858l2.08 1.389-6.724-.674-2.856 1.07v3.215l-2.5 1.43v2.142l-1.43 3.213-1.784 2.857-2.5 3.215v13.573l-2.5 16.07 42.5-.715v-.713h4.285l2.5-4.642 44.642.712.715 1.788 48.572-.358-47.093-41.076.664.004zm-1.622 62.845l.55.367h-.378z'
          display='inline'
        ></path>
        <path
          id='south-chicago'
          data-name='South Chicago'
          fill={props.determineNeighborhoodFill('South Chicago')}
          stroke={props.determineZoneStroke('South Chicago')}

          d='M1268.236 830.43l57.5-.356 2.5-2.5 25.715.357 5-4.643 11.785.714 5.715 6.072h11.428l1.786 1.785h3.571l3.215 1.786 2.857.357.714 1.429h2.5l5 7.857v17.143l-20.357-.357-2.143 1.785 1.786 1.072 21.071.357 1.429 2.857v3.214l1.786 2.858v9.285l-3.929 3.929h-3.929l-1.071 1.786h-5l-.714 2.5-6.429-.715-3.214-3.214-1.786-.357v1.428l3.929 4.643v2.143l-13.572 11.429-1.428 1.071v9.643l-7.5-.714z'
          display='inline'
        ></path>
        <path
          id='pullman'
          data-name='Pullman'
          fill={props.determineNeighborhoodFill('Pullman')}
          stroke={props.determineZoneStroke('Pullman')}

          d='M1146.45 874.002v21.785l-1.428.715v2.857l1.785.715 1.072 28.928 3.215 5v3.93l-1.787-.358v23.928l-21.785.357-.715 64.285s-.061.498-47.033 1.508l.504 41.922 1.516 1.514 45.457.506v2.02l2.021 2.02v7.577l-2.021 2.02v4.546l-2.02 3.535h-9.598l-.504 13.637 1.516 2.526 33.84.505 17.678-12.627 14.14.504 1.516 5.051-.225 1.094-6.43 11.072v32.858h109.643v-14.288l-58.927-78.927c.661-4.348-1.368-30.68 1.427-30.715l2.5-7.858 15.358-35.712 22.5-22.858-.358-40-47.857 1.785v-.357l-33.213-23.57-21.43.355-16.427-21.428z'
          display='inline'
        ></path>
        <path
          id='south-deering'
          data-name='South Deering'
          fill={props.determineNeighborhoodFill('South Deering')}
          stroke={props.determineZoneStroke('South Deering')}

          d='M1404.307 889.717l-30.357 16.07-.074 10-55.64-.355-1.071-1.788-46.07 1.073-1.073 41.07-21.072 23.572-19.643 41.073-1.07 33.927 31.428 45.358 12.142 1.785 2.143 2.5 58.93-.358 2.142-1.07.358-31.072 1.785-1.428 3.93-.715 2.5 3.928 3.57 7.145 8.572 13.212 3.57.358 10.358 11.072c.393-24.14.357-70.357.357-70.357l10.715.357 2.5-1.072.713-4.285 21.072-1.073 1.785-2.142v-18.928l1.43-1.787 6.785-.355.358-62.858-1.43-3.215v-3.572l3.215-6.07.357-2.143 5-4.642.358-5-1.43-2.5-4.285-1.788.357-3.212-.357-10.358-8.928-10.357z'
          display='inline'
        ></path>
        <path
          id='hegewisch'
          data-name='Hegewisch'
          fill={props.determineNeighborhoodFill('Hegewisch')}
          stroke={props.determineZoneStroke('Hegewisch')}

          d='M1288.236 1147.93l-.714-12.856-27.143-34.286 12.857 1.071.715 1.429h60l.357-28.929 3.571-5.357 3.572.715 2.5 2.5-.357 3.928 7.857 11.072 3.928 6.428h5l8.929 9.286-.357-67.5 2.143-2.143 11.785.714.715-5 23.214-.714.357-20.714h7.857l.357 140.714z'
          display='inline'
        ></path>
        <path
          id='beverly'
          data-name='Beverly'
          fill={props.determineNeighborhoodFill('Beverly')}
          stroke={props.determineZoneStroke('Beverly')}

          d='M991.385 960.477h10.102v-20.203h24.243l.506-63.64 22.223.505 14.142 17.173 29.294 67.175v6.061l-6.06 17.173-95.46 1.01z'
          display='inline'
        ></path>
        <path
          id='morgan-park'
          data-name='Morgan Park'
          fill={props.determineNeighborhoodFill('Morgan Park')}
          stroke={props.determineZoneStroke('Morgan Park')}

          d='M1008.558 984.72h103.035l3.536-1.515 11.617 1.01v42.427l-47.477.505-1.01 22.728-63.64-.505 1.01-20.708-24.749-2.02.087-19.698h10.52l.505-21.213z'
          display='inline'
        ></path>
        <path
          id='washington-heights'
          data-name='Washington Heights'
          fill={props.determineNeighborhoodFill('Washington Heights')}
          stroke={props.determineZoneStroke('Washington Heights')}

          d='M1062.096 894.312l30.305 68.185-.506 4.04-6.566 18.689 26.77-1.01 14.647-1.516-1.516-18.687 3.536-2.526 20.708-.505-.505-22.223 2.525-1.01v-4.041l-4.04-5.05-.505-30.305-24.749-.505-2.02-2.526h-2.526l-1.01 2.526-4.546-1.516v-3.03l4.041-3.03v-3.031l-40.406-.505-7.576 4.546v2.02z'
          display='inline'
        ></path>
      </g>
      <g
        id='layer3'
        fill='#000'
        fillOpacity='1'
        stroke='none'
        fontFamily='sans-serif'
        fontStyle='normal'
        fontWeight='normal'
      >
        <text
          id='text234'
          x='395.365'
          y='404.513'
          style={{ lineHeight: "1.25" }}
          fontSize='40'
          xmlSpace='preserve'
        ></text>
        <text
          id='text242'
          x='161.888'
          y='253.216'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3227' x='161.888' y='253.216'>
          {props.determineMilitiaCount('Portage Park')}
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text256'
          x='157.325'
          y='179.348'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3215'>{props.determineMilitiaCount('Jefferson Park')}</tspan>
        </text>
        <text
          id='text260'
          x='261.94'
          y='199.471'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3217'>{props.determineMilitiaCount('Albany Park')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text264'
          x='345.307'
          y='108.918'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3219'>{props.determineMilitiaCount("Roger's Park")}</tspan>
        </text>
        <text
          id='text268'
          x='349.619'
          y='203.783'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3223'>{props.determineMilitiaCount('Lincoln Square')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text288'
          x='409.113'
          y='158.913'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3221'>{props.determineMilitiaCount('Edgewater')}</tspan>
        </text>
        <text
          id='text292'
          x='432.111'
          y='222.157'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3225'>{props.determineMilitiaCount('Uptown')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text302'
          x='235.756'
          y='260.403'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3229' x='235.756' y='260.403'>
          {props.determineMilitiaCount('Irving Park')}
          </tspan>
        </text>
        <text
          id='text306'
          x='399.302'
          y='286.587'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3233'>{props.determineMilitiaCount('Lakeview')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text310'
          x='310.186'
          y='338.332'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3235'>{props.determineMilitiaCount('Logan Square')}</tspan>
        </text>
        <text
          id='text314'
          x='150.64'
          y='335.457'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3231'>{props.determineMilitiaCount('Belmont Cragin')}</tspan>
        </text>
        <text
          id='text318'
          x='452.484'
          y='346.956'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3237'>{props.determineMilitiaCount('Lincoln Park')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text322'
          x='175.325'
          y='416.824'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3239' x='175.325' y='416.824'>
          {props.determineMilitiaCount('Austin')}
          </tspan>
        </text>
        <text
          id='text326'
          x='273.69'
          y='415.387'
          style={{ lineHeight: "1.25" }}
          fontSize='40'
          xmlSpace='preserve'
        >
          <tspan
            style={{
              InkscapeFontSpecification: "'sans-serif, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            id='tspan324'
            x='273.69'
            y='415.387'
            fontFamily='sans-serif'
            fontSize='26.667'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            {props.determineMilitiaCount('Humboldt Park')}
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text330'
          x='376.617'
          y='416.261'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3241'>{props.determineMilitiaCount('West Town')}</tspan>
        </text>
        <text
          id='text334'
          x='497.354'
          y='411.949'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3249'>{props.determineMilitiaCount('Near North Side')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text338'
          x='314.186'
          y='467.132'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3243' x='314.186' y='467.132'>
          {props.determineMilitiaCount('Garfield Park')}
          </tspan>
        </text>
        <text
          id='text342'
          x='407.052'
          y='518.876'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3247' x='407.052' y='518.876'>
            {props.determineMilitiaCount('Near West Side')}
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text346'
          x='503.666'
          y='480.942'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3251'>{props.determineMilitiaCount('Loop')}</tspan>
        </text>
        <text
          id='text350'
          x='284.564'
          y='566.309'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3245' x='284.564' y='566.309'>
          {props.determineMilitiaCount('Lawndale')}
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text354'
          x='419.737'
          y='680.172'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3271'>{props.determineMilitiaCount('New City')}</tspan>
        </text>
        <text
          id='text358'
          x='456.234'
          y='602.867'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3259'>{props.determineMilitiaCount('Bridgeport')}</tspan>
        </text>
        <text
          id='text362'
          x='541.6'
          y='655.487'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3261'>{props.determineMilitiaCount('Bronzeville')}</tspan>
        </text>
        <text
          id='text366'
          x='292.186'
          y='670.673'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3269'>{props.determineMilitiaCount('Brighton Park')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text370'
          x='319.496'
          y='726.73'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3273'>{props.determineMilitiaCount('Gage Park')}</tspan>
        </text>
        <text
          id='text374'
          x='302.248'
          y='798.598'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3275'>{props.determineMilitiaCount('Chicago Lawn')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text378'
          x='430.172'
          y='774.163'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3277'>{props.determineMilitiaCount('Englewood')}</tspan>
        </text>
        <text
          id='text382'
          x='565.284'
          y='742.541'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3263'>{props.determineMilitiaCount('Hyde Park')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text392'
          x='556.659'
          y='824.47'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3265'>{props.determineMilitiaCount('Greater Grand Crossing')}</tspan>
        </text>
        <text
          id='text396'
          x='634.277'
          y='827.345'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3267'>{props.determineMilitiaCount('South Shore')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text400'
          x='526.475'
          y='886.839'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3289'>{props.determineMilitiaCount('Chatham')}</tspan>
        </text>
        <text
          id='text404'
          x='612.404'
          y='910.962'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3291'>{props.determineMilitiaCount('Calumet Heights')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text408'
          x='694.334'
          y='890.277'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3293'>{props.determineMilitiaCount('South Chicago')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text412'
          x='302.248'
          y='868.716'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3279'>{props.determineMilitiaCount('Ashburn')}</tspan>
        </text>
        <text
          id='text416'
          x='430.172'
          y='885.965'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3281'>{props.determineMilitiaCount('Auburn Gresham')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text420'
          x='384.177'
          y='953.52'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3283'>{props.determineMilitiaCount('Beverly')}</tspan>
        </text>
        <text
          id='text424'
          x='444.546'
          y='970.769'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3285'>{props.determineMilitiaCount('Washington Heights')}</tspan>
        </text>
        <text
          id='text428'
          x='391.364'
          y='1039.45'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3287'>{props.determineMilitiaCount('Morgan Park')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text432'
          x='512.101'
          y='1046.636'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3295'>{props.determineMilitiaCount('Pullman')}</tspan>
        </text>
        <text
          id='text436'
          x='663.024'
          y='1025.076'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3297'>{props.determineMilitiaCount('South Deering')}</tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text440'
          x='730.58'
          y='1102.693'
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
        >
          <tspan id='tspan3299'>{props.determineMilitiaCount('Hegewisch')}</tspan>
        </text>
        <text
          id='text3255'
          x='513.917'
          y='518.375'
          style={{
            lineHeight: "1.25",
            InkscapeFontSpecification: "'sans-serif, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          fontSize='26.667'
          fontStretch='normal'
          fontVariant='normal'
          xmlSpace='preserve'
        >
          <tspan id='tspan3257'>{props.determineMilitiaCount('Near South Side')}</tspan>
        </text>
      </g>
      <g
        id='layer5'
        display='inline'
        fontFamily='Helvetica'
        fontSize='20'
        fontStretch='normal'
        fontStyle='normal'
        fontVariant='normal'
        fontWeight='normal'
        opacity='1'
        transform='translate(-644.597 -.157)'
      >
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3497'
          x='981.1'
          y='67.267'
          display='inline'
        >
          <tspan
            id='tspan3499'
            x='981.1'
            y='67.267'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3501'
              x='981.1'
              y='67.267'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Roger&apos;s
            </tspan>
          </tspan>
          <tspan
            id='tspan3505'
            x='981.1'
            y='82.267'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3507'
              x='981.1'
              y='82.267'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3521'
          x='976.725'
          y='163.284'
          display='inline'
        >
          <tspan
            id='tspan3523'
            x='976.725'
            y='163.284'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3525'
              x='976.725'
              y='163.284'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Lincoln
            </tspan>
          </tspan>
          <tspan
            id='tspan3529'
            x='976.725'
            y='178.284'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3531'
              x='976.725'
              y='178.284'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3491'
          x='1043.559'
          y='126.937'
          display='inline'
        >
          <tspan
            id='tspan3493'
            x='1043.559'
            y='126.937'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3495'
              x='1043.559'
              y='126.937'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3485'
          x='1058.772'
          y='196.845'
          display='inline'
        >
          <tspan
            id='tspan3487'
            x='1058.772'
            y='196.845'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3489'
              x='1058.772'
              y='196.845'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3533'
          x='859.839'
          y='170.458'
          display='inline'
        >
          <tspan
            id='tspan3535'
            x='859.839'
            y='170.458'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3537'
              x='859.839'
              y='170.458'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          transform='translate(-5.437 -15.187)'
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
            whiteSpace: "pre",
            inlineSize: "161.529",
          }}
          id='text3551'
          x='793.632'
          y='139.743'
          display='inline'
        >
          <tspan x='793.632' y='139.743'>
            <tspan
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
            >
              Jefferson
            </tspan>
            <tspan
              style={{
                lineHeight: "1.25",
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
            ></tspan>
          </tspan>
          <tspan x='793.632' y='164.743'>
            <tspan
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
            >
              Park
            </tspan>
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3860'
          x='736.401'
          y='224.799'
          display='inline'
        >
          <tspan id='tspan298' x='736.401' y='224.799'>
            Portage Park
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3854'
          x='877.867'
          y='233.924'
          display='inline'
        >
          <tspan
            id='tspan3856'
            x='877.867'
            y='233.924'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3858'
              x='877.867'
              y='233.924'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3830'
          x='1016.962'
          y='260.299'
          display='inline'
        >
          <tspan
            id='tspan3832'
            x='1016.962'
            y='260.299'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3834'
              x='1016.962'
              y='260.299'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3812'
          x='737.71'
          y='311.547'
          display='inline'
        >
          <tspan
            id='tspan3814'
            x='737.71'
            y='311.547'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3816'
              x='737.71'
              y='311.547'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3818'
          x='902.148'
          y='306.785'
          display='inline'
        >
          <tspan
            id='tspan3820'
            x='902.148'
            y='306.785'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3822'
              x='902.148'
              y='306.785'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3824'
          x='1044.273'
          y='318.518'
          display='inline'
        >
          <tspan
            id='tspan3826'
            x='1044.273'
            y='318.518'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3828'
              x='1044.273'
              y='318.518'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3800'
          x='799.273'
          y='389.799'
          display='inline'
        >
          <tspan
            id='tspan3802'
            x='799.273'
            y='389.799'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3804'
              x='799.273'
              y='389.799'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3788'
          x='875.992'
          y='380.08'
          display='inline'
        >
          <tspan
            id='tspan3790'
            x='875.992'
            y='380.08'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3792'
              x='875.992'
              y='380.08'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Humboldt
            </tspan>
          </tspan>
          <tspan
            id='tspan3796'
            x='875.992'
            y='395.08'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3798'
              x='875.992'
              y='395.08'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3782'
          x='971.742'
          y='389.235'
          display='inline'
        >
          <tspan
            id='tspan3784'
            x='971.742'
            y='389.235'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3786'
              x='971.742'
              y='389.235'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text3770'
          x='1098.987'
          y='380.924'
          display='inline'
        >
          <tspan
            id='tspan3772'
            x='1098.987'
            y='380.924'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3774'
              x='1098.987'
              y='380.924'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Near North
            </tspan>
          </tspan>
          <tspan
            id='tspan3778'
            x='1098.987'
            y='395.924'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan3780'
              x='1098.987'
              y='395.924'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4148'
          x='880.854'
          y='437.018'
          display='inline'
        >
          <tspan
            id='tspan4150'
            x='0'
            y='0'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          ></tspan>
          <tspan
            id='tspan4156'
            x='880.854'
            y='452.018'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4158'
              x='880.854'
              y='452.018'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Garfield
            </tspan>
          </tspan>
          <tspan
            id='tspan4162'
            x='880.854'
            y='467.018'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4164'
              x='880.854'
              y='467.018'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4142'
          x='1001.631'
          y='488.921'
          display='inline'
        >
          <tspan
            id='tspan4144'
            x='1001.631'
            y='488.921'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4146'
              x='1001.631'
              y='488.921'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4136'
          x='1142.273'
          y='454.518'
          display='inline'
        >
          <tspan
            id='tspan4138'
            x='1142.273'
            y='454.518'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4140'
              x='1142.273'
              y='454.518'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4118'
          x='1156.429'
          y='537.518'
          display='inline'
        >
          <tspan
            id='tspan4120'
            x='1156.429'
            y='537.518'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4122'
              x='1156.429'
              y='537.518'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Near
            </tspan>
          </tspan>
          <tspan
            id='tspan4126'
            x='1156.429'
            y='552.518'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4128'
              x='1156.429'
              y='552.518'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South
            </tspan>
          </tspan>
          <tspan
            id='tspan4132'
            x='1156.429'
            y='567.518'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4134'
              x='1156.429'
              y='567.518'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4100'
          x='1163.632'
          y='626.342'
          display='inline'
        >
          <tspan
            id='tspan4102'
            x='1163.632'
            y='626.342'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            Bronzeville{" "}
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4094'
          x='1068.586'
          y='576.643'
          display='inline'
        >
          <tspan
            id='tspan4096'
            x='1068.586'
            y='576.643'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4098'
              x='1068.586'
              y='576.643'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4082'
          x='894.796'
          y='645.297'
          display='inline'
        >
          <tspan id='tspan388' x='894.796' y='645.297'>
            Brighton Park
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4046'
          x='917.023'
          y='710.738'
          strokeWidth='0.986'
          display='inline'
          transform='scale(1.01444 .98577)'
        >
          <tspan
            id='tspan4048'
            x='917.023'
            y='710.738'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            strokeWidth='0.986'
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4050'
              x='917.023'
              y='710.738'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              strokeWidth='0.986'
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4445'
          x='894.869'
          y='536.171'
          display='inline'
        >
          <tspan
            id='tspan4447'
            x='894.869'
            y='536.171'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4449'
              x='894.869'
              y='536.171'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Lawndale
            </tspan>
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4550'
          x='1046.495'
          y='743.437'
          display='inline'
        >
          <tspan
            id='tspan4552'
            x='1046.495'
            y='743.437'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4554'
              x='1046.495'
              y='743.437'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4538'
          x='895.073'
          y='769.83'
          display='inline'
        >
          <tspan id='tspan386' x='895.073' y='769.83'>
            Chicago Lawn
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4716'
          x='1120.526'
          y='796.863'
          display='inline'
        >
          <tspan
            id='tspan4718'
            x='1120.526'
            y='796.863'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4720'
              x='1120.526'
              y='796.863'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Greater Grand
            </tspan>
          </tspan>
          <tspan
            id='tspan4724'
            x='1120.526'
            y='811.863'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4726'
              x='1120.526'
              y='811.863'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4706'
          x='1259.992'
          y='788.924'
          display='inline'
        >
          <tspan
            id='tspan4708'
            x='1259.992'
            y='788.924'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4710'
              x='1259.992'
              y='788.924'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South{" "}
            </tspan>
          </tspan>
          <tspan
            id='tspan4712'
            x='1259.992'
            y='803.924'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4714'
              x='1259.992'
              y='803.924'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4700'
          x='928.429'
          y='842.643'
          display='inline'
        >
          <tspan
            id='tspan4702'
            x='928.429'
            y='842.643'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4704'
              x='928.429'
              y='842.643'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4694'
          x='1146.867'
          y='860.361'
          display='inline'
        >
          <tspan
            id='tspan4696'
            x='1146.867'
            y='860.361'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4698'
              x='1146.867'
              y='860.361'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4670'
          x='1319.434'
          y='852.21'
          display='inline'
        >
          <tspan
            id='tspan4672'
            x='1319.434'
            y='852.21'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4674'
              x='1319.434'
              y='852.21'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              South
            </tspan>
          </tspan>
          <tspan
            id='tspan4678'
            x='1319.434'
            y='867.21'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4680'
              x='1319.434'
              y='867.21'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4850'
          x='1238.163'
          y='868.908'
          display='inline'
        >
          <tspan
            id='tspan4852'
            x='1238.163'
            y='868.908'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4854'
              x='1238.163'
              y='868.908'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
              fontStretch='normal'
              fontStyle='normal'
              fontVariant='normal'
              fontWeight='normal'
            >
              Calumet
            </tspan>
          </tspan>
          <tspan
            id='tspan4858'
            x='1238.163'
            y='883.908'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4860'
              x='1238.163'
              y='883.908'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text7173'
          x='1044.034'
          y='651.181'
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
        >
          <tspan
            id='tspan7175'
            x='1044.034'
            y='651.181'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            New City
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text7207'
          x='1174.873'
          y='716.247'
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
        >
          <tspan id='tspan384' x='1174.873' y='716.247'>
            Hyde Park
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4985'
          x='1005.867'
          y='980.643'
          display='inline'
        >
          <tspan
            id='tspan4987'
            x='1005.867'
            y='980.643'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4989'
              x='1005.867'
              y='980.643'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4973'
          x='1141.483'
          y='1019.76'
          display='inline'
        >
          <tspan
            id='tspan4975'
            x='1141.483'
            y='1019.76'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4977'
              x='1141.483'
              y='1019.76'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text4967'
          x='1267.286'
          y='998.283'
          display='inline'
        >
          <tspan
            id='tspan4969'
            x='1267.286'
            y='998.283'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan4971'
              x='1267.286'
              y='998.283'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text7293'
          x='1051.001'
          y='837.482'
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
        >
          <tspan
            id='tspan7295'
            x='1051.001'
            y='837.482'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            Auburn
          </tspan>
          <tspan
            id='tspan7297'
            x='1051.001'
            y='862.482'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            Gresham
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text7353'
          x='1069.144'
          y='918.768'
          fill='#000'
          fillOpacity='1'
          stroke='none'
          display='inline'
        >
          <tspan
            id='tspan7355'
            x='1069.144'
            y='918.768'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            Washington
          </tspan>
          <tspan
            id='tspan7357'
            x='1069.144'
            y='943.768'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            Heights
          </tspan>
        </text>
        <text
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text5126'
          x='1007.429'
          y='1012.518'
          display='inline'
        >
          <tspan
            id='tspan5128'
            x='1007.429'
            y='1012.518'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan5130'
              x='1007.429'
              y='1012.518'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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
          xmlSpace='preserve'
          style={{
            lineHeight: "0%",
            InkscapeFontSpecification: "'Helvetica, Normal'",
            fontVariantLigatures: "normal",
            fontVariantCaps: "normal",
            fontVariantNumeric: "normal",
            fontVariantEastAsian: "normal",
          }}
          id='text5108'
          x='1307.992'
          y='1134.924'
          display='inline'
        >
          <tspan
            id='tspan5110'
            x='1307.992'
            y='1134.924'
            style={{
              lineHeight: "1.25",
              InkscapeFontSpecification: "'Helvetica, Normal'",
              fontVariantLigatures: "normal",
              fontVariantCaps: "normal",
              fontVariantNumeric: "normal",
              fontVariantEastAsian: "normal",
            }}
            fontFamily='Helvetica'
            fontSize='20'
            fontStretch='normal'
            fontStyle='normal'
            fontVariant='normal'
            fontWeight='normal'
          >
            <tspan
              id='tspan5112'
              x='1307.992'
              y='1134.924'
              style={{
                InkscapeFontSpecification: "'Helvetica, Normal'",
                fontVariantLigatures: "normal",
                fontVariantCaps: "normal",
                fontVariantNumeric: "normal",
                fontVariantEastAsian: "normal",
              }}
              fontFamily='Helvetica'
              fontSize='20'
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