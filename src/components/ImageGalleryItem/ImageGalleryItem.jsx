import { Img, Li } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ images, onClick }) => {
  return images.map(({ id, webformatURL, tags, largeImageURL }) => {
    return (
      <Li key={id}>
        <Img
          src={webformatURL}
          alt={tags}
          onClick={() => {
            onClick(largeImageURL, tags);
          }}
        />
      </Li>
    );
  });
};
