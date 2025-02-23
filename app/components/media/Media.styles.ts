import { styled } from '@nextui-org/react';

const BackgroundTabLink = styled('div', {
  backgroundColor: 'unset !important',
  position: 'absolute',
  top: 0,
  width: '100%',
  zIndex: -2,
  height: '100%',
  backgroundImage:
    'linear-gradient(var(--nextui-colors-backgroundLight) 0%, var(--nextui-colors-background) 100%), linear-gradient(var(--nextui-colors-backgroundLight) 0%, var(--nextui-colors-backgroundContrastAlpha) 100%)',
  backgroundRepeat: 'no-repeat',
  backgroundBlendMode: 'color',
  borderTopRightRadius: '$lg',
  borderTopLeftRadius: '$lg',
});

const BackgroundContent = styled('div', {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: -1,
  display: 'block',
  height: 'calc(100% + 8rem)',
  background: 'linear-gradient(transparent 0%, var(--nextui-colors-backgroundLight) 100%)',
});

export { BackgroundTabLink, BackgroundContent };
