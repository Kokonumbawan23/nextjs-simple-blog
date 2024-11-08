"use client";

import "./styles.scss";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import { Editor, EditorContent, useEditor } from "@tiptap/react";
import React, { forwardRef, useImperativeHandle, useRef } from "react";

const NewEditor = forwardRef(
  (props: { className?: string; placeholder?: string, handler: (a: string) => void }, ref) => {

    const parentHandler = props.handler;
    const editor: Editor = useEditor({
      immediatelyRender: false,
      editorProps: {
        attributes: {
          class: `bg-gray-800/10 rounded-md min-h-20 p-3 ${props.className ?? ""}`,
        },
      },
      extensions: [
        Document,
        Paragraph,
        Text,
        Placeholder.configure({ placeholder: `${props.placeholder ?? ""}` }),
      ],
      onUpdate: ({ editor }) => {
        parentHandler(editor.getHTML());
        
      },
      content: ``,
    }) as Editor;

    useImperativeHandle(ref, () => {
      return {
        getHTML: () => editor.getHTML(),
      };
    }, []);

    if (!editor) {
      return null;
    }

    return (
      <>
        <EditorContent editor={editor} />
      </>
    );
  },
);

export default NewEditor;
