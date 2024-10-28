"use client";

import "./styles.scss";
import Document from "@tiptap/extension-document";
import Paragraph from "@tiptap/extension-paragraph";
import Placeholder from "@tiptap/extension-placeholder";
import Text from "@tiptap/extension-text";
import { EditorContent, useEditor } from "@tiptap/react";
import React, { forwardRef, useImperativeHandle } from "react";

const NewEditor = forwardRef(
  (props: { className?: string; placeholder?: string }, ref) => {
    const editor = useEditor({
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
      content: ``,
    });

    useImperativeHandle(ref, () => editor, [editor]);

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
