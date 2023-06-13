import React from 'react'
import { useRouter } from 'next/router'
const details = () => {
    const router = useRouter()
    const pid = router.query.postId
    const cid = router.query.commentsId
  return (
    <div>details comments {pid}:{cid}</div>
  )
}

export default details