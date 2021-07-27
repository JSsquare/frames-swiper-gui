import ImageFrames from "../src/components/ImageFrames"
import { FRAME_SPEAKER_NOTES } from '../src/constants/speaker_notes'

export async function getServerSideProps() {
    // Fetch data from external API if any    
    const frameSpeakerNotes = FRAME_SPEAKER_NOTES        
    
    // Pass data to the page via props
    return { props: { frameSpeakerNotes } }
}

export default ImageFrames