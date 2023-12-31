import { ColorRing } from 'react-loader-spinner'

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="130"
      width="130"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        position: 'absolute',
        top: 0,
        left: 0, 
        right: 0,
        margin: '0 auto',
        zIndex: 1,
      }}
      colors={['#13151A', '#3E85F3', '#DCEBF7', '#E74A3B', '#FFD2DD ']}
    />
  )
}

export default Loader