import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgReact from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgReact()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $bg: #050505;
          $blue: #283849;
          $white: #F9F3EC;
          $gray-4: #BDBDBD;
          $gray-3: #828282;
          $cg-regular: "ClashGrotesk-Regular";
          $cg-bold: "ClashGrotesk-Bold";
          $cg-semibold: "ClashGrotesk-Semibold";
          $gs-medium: "GeneralSans-Medium";
          $gs-regular: "GeneralSans-Regular";
          $cg-light: "ClashGrotesk-Light";
          $cg-medium: "ClashGrotesk-Medium";
    
          $gs-extralightitalic: "GeneralSans-ExtralightItalic";
          $gs-light: "GeneralSans-Light";
          $gs-lightitalic: "GeneralSans-LightItalic";
          $gs-mediumitalic: "GeneralSans-MediumItalic";
          $gs-semibolditalic: "GeneralSans-SemiboldItalic";
          $gs-bold: "GeneralSans-Bold";
          $gs-bolditalic: "GeneralSans-BoldItalic";
          $cg-extralight: "ClashGrotesk-Extralight";
          $gs-extralight: "GeneralSans-Extralight";
          $gs-italic: "GeneralSans-Italic";
          $gs-semibold: "GeneralSans-Semibold";
`,
      },
    },
  },
});
