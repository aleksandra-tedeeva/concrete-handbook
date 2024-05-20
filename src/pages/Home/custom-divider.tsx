export default function CustomDivider() {
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
        marginBottom: '-4px',
        marginTop: '0',
        zIndex: 4,
        outline: 'none',
        boxShadow: 'none'
      }}
    />
  );
}
