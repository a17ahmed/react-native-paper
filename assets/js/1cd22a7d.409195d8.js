"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[37],{7662:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const o={title:"Fonts"},l="Fonts",r={unversionedId:"guides/fonts",id:"guides/fonts",title:"Fonts",description:"Installing custom fonts",source:"@site/docs/guides/04-fonts.md",sourceDirName:"guides",slug:"/guides/fonts",permalink:"/react-native-paper/docs/guides/fonts",draft:!1,editUrl:"https://github.com/callstack/react-native-paper/tree/main/docs/docs/guides/04-fonts.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Fonts"},sidebar:"tutorialSidebar",previous:{title:"Icons",permalink:"/react-native-paper/docs/guides/icons"},next:{title:"Using on the Web",permalink:"/react-native-paper/docs/guides/react-native-web"}},s={},p=[{value:"Installing custom fonts",id:"installing-custom-fonts",level:2},{value:"Configuring fonts in ThemeProvider",id:"configuring-fonts-in-themeprovider",level:2},{value:"Material Design 2",id:"material-design-2",level:3},{value:"Using <code>configureFonts</code> helper",id:"using-configurefonts-helper",level:4},{value:"Material Design 3",id:"material-design-3",level:3},{value:"Variants",id:"variants",level:4},{value:"Using <code>configureFonts</code> helper",id:"using-configurefonts-helper-1",level:4}],m={toc:p};function f(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fonts"},"Fonts"),(0,i.kt)("h2",{id:"installing-custom-fonts"},"Installing custom fonts"),(0,i.kt)("p",null,"The easiest way to install custom fonts to your RN project is do as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Define path to assets directory with fonts in project:"),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  module.exports = {\n    ...\n    assets: [\n      './assets/fonts'\n    ],\n")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("inlineCode",{parentName:"p"},"fonts")," is a folder with ",(0,i.kt)("inlineCode",{parentName:"p"},".ttf")," files")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Place your font files in your assets directory.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Link font files, using the following command in the terminal:"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React Native  ",(0,i.kt)("inlineCode",{parentName:"p"},">= 0.69"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native-asset\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"React Native ",(0,i.kt)("inlineCode",{parentName:"p"},"< 0.69"),":"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npx react-native link\n")))),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Restart your project to refresh changes.")),(0,i.kt)("p",null,"Now, you are able to use ",(0,i.kt)("inlineCode",{parentName:"p"},"fontFamily")," from font files."),(0,i.kt)("h2",{id:"configuring-fonts-in-themeprovider"},"Configuring fonts in ThemeProvider"),(0,i.kt)("h3",{id:"material-design-2"},"Material Design 2"),(0,i.kt)("h4",{id:"using-configurefonts-helper"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"configureFonts")," helper"),(0,i.kt)("p",null,"To create a custom font, prepare a ",(0,i.kt)("inlineCode",{parentName:"p"},"fontConfig")," object where fonts are divided by platforms. After that, you have to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"fontConfig")," into ",(0,i.kt)("inlineCode",{parentName:"li"},"configureFonts")," params object property called ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," "),(0,i.kt)("li",{parentName:"ul"},"set the params object property ",(0,i.kt)("inlineCode",{parentName:"li"},"isV3")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),". ")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"fontConfig")," object accepts ",(0,i.kt)("inlineCode",{parentName:"p"},"ios"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"macos"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"windows"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"web"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"native"),". Use these to override fonts on particular platforms."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"At a minimum, you need to explicitly pass fonts for ",(0,i.kt)("inlineCode",{parentName:"p"},"android"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ios"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"web"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { configureFonts, MD2LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst fontConfig = {\n  web: {\n    regular: {\n      fontFamily: 'sans-serif',\n      fontWeight: 'normal',\n    },\n    medium: {\n      fontFamily: 'sans-serif-medium',\n      fontWeight: 'normal',\n    },\n    light: {\n      fontFamily: 'sans-serif-light',\n      fontWeight: 'normal',\n    },\n    thin: {\n      fontFamily: 'sans-serif-thin',\n      fontWeight: 'normal',\n    },\n  },\n  ios: {\n    regular: {\n      fontFamily: 'sans-serif',\n      fontWeight: 'normal',\n    },\n    medium: {\n      fontFamily: 'sans-serif-medium',\n      fontWeight: 'normal',\n    },\n    light: {\n      fontFamily: 'sans-serif-light',\n      fontWeight: 'normal',\n    },\n    thin: {\n      fontFamily: 'sans-serif-thin',\n      fontWeight: 'normal',\n    },\n  },\n  android: {\n    regular: {\n      fontFamily: 'sans-serif',\n      fontWeight: 'normal',\n    },\n    medium: {\n      fontFamily: 'sans-serif-medium',\n      fontWeight: 'normal',\n    },\n    light: {\n      fontFamily: 'sans-serif-light',\n      fontWeight: 'normal',\n    },\n    thin: {\n      fontFamily: 'sans-serif-thin',\n      fontWeight: 'normal',\n    },\n  }\n};\n\nconst theme = {\n  ...MD2LightTheme,\n  fonts: configureFonts({config: fontConfig, isV3: false}),\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("h3",{id:"material-design-3"},"Material Design 3"),(0,i.kt)("h4",{id:"variants"},"Variants"),(0,i.kt)("p",null,"In the latest version fonts in theme are structured based on the ",(0,i.kt)("inlineCode",{parentName:"p"},"variant")," keys e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"displayLarge")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"bodyMedium")," which are then used in ",(0,i.kt)("inlineCode",{parentName:"p"},"Text"),"'s component throughout the whole library."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The default ",(0,i.kt)("inlineCode",{parentName:"p"},"fontFamily")," is different per particular platfrom:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-js"},"Platform.select({\n  web: 'Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif',\n  ios: 'System',\n  default: 'sans-serif', // and 'sans-serif-medium' for `fontWeight:\"500\"`\n}),\n"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"display"},"Display"))),(0,i.kt)("div",{style:{flexDirection:"row",display:"flex"}},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"displaySmall": {\n  "fontFamily": "FontFamily",\n  "fontSize": 36,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 44,\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"displayMedium": {\n  "fontFamily": "FontFamily",\n  "fontSize": 45,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 52,\n}\n'))),(0,i.kt)("div",{style:{flex:1}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"displayLarge": {\n  "fontFamily": "FontFamily",\n  "fontSize": 57,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 64,\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"headline"},"Headline"))),(0,i.kt)("div",{style:{flexDirection:"row",display:"flex"}},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"headlineSmall": {\n  "fontFamily": "FontFamily",\n  "fontSize": 24,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 32,\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"headlineMedium": {\n  "fontFamily": "FontFamily",\n  "fontSize": 28,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 36,\n}\n'))),(0,i.kt)("div",{style:{flex:1}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"headlineLarge": {\n  "fontFamily": "FontFamily",\n  "fontSize": 32,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 40,\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"title"},"Title"))),(0,i.kt)("div",{style:{flexDirection:"row",display:"flex"}},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"titleSmall": {\n  "fontFamily": "FontFamily",\n  "fontSize": 14,\n  "fontWeight": "500",\n  "letterSpacing": 0.1,\n  "lineHeight": 20,\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"titleMedium": {\n  "fontFamily": "FontFamily",\n  "fontSize": 16,\n  "fontWeight": "500",\n  "letterSpacing": 0.15,\n  "lineHeight": 24,\n}\n'))),(0,i.kt)("div",{style:{flex:1}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"titleLarge": {\n  "fontFamily": "FontFamily",\n  "fontSize": 22,\n  "fontWeight": "400",\n  "letterSpacing": 0,\n  "lineHeight": 28,\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"label"},"Label"))),(0,i.kt)("div",{style:{flexDirection:"row",display:"flex"}},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"labelSmall": {\n  "fontFamily": "FontFamily",\n  "fontSize": 11,\n  "fontWeight": "500",\n  "letterSpacing": 0.5,\n  "lineHeight": 16,\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"labelMedium": {\n  "fontFamily": "FontFamily",\n  "fontSize": 12,\n  "fontWeight": "500",\n  "letterSpacing": 0.5,\n  "lineHeight": 16,\n}\n'))),(0,i.kt)("div",{style:{flex:1}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"labelLarge": {\n  "fontFamily": "FontFamily",\n  "fontSize": 14,\n  "fontWeight": "500",\n  "letterSpacing": 0.1,\n  "lineHeight": 20,\n}\n')))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h4",{parentName:"li",id:"body"},"Body"))),(0,i.kt)("div",{style:{flexDirection:"row",display:"flex"}},(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"bodySmall": {\n  "fontFamily": "FontFamily",\n  "fontSize": 12,\n  "fontWeight": "400",\n  "letterSpacing": 0.4,\n  "lineHeight": 16,\n}\n'))),(0,i.kt)("div",null,(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"bodyMedium": {\n  "fontFamily": "FontFamily",\n  "fontSize": 14,\n  "fontWeight": "400",\n  "letterSpacing": 0.25,\n  "lineHeight": 20,\n}\n'))),(0,i.kt)("div",{style:{flex:1}},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"bodyLarge": {\n  "fontFamily": "FontFamily",\n  "fontSize": 16,\n  "fontWeight": "400",\n  "letterSpacing": 0.15,\n  "lineHeight": 24,\n}\n')))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If any component uses Paper's ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," component, without specified ",(0,i.kt)("b",null,"variant"),", then ",(0,i.kt)("inlineCode",{parentName:"p"},"default")," variant is applied:"),(0,i.kt)("pre",{parentName:"admonition"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"default": {\n  "fontFamily": "FontFamily",\n  "fontWeight": "400",\n  "letterSpacing": 0,\n},\n'))),(0,i.kt)("h4",{id:"using-configurefonts-helper-1"},"Using ",(0,i.kt)("inlineCode",{parentName:"h4"},"configureFonts")," helper"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If there is a need to create a custom font variant, prepare its config object including required all fonts properties. After that, defined ",(0,i.kt)("inlineCode",{parentName:"li"},"fontConfig")," has to be passed under the ",(0,i.kt)("b",null,(0,i.kt)("inlineCode",{parentName:"li"},"variant"))," name as ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," into the params object:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst fontConfig = {\n  customVariant: {\n    fontFamily: Platform.select({\n      web: 'Roboto, \"Helvetica Neue\", Helvetica, Arial, sans-serif',\n      ios: 'System',\n      default: 'sans-serif',\n    }),\n    fontWeight: '400',\n    letterSpacing: 0.5,\n    lineHeight: 22,\n    fontSize: 20,\n  }\n};\n\nconst theme = {\n  ...MD3LightTheme,\n  fonts: configureFonts({config: fontConfig}),\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("p",null,"If you're using TypeScript you will need to create a custom ",(0,i.kt)("inlineCode",{parentName:"p"},"Text")," component which accepts your custom variants:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"import { customText } from 'react-native-paper'\n\n// Use this instead of importing `Text` from `react-native-paper`\nexport const Text = customText<'customVariant'>()\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In order to override one of the available ",(0,i.kt)("inlineCode",{parentName:"li"},"variant"),"'s font properties, pass the modified ",(0,i.kt)("inlineCode",{parentName:"li"},"fontConfig")," under specific ",(0,i.kt)("b",null,(0,i.kt)("inlineCode",{parentName:"li"},"variant"))," name as ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," into the params object:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst fontConfig = {\n  bodyLarge: {\n    letterSpacing: 0.5,\n    lineHeight: 22,\n    fontSize: 20,\n  }\n};\n\nconst theme = {\n  ...MD3LightTheme,\n  fonts: configureFonts({config: fontConfig}),\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"However, if you just want to override any font property e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"fontFamily")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"letterSpacing")," for ",(0,i.kt)("b",null,"all")," variants, you can pass the ",(0,i.kt)("inlineCode",{parentName:"li"},"fontConfig")," as a ",(0,i.kt)("inlineCode",{parentName:"li"},"config")," into the params object ",(0,i.kt)("b",null,"without")," specifying variant name:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import * as React from 'react';\nimport { configureFonts, MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';\nimport App from './src/App';\n\nconst fontConfig = {\n  fontFamily: 'NotoSans'\n};\n\nconst theme = {\n  ...MD3LightTheme,\n  fonts: configureFonts({config: fontConfig}),\n};\n\nexport default function Main() {\n  return (\n    <PaperProvider theme={theme}>\n      <App />\n    </PaperProvider>\n  );\n}\n")))}f.isMDXComponent=!0}}]);