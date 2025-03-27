export {};

declare global {
  type ProjectPreviewItem = {
    title: string;
    desc: string;
    special: string;
    tags: string[];
    imgUrl: string;
    url: string;
  };
}
