"use client";

import "./styles.scss";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import React, { forwardRef, useImperativeHandle } from "react";

const newEditor = (className?:string,placeholder?:string) => {
  const editor = useEditor({
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `bg-gray-800/10 rounded-md min-h-20 p-3 ${className ?? ""}`,
      },
    },
    extensions: [
      Document,
      Paragraph,
      Text,
      Placeholder.configure({ placeholder: `${placeholder ?? ""}` }),
    ],
  
    content: ``,
  }) as Editor;

  return editor;
} 

  
export default newEditor;
