import React from 'react'
import { type Editor } from '@tiptap/react'
import {
  Bold, Strikethrough, Italic, List, ListOrdered, Heading2, Heading3, Underline, Code,
  LinkIcon
} from 'lucide-react'
import { Toggle } from '../components/Toggle.tsx'

type Props = {
  editor: Editor | null
}

const Toolbar = ({ editor }: Props) => {
  if (!editor) {
    return null
  }

  const setLink = () => {
    const url = prompt('Enter the URL')
    if (url) {
      editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
    }
  }

  return (
    <div className="flex p-1 border border-input bg-transparent rounded-md w-full text-sm overflow-x-scroll scroll">
      {/* Heading 2 */}
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 2 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
      >
        <Heading2 className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Heading 3 */}
      <Toggle
        size="sm"
        pressed={editor.isActive('heading', { level: 3 })}
        onPressedChange={() =>
          editor.chain().focus().toggleHeading({ level: 3 }).run()
        }
      >
        <Heading3 className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Bold */}
      <Toggle
        size="sm"
        pressed={editor.isActive('bold')}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Italic */}
      <Toggle
        size="sm"
        pressed={editor.isActive('italic')}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Underline */}
      <Toggle
        size="sm"
        pressed={editor.isActive('underline')}
        onPressedChange={() => editor.chain().focus().toggleUnderline().run()}
      >
        <Underline className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Strikethrough */}
      <Toggle
        size="sm"
        pressed={editor.isActive('strike')}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
      >
        <Strikethrough className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Code */}
      <Toggle
        size="sm"
        pressed={editor.isActive('code')}
        onPressedChange={() => editor.chain().focus().toggleCode().run()}
      >
        <Code className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      <Toggle
        size="sm"
        pressed={editor.isActive('link')}
        onPressedChange={setLink}
      >
        <LinkIcon className='md:h-4 md:w-4 w-3 h-3' />
      </Toggle>

      {/* Bullet List */}
      <Toggle
        size="sm"
        pressed={editor.isActive('bulletList')}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="md:h-4 md:w-4 w-3 h-3" />
      </Toggle>

      {/* Ordered List */}
      <Toggle
        size="sm"
        pressed={editor.isActive('orderedList')}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrdered className={`${editor.isActive("orderedList") ? " font-bold text-lg": "font-light text-sm"} md:h-4 md:w-4 w-3 h-3`} />
      </Toggle>
    </div>
  )
}

export default Toolbar
