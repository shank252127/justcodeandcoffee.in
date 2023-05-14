export const HEADER_DATA = {
  LEFT_SIDE_MENU: {
    LOGO_IMG: 'assets/header_nav_logo.png',
    APP_TITLE: 'justCodeAndCoffee.in',
  },
  RIGHT_SIDE_MENU: [
    {
      ID: 'ONE',
      NAME: 'About',
      ROUTE_PATH: 'about',
      IS_NESTED: false,
    },
    {
      ID: 2,
      NAME: 'Contact',
      ROUTE_PATH: 'contact',
      IS_NESTED: false,
    },
    {
      ID: 'THREE',
      NAME: 'Dev. Tools',
      ROUTE_PATH: 'projects',
      IS_NESTED: true,
    },
    {
      ID: 4,
      NAME: 'Projects',
      ROUTE_PATH: 'projects',
      IS_NESTED: false,
    },
  ],
  NESTED_MENU: {
    THREE: [
      {
        NAME: 'JSON Formatter',
        ROUTE_PATH: 'devtools/jsonformater',
        ICON: 'assets/json-formatter.svg',
      },
      {
        NAME: 'JSON Comp',
        ROUTE_PATH: 'devtools/jsoncomp',
        ICON: 'assets/json-comp.svg',
      },
      {
        NAME: 'JSON to Object',
        ROUTE_PATH: 'devtools/jsontoobj',
        ICON: 'assets/string-compare.svg',
      },
      {
        NAME: 'String Comp',
        ROUTE_PATH: 'devtools/stringcomp',
        ICON: 'assets/string-comp.svg',
      },
      {
        NAME: 'Photo Resizer',
        ROUTE_PATH: 'devtools/photoresizer',
        ICON: 'assets/photo-resize.svg',
      },
    ],
  },
};

//  RIGHT_SIDE_MENU: ['Home', 'Courses', 'Projects', 'About', 'Contact'],
// / ROUTER_LINK: ['home', 'courses', 'projects', 'about', 'contact'],
