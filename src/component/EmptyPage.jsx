import React from 'react'
import { Link } from "react-router-dom"

const EmptyPage = () => {
  return (
    <>
        <div className="empty_page">
            <h2>잘못된 접근입니다.</h2>
            <Link to="/">돌아가기<span>→</span></Link>
        </div>
    </>
  )
}

export default EmptyPage