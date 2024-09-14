import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import React from 'react'
import Toolbar from '../lib/Toolbar.tsx'
import Link from '@tiptap/extension-link'

type EditorProps = {
  description: string
  onChange: (richText: string) => void
  name: string
}

const Tiptap = ({ description, onChange, name }: EditorProps) => {
  // Initialize the editor with StarterKit and additional extensions
  const editor = useEditor({
    extensions: [
      StarterKit, 
      Underline, 
      Heading.configure({ levels: [1, 2, 3] }), // Configure heading levels
      BulletList,
      OrderedList,
      Link.configure({
        openOnClick: false, // Control how links open
      }),
    ],
    content: description,
    editorProps: {
      attributes: {
        class: 'rounded-md border min-h-[200px] border-input font-light p-3',
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML())
    },
  })

  return (
    <div className='w-full'>
      {/* Toolbar with rich text actions */}
      <Toolbar editor={editor} />
      {/* Editor content */}
      <EditorContent className='' editor={editor} name={name} />
    </div>
  )
}

export default Tiptap
