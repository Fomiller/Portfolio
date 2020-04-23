import { createMuiTheme } from '@material-ui/core/styles';

 const PortfolioTheme = createMuiTheme({
  "palette": {
      "common": {
          "black": "#000",
          "white": "#fff"
      },
      "background": {
          "paper": "#fff",
          "default": "#fafafa"
      },
      "primary": {
          "light": "rgba(72, 72, 72, 1)",
          "main": "rgba(33, 33, 33, 1)",
          "dark": "rgba(0, 0, 0, 1)",
          "contrastText": "rgba(105, 240, 174, 1)"
      },
      "secondary": {
          "light": "rgba(159, 255, 224, 1)",
          "main": "rgba(105, 240, 174, 1)",
          "dark": "rgba(43, 189, 126, 1)",
          "contrastText": "rgba(33, 33, 33, 1)"
      },
      "error": {
          "light": "#e57373",
          "main": "#f44336",
          "dark": "#d32f2f",
          "contrastText": "#fff"
      },
      "text": {
          "primary": "rgba(0, 0, 0, 0.87)",
          "secondary": "rgba(0, 0, 0, 0.54)",
          "disabled": "rgba(0, 0, 0, 0.38)",
          "hint": "rgba(0, 0, 0, 0.38)"
      }
  },
  "typography": {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    "fontSize": "16",
  },
})

 export default PortfolioTheme;