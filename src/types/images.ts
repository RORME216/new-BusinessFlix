export interface AppImage {
  src: string;
  alt: string;
}

export interface LinkableImage extends AppImage {
  link: string;
}
