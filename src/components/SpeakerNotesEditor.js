import { ContentState, convertFromRaw, convertFromHTML, Editor, EditorState, RichUtils } from 'draft-js';
import React, { useState } from 'react';
import { useEffectOnce } from 'react-use';
import { createSpeakerNotesHTML } from '../utils/createSpeakerNotesHTML';
import styled from "styled-components";
import Toolbar from "./EditorToolbar";
import { customStyleFn } from "./EditorToolbar/customStyles";



const emptyContentState = convertFromRaw({
    entityMap: {},
    blocks: [
      {
        text: "",
        key: "foo",
        type: "unstyled",
        entityRanges: [],
      },
    ],
});


const SpeakerNotesEditor = ({frames}) => {    
    const [editorState, setEditorState] = useState(
        () => EditorState.createWithContent(emptyContentState),
    );

    const onChange = editorState => {
        console.log(editorState)
        setEditorState(editorState)}
    const handleKeyCommand = command => {
		const newState = RichUtils.handleKeyCommand(
			editorState,
			command
		);
		if (newState) {
			onChange(newState);
			return "handled";
		}
		return "not-handled";
	};

    useEffectOnce(() => {
        const blocksFromHTML = convertFromHTML(createSpeakerNotesHTML(frames))
        const state = ContentState.createFromBlockArray(
            blocksFromHTML.contentBlocks,
            blocksFromHTML.entityMap, 
        )
        setEditorState(
            EditorState.createWithContent(state)
        );        
    }, [editorState, frames])
    
    return (
        <div className='editor-wrapper'>
        <Toolbar
          editorState={editorState}
          updateEditorState={onChange}
        />
        <div className="editor-container">
            <Editor                
                editorState={editorState} 
                onChange={onChange}
                handleKeyCommand={handleKeyCommand}
                customStyleFn={customStyleFn}
            /> 
        </div>                
        </div>
    );
};

export default SpeakerNotesEditor;