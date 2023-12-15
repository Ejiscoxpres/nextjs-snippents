'use client';
import {Snippet} from '@prisma/client';
import Editor from '@monaco-editor/react';
import {useState} from 'react';
 
 interface SnippetEditFormProps{
    snippet:Snippet
 }

export default function SnippetEditForm({snippet}:SnippetEditFormProps){
    const handleEditorChange = (value: string = "") => {

        const [code, setCode] = useState(snippet.code)
            console.log(value);
    };
    return <div>
        <Editor
        height='40vh'
        theme='dark'
        language='javascript'
        defaultValue={snippet.code} 
        options={{minimap:{enabled:false}}}
        onChange={handleEditorChange}
        />
    </div>;

}