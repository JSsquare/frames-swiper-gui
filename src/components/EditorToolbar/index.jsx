import React from "react";
import { RenderInlineStyles } from "./inlineStyle";
import { RenderCustomStyles } from "./customStyles";

export default class Toolbar extends React.Component {
  render() {    
    return (
      <div className="toolbar-container">
        <RenderInlineStyles
          editorState={this.props.editorState}
          updateEditorState={this.props.updateEditorState}
        />
        <RenderCustomStyles
          editorState={this.props.editorState}
          updateEditorState={this.props.updateEditorState}
        />
      </div>
    );
  }
}