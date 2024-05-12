import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          $bg: #050505;
          $blue: #283849;
          $white: #faf0e6;
          $cg-regular: "ClashGrotesk-Regular";
$cg-semibold: "ClashGrotesk-Semibold";
$cg-bold: "ClashGrotesk-Bold";

$gs-regular: "GeneralSans-Regular";
$gs-medium: "GeneralSans-Medium";

$cg-extralight: "ClashGrotesk-Extralight";
$cg-light: "ClashGrotesk-Light";
$cg-medium: "ClashGrotesk-Medium";

$gs-extralight: "GeneralSans-Extralight";
$gs-extralightitalic: "GeneralSans-ExtralightItalic";
$gs-light: "GeneralSans-Light";
$gs-lightitalic: "GeneralSans-LightItalic";
$gs-italic: "GeneralSans-Italic";
$gs-mediumitalic: "GeneralSans-MediumItalic";
$gs-semibold: "GeneralSans-Semibold";
$gs-semibolditalic: "GeneralSans-SemiboldItalic";
$gs-bold: "GeneralSans-Bold";
$gs-bolditalic: "GeneralSans-BoldItalic";
        `,
      },
    },
  },
  webpack(config) {
    config.module.rules.push({
      loader: "@svgr/webpack",
      options: {
        prettier: false,
        svgo: true,
        svgoConfig: {
          plugins: [
            {
              name: "preset-default",
              params: {
                overrides: { removeViewBox: false },
              },
            },
          ],
        },
        titleProp: true,
      },
      test: /\.svg$/,
    });

    return config;
  },
});
