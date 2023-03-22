import { Component } from 'react';
import { Overlay, ModalDiv } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.props.onClick);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.props.onClick);
  }

  render() {
    const {
      openedImage: { src, tags },
      onClick,
    } = this.props;
    return (
      <Overlay onClick={onClick}>
        <ModalDiv>
          <img src={src} alt={tags} />
        </ModalDiv>
      </Overlay>
    );
  }
}
