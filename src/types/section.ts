export interface Image {
  src: string;
  alt: string;
}

export interface Component {
  image: Image;
  title?: string;
  text?: string;
}

export interface Section {
  id: string;
  type: string;
  title: string;
  description: string;
  images: Image[];
  components: Component[];
  position: number;
}
