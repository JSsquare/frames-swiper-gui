import React from "react";
import createStyles from "draft-js-custom-styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

//STYLES THAT WILL BE TOGGELED
const { styles, customStyleFn, exporter } = createStyles(
  ["font-size", "color"],
  "CUSTOM_"
);

const customStyles = [
  {
    label: "red-color",
    icon: <FontAwesomeIcon icon={faPaintBrush} />,
    styler: editorState => {
      return styles.color.toggle(editorState, "red");
    }
  }
];

export { customStyles, customStyleFn };

export function RenderCustomStyles(props) {
  const { editorState, updateEditorState } = props;

  const applyCustomStyle = item => {
    if (item) {
      const newEditorState = item.styler(editorState);
      updateEditorState(newEditorState);
    }
  };

  return (
    <div className="custom-style-container">
      {customStyles.map((item, idx) => {
        return (
          <div className="toolbar-item"
            key={`${item.label}-${idx}`}
            onClick={e => applyCustomStyle(item)}
          >
            {item.icon || item.label}
          </div>
        );
      })}
    </div>
  );
}