import { SvgIcon, SvgIconProps } from '@mui/material';

export default function RussianFlag(props: SvgIconProps) {
  return (
    <SvgIcon {...props}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 512.001 512.001"
        // @ts-ignore
        style={{ enableBackground: 'new 0 0 512.001 512.001' }}
      >
        <path
          style={{ fill: '#F5F5F5' }}
          d="M512,200.093H0V97.104c0-4.875,3.953-8.828,8.828-8.828h494.345c4.875,0,8.828,3.953,8.828,8.828 L512,200.093L512,200.093z"
        ></path>
        <path
          style={{ fill: '#FF4B55' }}
          d="M503.172,423.725H8.828c-4.875,0-8.828-3.953-8.828-8.828V311.909h512v102.988 C512,419.773,508.047,423.725,503.172,423.725z"
        ></path>
        <rect y="200.091" style={{ fill: '#41479B' }} width="512" height="111.81"></rect>
      </svg>
    </SvgIcon>
  );
}
