// pages/api/blogs.ts
import { NextApiRequest, NextApiResponse } from 'next';
import mockData from '../../data/mockData.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(mockData);
  } else if (req.method === 'POST') {
    const newBlog = req.body;
    newBlog.id = Date.now(); // Replace with appropriate id generation logic
    mockData.push(newBlog);
    res.status(201).json(newBlog);
  } else if (req.method === 'PUT') {
    const updatedBlog = req.body;
    const index = mockData.findIndex(blog => blog.id === updatedBlog.id);
    if (index !== -1) {
      mockData[index] = updatedBlog;
      res.status(200).json(updatedBlog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
