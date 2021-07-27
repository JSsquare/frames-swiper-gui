
const SpeakerNotesEditor = ({frames}) => {
    return (
        <div>
            {frames.notes.map((note) => (
                <>
                <b>{note.speakerName} :</b> <br/>
                {Object.keys(note.timeStamps).map((key) => (
                    <>
                    {key} : {note.timeStamps[key]} <br/>
                    </>
                    
                ))}
                </>
            ))}           
        </div>
    );
};

export default SpeakerNotesEditor;