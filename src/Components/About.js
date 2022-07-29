import React from 'react'

export default function About(props) {
  return (
    <>
    <div className="conatiner my-4">
    <div class={`p-5 mb-4 bg-${props.toggleType === "dark" ? "light" : "dark"} rounded-3 text-${props.toggleType === "dark" ? "dark" : "light"}`}>
        <div class="container-fluid py-5">
        <h1 class="display-5 fw-bold">About iNoteBook</h1>
        <p class="col-md-8 fs-4">This is Your Notebook , Where You can Assess It by Simply Creating an Account or By Logging In.</p>
        <p class="col-md-8 fs-4">iNoteBook was Made by Me <q>V Nagateja</q> With the Help of Tutorial of ReactJS by <q><b>Code With Harry</b></q></p>
        <h1 class="text-end">Thank You<br/>- Nagateja</h1>
        </div>
    </div>
    </div>
    </>
  )
}
