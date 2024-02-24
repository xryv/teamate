import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        noirTransparent: PaletteColor
        purplePV: PaletteColor
        bluePV: PaletteColor
        orangePV: PaletteColor
        transparant: PaletteColor
        slate: PaletteColor
    }
    interface PaletteOptions {
        noirTransparent: PaletteColorOptions
        purplePV: PaletteColorOptions
        bluePV: PaletteColorOptions
        orangePV: PaletteColorOptions
        transparant: PaletteColorOptions
        slate: PaletteColorOptions
    }
}
