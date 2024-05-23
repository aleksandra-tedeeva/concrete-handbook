export interface CustomDividerProps {
  top?: string;
  bottom?: string;
}

export default function CustomDivider({ top = '4px', bottom = '-16px' }: CustomDividerProps) {
  return (
    <hr
      style={{
        color: 'red',
        borderTop: '4px solid #000',
        borderBottom: 'none',
        borderRadius: '10px',
        width: '90%',
        padding: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: top,
        marginBottom: bottom,
        zIndex: 4,
        outline: 'none',
        boxShadow: 'none'
      }}
    />
  );
}
