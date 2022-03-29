import React from 'react'
import Header from './Header'
import NoteList from './NoteList'
import SearchForm from './SearchForm'
import TextArea from './TextArea'

function Content() {
  return (
    <div>
        <Header/>
        <SearchForm/>
        <TextArea/>
        <NoteList/>
    </div>
  )
}

export default Content