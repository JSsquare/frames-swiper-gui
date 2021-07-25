import ImageFrames from "../src/components/ImageFrames"
import { IMAGE_NAMES }  from '../src/constants/urls'

export async function getServerSideProps() {
    // Fetch data from external API if any
    const googleStorageImages = IMAGE_NAMES    
    // Pass data to the page via props
    return { props: { googleStorageImages } }
}

export default ImageFrames