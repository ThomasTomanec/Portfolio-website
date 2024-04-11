import { Request, Response } from "express";
import fetch from 'node-fetch'

const users = async (req: Request, res: Response): Promise<void> => {
  const { username } = req.query;

  const response = await fetch('https://api.github.com/users/' + username, {
    headers: { Authorization: `Bearer ${process.env.GH_TOKEN}` },
  });
  const data = await response.json();

  res.status(200).json(data);
};

export default users;
