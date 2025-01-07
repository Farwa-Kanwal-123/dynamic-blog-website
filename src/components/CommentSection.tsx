'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Comment {
  id: number
  userName: string
  text: string
  timestamp: string
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([])
  const [newComment, setNewComment] = useState('')
  const [userName, setUserName] = useState('')

  useEffect(() => {
    const storedComments = localStorage.getItem('comments')
    const storedUserName = localStorage.getItem('userName')
    if (storedComments) {
      setComments(JSON.parse(storedComments))
    }
    if (storedUserName) {
      setUserName(storedUserName)
    }
  }, [])

  const addComment = () => {
    if (newComment.trim() !== '' && userName.trim() !== '') {
      const comment: Comment = {
        id: Date.now(),
        userName: userName.trim(),
        text: newComment,
        timestamp: new Date().toLocaleString()
      }
      const updatedComments = [...comments, comment]
      setComments(updatedComments)
      localStorage.setItem('comments', JSON.stringify(updatedComments))
      localStorage.setItem('userName', userName.trim())
      setNewComment('')
      setUserName('')  // Clear the user name input
    }
  }

  const clearComments = () => {
    setComments([])
    localStorage.removeItem('comments')
    localStorage.removeItem('userName')
    setUserName('')
  }

  return (
    <Card className="w-full max-w-2xl mx-auto mt-12 sm:mt-14 md:mt-16 lg:mt-18 ">
      <CardHeader>
        <CardTitle>Comments</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-col space-y-2">
            <Input
              type="text"
              placeholder="Your Name"
              value={userName}
              onChange={(e) => {
                setUserName(e.target.value)
                localStorage.setItem('userName', e.target.value)
              }}
            />
            <div className="flex space-x-2">
              <Input
                type="text"
                placeholder="Add a comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addComment()}
              />
              <Button onClick={addComment} className='bg-blue-600 hover:bg-blue-800 text-white'>Post</Button>
            </div>
          </div>
          <div className="space-y-2">
            {comments.map((comment) => (
              <div key={comment.id} className="bg-secondary p-3 rounded-md">
                <p className="font-semibold">{comment.userName}</p>
                <p>{comment.text}</p>
                <p className="text-sm text-muted-foreground mt-1">{comment.timestamp}</p>
              </div>
            ))}
          </div>
          {comments.length > 0 && (
            <Button variant="outline" onClick={clearComments}>Clear All Comments</Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}

