export interface Image {
  id: number;
  url: string;
  title: string;
  description: string;
}

export interface GalleryProps {
  images: Image[];
}
export interface ProductDetailsProps {
  image: Image;

}
