import React from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CKEditorNoSSR = (props) => {
    return <CKEditor
        editor={ClassicEditor}
        data={props.blogContent}
        onReady={editor => {
            // You can store the "editor" and use when it is needed.
            // console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
            const data = editor.getData();
            // console.log({ event, editor, data });
            props.setBlogContent(data);
        }}
        onBlur={(event, editor) => {
            // console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
            // console.log('Focus.', editor);
        }}
        style={{
            height: "100%"
        }}
    />
}

export default CKEditorNoSSR;