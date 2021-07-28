export const createSpeakerNotesHTML = (frames) => {
    let textAreaSpeakerNoteContent = ''
    frames.notes.map(note => {
        textAreaSpeakerNoteContent = textAreaSpeakerNoteContent + `<b>${note.speakerName}:</b><br />`
        Object.keys(note.timeStamps).map(key => {
            textAreaSpeakerNoteContent = textAreaSpeakerNoteContent + `<b>${key} :</b> ${note.timeStamps[key]} <br/>`
        })
    })
    return textAreaSpeakerNoteContent;

}