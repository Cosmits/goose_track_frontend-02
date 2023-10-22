import { ColorRing } from 'react-loader-spinner'

function Loader() {
  return (
    <ColorRing
      visible={true}
      height="180"
      width="180"
      ariaLabel="blocks-loading"
      wrapperStyle={{
        width: '100%',
        margin: '0 auto',
      }}
      colors={['#13151A', '#3E85F3', '#DCEBF7', '#E74A3B', '#FFD2DD ']}
    />
  )
}

export default Loader