import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const modules = {
    toolbar: [
        [{ 'header': [1, 2, 3, false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        ['link', 'image', 'video'],
        ['code-block'],
    ],
};

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'color', 'background',
    'list', 'bullet',
    'link', 'image', 'video',
    'code-block',
];

const TextEditor = () => {
    const [description, setDescription] = useState('');




    return (
        <section className='grid lg:grid-cols-2 grid-cols-1'>
            <div>
                <ReactQuill
                    theme="snow"
                    value={ description }
                    onChange={ setDescription }
                    modules={ modules }
                    formats={ formats }
                />
            </div>

            <div dangerouslySetInnerHTML={ { __html: description } } />

        </section>
    );
};

export default TextEditor;
