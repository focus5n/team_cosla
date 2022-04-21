import React, { useState, useEffect } from "react";
import './Diary.css';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from "axios";

function Diary() {
  const [diaryContent, setDiaryContent] = useState({
    title: '',
    content: ''
  })

  const [viewContent, setViewContent] = useState([]);

  const getValue = e => {
    const { name, value} = e.target;
    setDiaryContent({
      ...diaryContent,
      [name]: value
    })
  };

  return (
    <div className="Diary">
      <h1>공감 일기장</h1>
      <div className='공감일기장'>
        {viewContent.map(element =>
          <div style={{ border: '1px solid #333' }}>
            <h2>{element.title}</h2>
            <div>
              {(element.content)}
            </div>
          </div>
        )}
        <h2>오늘의 일기</h2>
      </div>
      <div className='form-wrapper'>
        <input className="title-input"
          type='text'
          placeholder='제목'
          onChange={getValue}
          name='title'
        />
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          onReady={editor => {
            // You can store the "editor" and use when it is needed.
            console.log('Editor is ready to use!', editor);
          }}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDiaryContent({
              ...diaryContent,
              content: data
            })
          }

          }
          onBlur={(event, editor) => {
            console.log('Blur.', editor);
          }}
          onFocus={(event, editor) => {
            console.log('Focus.', editor);
          }}
        />
      </div>
      <button className="submit-button"
        onClick={() => {
          axios.post("/write", null, {
            params:
            {
              title: diaryContent.title,
              content: diaryContent.content,
            },
          }).then((res) => {
            console.log(res)
            
            window.location = "/diarylist"
          })
          setViewContent(viewContent.concat({ diaryContent }));
        }
        }>입력</button>

        <button className="submit-button"
        onClick={() => {
          axios.post("/delete", null, {
            params:
            {
              title: diaryContent.title,
              content: diaryContent.content,
            },
          }).then((res) => {
            console.log(res)
            
            window.location = "/diarylist"
          })
          setViewContent(viewContent.concat({ diaryContent }));
        }
        }>삭제</button>
    </div>

  );
}

export default Diary;
